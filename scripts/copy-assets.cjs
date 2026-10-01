const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const dataDir = path.join(root, 'src/origin/assets/data');
const referenced = new Set();
for (const name of fs.readdirSync(dataDir)) {
  if (!name.endsWith('.js')) continue;
  const source = fs.readFileSync(path.join(dataDir, name), 'utf8');
  for (const match of source.matchAll(/['"]\/images\/([^'"\s]+)['"]/g)) referenced.add(match[1]);
}
fs.mkdirSync(path.join(root, 'docs/images'), { recursive: true });
for (const name of referenced) {
  if (name !== path.basename(name)) throw new Error(`Invalid image path: ${name}`);
  fs.copyFileSync(path.join(root, 'images', name), path.join(root, 'docs/images', name));
}
console.log(`Copied ${referenced.size} catalog images.`);
