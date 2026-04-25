import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium'
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

    viewport: { width: 1280, height: 720 },

    // 🔥 สำคัญมากสำหรับ CI (ลด pixel diff)
    locale: 'en-US',
    timezoneId: 'Asia/Bangkok',
  },

  // 📸 Visual Testing tolerance (กัน fail เพราะ pixel ต่างนิดเดียว)
  expect: {
    toHaveScreenshot: {
      threshold: 0.2,
      maxDiffPixelRatio: 0.02
    }
  },

  reporter: [
    ['html', { open: 'never' }]
  ]
});