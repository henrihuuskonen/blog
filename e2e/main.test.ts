import {test, expect} from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

test('verify title', async ({page}) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle(/Henri Huuskonen - Blog/);
});

test("regression test", {tag: "@ci"}, async ({page}) => {
    test.skip(!process.env.CI, 'Skipping this test if not in CI')

    await page.goto(BASE_URL)

    await expect(page).toHaveScreenshot('frontpage.png', {fullPage: true});
})