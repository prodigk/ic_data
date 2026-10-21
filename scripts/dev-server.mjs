import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import open from 'open';
import sirv from 'sirv';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import createConfig from '../webpack.config.js';

const { values } = parseArgs({
  options: {
    port: { type: 'string', default: process.env.PORT || '8080' },
    'no-open': { type: 'boolean', default: false },
  },
});
const port = Number(values.port);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('Port must be an integer between 1 and 65535.');
}

const root = fileURLToPath(new URL('../', import.meta.url));
const compiler = webpack({ ...createConfig({ NODE_ENV: 'dev' }), mode: 'development' });
// Use the middleware directly to avoid the unpatched braces dependency in
// webpack-dev-server's proxy stack. HMR and automatic rebuilds remain enabled.
const middleware = webpackDevMiddleware(compiler, { publicPath: '/', hot: true });
const images = sirv(path.join(root, 'images'), { dev: true });
const server = http.createServer((req, res) => {
  const allowedHosts = new Set(['localhost', '127.0.0.1']);
  if (!allowedHosts.has((req.headers.host || '').split(':')[0])) {
    res.writeHead(403).end('Invalid Host header');
    return;
  }
  middleware(req, res, (error) => {
    if (error) {
      console.error(error);
      res.writeHead(500).end('Compilation failed');
      return;
    }
    const notFound = () => res.writeHead(404).end('Not found');
    if (req.url.startsWith('/images/')) {
      req.url = req.url.slice('/images'.length);
      images(req, res, notFound);
    } else {
      notFound();
    }
  });
});

server.on('error', (error) => {
  console.error(error);
  middleware.close(() => process.exit(1));
});
server.listen(port, '127.0.0.1', () => {
  const url = `http://127.0.0.1:${port}`;
  console.log(`Interactive Catalog: ${url}`);
  if (!values['no-open']) {
    middleware.waitUntilValid(() => {
      open(url).catch((error) => console.error(`Could not open browser: ${error.message}`));
    });
  }
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, () => {
    server.close();
    middleware.close(() => process.exit(0));
  });
}
