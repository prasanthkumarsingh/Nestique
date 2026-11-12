import assert from 'node:assert/strict';
import http from 'node:http';
const origin = process.env.SEO_TEST_ORIGIN || 'http://localhost:3100';
const preferred = 'https://www.nestiquestudio.in';
const xml = await (await fetch(origin + '/sitemap.xml')).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
assert(urls.length > 20, 'Sitemap contains marketing pages');
const titles = new Set(), descriptions = new Set();
const links = new Set(), assets = new Set();
for (const url of urls) {
 const path = new URL(url).pathname;
 const response = await fetch(origin + path, { redirect: 'manual' });
 assert.equal(response.status, 200, path);
 const html = await response.text();
 const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
 const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
 assert(title && !titles.has(title), `Unique title: ${path}`); titles.add(title);
 assert(description && !descriptions.has(description), `Unique description: ${path}`); descriptions.add(description);
 assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `One h1: ${path}`);
 assert(!/<meta name="robots" content="[^"]*noindex/.test(html), `Indexable sitemap page: ${path}`);
 assert(!html.includes('"aggregateRating"'), `No unverified ratings: ${path}`);
 assert(html.includes(`rel="canonical" href="${url}"`) || html.includes(`rel="canonical" href="${preferred}/"`) && path === '/', `Canonical: ${path}`);
 for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(match[1]);
 for (const match of html.matchAll(/<a\b[^>]*href="([^"#]+)[^"]*"/g)) {
   const link = new URL(match[1].replaceAll('&amp;','&'), preferred + path);
   if (link.origin === preferred && !/^\/(admin|client|auth|api)(\/|$)/.test(link.pathname)) links.add(link.pathname);
 }
 for (const match of html.matchAll(/(?:src|href)="(\/[^"#]+)"/g)) if (/\.(?:js|css|png|jpe?g|webp|svg|woff2?)(?:\?|$)/.test(match[1])) assets.add(match[1].replaceAll('&amp;','&'));
}
for (const path of links) assert.equal((await fetch(origin+path)).status,200,`Internal link: ${path}`);
for (const path of assets) assert.equal((await fetch(origin+path)).status,200,`Asset: ${path}`);
for (const city of ['hyderabad','visakhapatnam']) {
 const response = await fetch(`${origin}/interior-designer-${city}`, { redirect: 'manual' });
 assert.equal(response.status, 308); assert.equal(response.headers.get('location'), `/interior-design-${city}`);
}
for (const path of ['/missing-seo-page','/services/missing-seo-service','/blog/missing-seo-post']) assert.equal((await fetch(origin+path)).status,404,path);
const robots = await (await fetch(origin+'/robots.txt')).text(); assert(robots.includes(preferred+'/sitemap.xml')); assert(!robots.includes('Disallow: /*.xml'));
await new Promise((resolve,reject) => { const request = http.get(origin+'/services?source=test', {headers:{host:'nestiquestudio.in'}}, response => { try { assert.equal(response.statusCode,308); assert.equal(response.headers.location,preferred+'/services?source=test'); response.resume(); resolve(); } catch(error) { reject(error); } }); request.on('error',reject); });
for (const path of ['/api/contact','/api/consultation']) { const response=await fetch(origin+path,{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'}); assert.equal(response.status,400,path); }
console.log(`PASS: ${urls.length} sitemap pages, ${links.size} internal link destinations, ${assets.size} assets; unique titles/descriptions, one h1, canonicals, indexability, JSON-LD, redirects, query preservation, 404s, robots and form required-field validation.`);
