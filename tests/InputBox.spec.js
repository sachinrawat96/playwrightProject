const {test,expect} =require('@playwright/test')

test('handle inputbox' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')


    //InputBox --- name

    await expect(await page.locator("//input[@id='name']")).toBeVisible();
    await expect(await page.locator("//input[@id='name']")).toBeEmpty();
    await expect(await page.locator("//input[@id='name']")).toBeEditable();
    await expect(await page.locator("//input[@id='name']")).toBeEnabled();

    // await page.locator("//input[@id='name']").fill("Rawat");
    await page.fill("//input[@id='name']" , "Rawat");

    await page.waitForTimeout(5000); //pausing code

})