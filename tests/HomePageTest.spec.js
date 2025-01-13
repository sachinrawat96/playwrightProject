const { expect,test } = require('@playwright/test');

test('HomePage',async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
    await page.close();
})

