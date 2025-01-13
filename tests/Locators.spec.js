const {test, expect} = require ('@playwright/test');


test('Locators' , async ({page}) =>{

    await page.goto("https://www.demoblaze.com/index.html");

    //click on login button - property

    // await page.locator('id=login2').click()

    await page.click('id=login2')


    //provide username - CSS

    // await page.locator('#loginusername').fill("sachraw")
    await page.fill('#loginusername', "sachraw")

    //provide password - css

    await page.locator("input[id='loginpassword']").fill("test@123")
    await page.fill("input[id='loginpassword']","test@123")


    //click on  login button - xpath

    await page.click("//button[normalize-space()='Log in']")


    //verify logout link presence -xpath

    const logoutlink = await page.locator("//a[@id='logout2']")
    await expect(logoutlink).toBeVisible();

    await page.close()





})