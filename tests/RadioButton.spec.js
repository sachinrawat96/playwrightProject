const {test, expect} = require ('@playwright/test');

test ('handle radiobutton' , async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("//input[@id='male']").check()   // for male check
    // await page.check("//input[@id='male']")

    await expect(await page.locator("//input[@id='male']")).toBeChecked()
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy()  // male


    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy()    // for female not checked



    await page.waitForTimeout(5000)
})