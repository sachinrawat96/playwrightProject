const {test, expect} = require ('@playwright/test');

test ('handle checkbox' , async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    // single element

    await page.locator("//input[@id='sunday' and @type='checkbox']").check()
    //await page.check("//input[@id='sunday']")

    await expect(await page.locator("//input[@id='sunday' and @type='checkbox']")).toBeChecked()

    await expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeTruthy()   //check
    await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeFalsy()    // not  check


    //multiple checkbox

    const checkboxlocators = ["//input[@id='sunday' and @type='checkbox']",
                             "//input[@id='monday' and @type='checkbox']",
                             "//input[@id='tuesday' and @type='checkbox']"
    ]


    for (const locators of checkboxlocators) //select multiple checkboxes
        {
        await page.locator(locators).check()
    }
    
    await page.waitForTimeout(5000)

    for (const locators of checkboxlocators)   /// unselect multiple checkboxes which are already selected
    {
        if (await page.locator(locators).isChecked()){
            await page.locator(locators).uncheck();
        }
    }

    await page.waitForTimeout(5000)



})