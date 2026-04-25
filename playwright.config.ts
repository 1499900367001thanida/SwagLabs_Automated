import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  // 🔥 CI stability
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',

        viewport: { width: 1280, height: 720 },

        deviceScaleFactor: 1,
        hasTouch: false,
        isMobile: false,
      }
    }
  ],

  use: {
    headless: true,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

    ignoreHTTPSErrors: true,

    actionTimeout: 10000,
    navigationTimeout: 30000,

    locale: 'en-US',
    timezoneId: 'Asia/Bangkok',

    launchOptions: {
      args: [
        '--disable-dev-shm-usage',
        '--no-sandbox',
        '--disable-gpu'
      ]
    }
  },

  // 📸 FIX สำคัญ: ทำให้ snapshot ไม่แยก win32 / linux
  snapshotPathTemplate:
    '{testDir}/{testFileDir}/__screenshots__/{arg}{ext}',

  expect: {
    toHaveScreenshot: {
      threshold: 0.3,
      maxDiffPixelRatio: 0.05,
      animations: 'disabled'
    }
  },

  reporter: [
    ['html', { open: 'never' }]
  ]
});