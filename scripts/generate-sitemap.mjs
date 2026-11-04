import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const origin = 'https://callimdesign.com';
const routes = new Set(['/', '/about', '/branding', '/package', '/project', '/product', '/journals']);

for (const [folder, getRoute] of [
  ['journals', entry => entry.link || `/journal/${entry.id}`],
  ['portfolio', entry => entry.route || entry.link || `/portfolio/${entry.id}`],
]) {
  const visit = directory => {
    for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, item.name);
      if (item.isDirectory()) visit(file);
      else if (item.name.endsWith('.json')) {
        const entry = JSON.parse(fs.readFileSync(file, 'utf8'));
        const route = getRoute(entry);
        if (route?.startsWith('/')) routes.add(route);
      }
    }
  };
  visit(path.join(root, 'src', 'content', folder));
}

const escapeXml = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', ...[...routes].map(route => `  <url><loc>${escapeXml(origin + route)}</loc></url>`), '</urlset>', ''].join('\n');
fs.writeFileSync(path.join(root, 'dist', 'sitemap.xml'), xml);
console.log(`Generated sitemap with ${routes.size} URLs`);