import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:5173',
    channel: 'chrome',
    headless: true,
  },
  webServer: [
    {
      command: 'cmd /c "set NODE_ENV=test&& node server/index.js"',
      port: 3000,
      reuseExistingServer: true,
    },
    {
      command: 'npm.cmd run client',
      port: 5173,
      reuseExistingServer: true,
    },
  ],
});
