import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import http from 'node:http';
import { test } from 'node:test';
import { setTimeout as delay } from 'node:timers/promises';

test('development server serves the catalog and blocks access outside public assets', { timeout: 30000 }, async (t) => {
  const probe = http.createServer();
  probe.listen(0, '127.0.0.1');
  await once(probe, 'listening');
  const { port } = probe.address();
  await new Promise((resolve) => probe.close(resolve));

  const child = spawn(process.execPath, ['scripts/dev-server.mjs', '--no-open', '--port', String(port)], {
    cwd: new URL('../', import.meta.url),
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  let output = '';
  child.stdout.on('data', (data) => { output += data; });
  child.stderr.on('data', (data) => { output += data; });
  t.after(async () => {
    if (child.exitCode !== null) return;
    const exited = once(child, 'exit');
    child.kill('SIGTERM');
    await exited;
  });

  const base = `http://127.0.0.1:${port}`;
  let response;
  for (let attempt = 0; attempt < 100; attempt++) {
    assert.equal(child.exitCode, null, output);
    try {
      response = await fetch(base, { signal: AbortSignal.timeout(15000) });
      break;
    } catch {
      await delay(100);
    }
  }
  assert.ok(response, output);
  assert.equal(response.status, 200, output);
  assert.match(await response.text(), /assets\/js\/index\.js/);

  const bundle = await fetch(`${base}/assets/js/index.js`);
  assert.equal(bundle.status, 200);
  assert.match(await bundle.text(), /webpack-dev-middleware\/client/);
  const image = await fetch(`${base}/images/photo.jpg`);
  assert.equal(image.status, 200);
  assert.match(image.headers.get('content-type'), /^image\/jpeg/);
  assert.equal((await fetch(`${base}/images/photo.jpg`, { method: 'HEAD' })).status, 200);

  for (const pathname of ['/package.json', '/.git/config', '/images/%2e%2e%2fpackage.json', '/missing']) {
    assert.equal((await fetch(`${base}${pathname}`)).status, 404, pathname);
  }
  const hostileHostStatus = await new Promise((resolve, reject) => {
    http.get(base, { headers: { Host: 'attacker.example' } }, (res) => {
      res.resume();
      resolve(res.statusCode);
    }).on('error', reject);
  });
  assert.equal(hostileHostStatus, 403);
});
