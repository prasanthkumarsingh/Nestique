import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';
import { escapeXmlText } from '../src/lib/xml.ts';

const origin = process.env.SEO_TEST_ORIGIN || 'http://127.0.0.1:8788';
const response = await fetch(origin + '/sitemap.xml');
assert.equal(response.status, 200);
assert.match(response.headers.get('content-type') || '', /^(?:application|text)\/xml\b/i);
const xml = await response.text();
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage();
  const parse = value => page.evaluate(text => {
    const doc = new DOMParser().parseFromString(text, 'application/xml');
    return {
      error: doc.querySelector('parsererror')?.textContent,
      root: doc.documentElement.localName,
      namespace: doc.documentElement.namespaceURI,
      locations: Array.from(doc.getElementsByTagNameNS('*', 'loc'), node => node.textContent),
    };
  }, value);
  // Prove this check rejects the production failure, rather than recovering HTML.
  assert((await parse('<urlset><loc>https://example.test/?w=800&q=80</loc></urlset>')).error);
  const raw = 'https://example.test/a%20b?x=a%2Fb&y="<caption>"&literal=&amp;\'雪';
  const fixture = await parse(`<urlset><loc>${escapeXmlText(raw)}</loc></urlset>`);
  assert(!fixture.error, fixture.error);
  assert.equal(fixture.locations[0], raw, 'Escaping round-trips without double escaping or changing URL encoding');
  const result = await parse(xml);
  assert(!result.error, result.error);
  assert.equal(result.root, 'urlset');
  assert.equal(result.namespace, 'http://www.sitemaps.org/schemas/sitemap/0.9');
  assert(result.locations.length > 20);
  for (const location of result.locations) {
    assert(!location.includes('&amp;'), `Entity text left in decoded URL: ${location}`);
    assert(['https:', 'http:'].includes(new URL(location).protocol));
  }
  console.log(`PASS: complete sitemap parsed as strict XML; ${result.locations.length} page/image URLs; XML content type; special-character/URL-encoding round-trip and malformed-entity rejection.`);
} finally {
  await browser.close();
}
