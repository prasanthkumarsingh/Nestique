import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/release",
  fullyParallel: true,
  workers: 2,
  retries: 0,
  timeout: 45000,
  expect: { timeout: 10000 },
  reporter: [["list"], ["html", { open: "never", outputFolder: "release-results/playwright" }]],
  outputDir: "release-results/test-artifacts",
  use: {
    baseURL: process.env.RELEASE_BASE_URL || "http://127.0.0.1:3100",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    ...(process.platform === "win32" ? { channel: "chrome" } : {}),
  },
  projects: [
    { name: "contracts", testMatch: /.*\.contract\.ts/ },
    { name: "desktop", testMatch: /.*\.browser\.ts/, use: { viewport: { width: 1440, height: 1000 } } },
    { name: "mobile", testMatch: /.*\.browser\.ts/, use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } },
  ],
});
