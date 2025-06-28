import { test as base, chromium, type ChromiumBrowserContext } from '@playwright/test';
const path = require('path');
const userDirData = path.join(__dirname, '/tests/Data');

export const test = base.extend<{
    context: ChromiumBrowserContext;
    extensionId: string;
}>({
    context: async ({ }, use) => {
        const videoFilePath = path.resolve(__dirname, 'AR.y4m');
        const context: ChromiumBrowserContext = await chromium.launchPersistentContext(userDirData, {
            headless: process.env.CI ? true : false,
            args: [
                '--use-fake-device-for-media-stream',
                '--use-fake-ui-for-media-stream',
                '--no-sandbox',
                '--disable-features=UseOzonePlatform',
                `--use-file-for-fake-video-capture=${videoFilePath}`
            ],
            viewport: { width: 1700, height: 920 },
            ignoreHTTPSErrors: true,
            permissions: ["microphone", "camera", "clipboard-read", "clipboard-write"],
            
        });

        await use(context);
        await context.close();
    },
});
export const expect = test.expect;
