import { test, expect, type Page } from "@playwright/test";

async function watchEvents(page: Page) {
  await page.addInitScript(() => {
    (window as unknown as { releaseEvents: unknown[] }).releaseEvents = [];
    window.addEventListener("nestique:enquiry", event => (window as unknown as { releaseEvents: unknown[] }).releaseEvents.push((event as CustomEvent).detail));
  });
}
async function fillContact(page: Page) {
  await page.getByLabel("Full Name", {exact:false}).fill("Synthetic Release Test");
  await page.getByLabel("Email Address", {exact:false}).fill("synthetic@example.invalid");
  await page.getByLabel("Your Message", {exact:false}).fill("Synthetic private requirements");
  await page.getByLabel("City", {exact:true}).selectOption("Hyderabad");
}
test("navigation, desktop/mobile layout, service content and enquiry links", async ({ page }, info) => {
  const errors: string[]=[]; page.on('pageerror',error=>errors.push(error.message));
  for (const path of ["/", "/about", "/services", ...["architecture", "office-planning", "residential-construction", "commercial-construction", "home-interiors", "commercial-interiors", "facade-elevation", "renovation", "landscape"].map(slug => `/services/${slug}`), "/architect-hyderabad", "/contact", "/consultation"]) {
    await page.goto(path); await expect(page.locator("h1")).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `No horizontal overflow: ${path}`).toBe(true);
    await expect(page.locator('a[href^="tel:+917816086291"]').first()).toBeAttached();
    await expect(page.getByRole("link",{name:"Chat with Nestique Studio on WhatsApp"})).toHaveAttribute("href",/^https:\/\/wa.me\/917816086291/);
    if (path === "/services/facade-elevation") await page.screenshot({path:`release-results/${info.project.name}-service.png`,fullPage:true});
  }
  if(info.project.name==='mobile') {
    await page.getByRole('button',{name:'Open menu',exact:true}).click();
    await expect(page.getByRole('button',{name:'Close menu',exact:true})).toHaveAttribute('aria-expanded','true');
    await page.getByRole('navigation',{name:'Mobile navigation',exact:true}).getByRole('link',{name:/Services/}).click();
    await expect(page).toHaveURL(/\/services$/); await expect(page.getByRole('button',{name:'Open menu',exact:true})).toHaveAttribute('aria-expanded','false');
  } else {
    await page.getByRole('navigation',{name:'Main navigation',exact:true}).getByRole('link',{name:'Services',exact:true}).click();
    await expect(page).toHaveURL(/\/services$/);
  }
  expect(errors).toEqual([]);
});
test("project filters, modal, arrow and Escape controls",async({page},info)=>{
  await page.goto('/portfolio');
  await page.getByRole('button',{name:'Hospitality',exact:true}).click();
  await expect(page.locator('article#villa85-iconica-grand')).toHaveCount(0);
  await expect(page.locator('article#amogham-telugu-kitchen')).toBeVisible();
  await page.getByRole('button',{name:'All projects',exact:true}).click();
  await page.getByRole('button',{name:/Enlarge Villa85/}).first().click();
  const dialog=page.getByRole('dialog'); await expect(dialog).toBeVisible();
  const before=await dialog.locator('img').getAttribute('src');
  await dialog.getByRole('button',{name:'Next photograph',exact:true}).click();
  expect(await dialog.locator('img').getAttribute('src')).not.toBe(before);
  await page.keyboard.press('ArrowLeft'); expect(await dialog.locator('img').getAttribute('src')).toBe(before);
  await page.screenshot({path:`release-results/${info.project.name}-gallery.png`});
  await page.keyboard.press('Escape'); await expect(dialog).not.toBeVisible();
});
test("contact: native validation, no double send, confirmed success and PII-free event",async({page})=>{
  await watchEvents(page); let requests=0;
  let release!: () => void; const gate = new Promise<void>(resolve => { release = resolve; });
  await page.route('**/api/contact',async route=>{
    requests++; expect(route.request().headers()['idempotency-key']).toMatch(/^[a-f0-9-]{36}$/);
    await gate;
    await route.fulfill({json:{success:true,accepted:true,duplicate:false}});
  });
  await page.goto('/contact');
  const button=page.getByRole('button',{name:'Send your message'});
  await button.click(); expect(requests).toBe(0);
  await fillContact(page); await button.click();
  await expect(page.locator('form button[type="submit"]')).toBeDisabled();
  await page.locator('form').evaluate(form => form.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true})));
  release();
  await expect(page.getByRole('status')).toContainText('received'); expect(requests).toBe(1);
  const events=await page.evaluate(()=>(window as unknown as {releaseEvents:unknown[]}).releaseEvents);
  expect(events).toEqual([{event:'generate_lead',form:'contact',service:'other',city:'Hyderabad'}]);
  expect(JSON.stringify(events)).not.toMatch(/Synthetic|example|private|9999/);
});
test("contact: failure, unconfirmed 200 and replay preserve values and suppress events",async({page})=>{
  await watchEvents(page); let mode=0;const keys:string[]=[];
  await page.route('**/api/contact',route=>{
    keys.push(route.request().headers()['idempotency-key']);
    return route.fulfill(mode++===0 ? {status:503,json:{error:'mock outage'}} : mode===2 ? {status:200,json:{success:false}} : {json:{success:true,accepted:true,duplicate:true}});
  });
  await page.goto('/contact'); await fillContact(page);
  const button=page.getByRole('button',{name:'Send your message'});
  await button.click(); await expect(page.locator('form').getByRole('alert')).toBeVisible();
  await expect(page.getByLabel('Your Message',{exact:false})).toHaveValue('Synthetic private requirements');
  await button.click(); await expect(page.locator('form').getByRole('alert')).toBeVisible();
  await button.click(); await expect(page.getByRole('status')).toBeVisible();
  expect(new Set(keys).size).toBe(1);
  expect(await page.evaluate(()=>(window as unknown as {releaseEvents:unknown[]}).releaseEvents)).toEqual([]);
});
test("consultation dropdowns, property details and confirmed success event",async({page})=>{
  await watchEvents(page);
  await page.route('**/api/consultation',async route=>{
    const data=route.request().postDataJSON(); expect(data.message).toContain('Property type: Villa'); expect(data.projectType).toBe('facade-elevation');
    await route.fulfill({json:{success:true,accepted:true,duplicate:false}});
  });
  await page.goto('/consultation');
  await page.getByLabel('Full Name',{exact:false}).fill('Synthetic Test');
  await page.getByLabel('Email Address',{exact:false}).fill('synthetic@example.invalid');
  await page.getByLabel('Phone Number',{exact:false}).fill('+919999999999');
  await page.getByLabel('City',{exact:true}).selectOption('Bangalore');
  await page.getByLabel('Project Type',{exact:false}).selectOption('facade-elevation');
  await page.getByLabel('Property type',{exact:true}).selectOption('Villa');
  await page.getByRole('button',{name:'Request a consultation',exact:true}).click();
  await expect(page.getByRole('status')).toContainText('received');
  expect(await page.evaluate(()=>(window as unknown as {releaseEvents:unknown[]}).releaseEvents)).toEqual([{event:'generate_lead',form:'consultation',service:'facade-elevation',city:'Bangalore'}]);
});
