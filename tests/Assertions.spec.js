const {test,expect}= require('@playwright/test')

test('Assertions' , async({page}) =>{

    //open URL
    
    await page.goto('https://demo.nopcommerce.com/register')

    //1) expect(page).toHaveURL()   Page has URL

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

   //2) expect(page).toHaveTitle()   Page has title

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //3) expect(locator).toBeVisible()  Element is visible

    const logoElement = await page.locator("//div[@class='header-logo']")

    await expect(logoElement).toBeVisible()

    //4) expect(locator).toBeEnabled()  Control is enabled

    const searchStoreBox = await page.locator("//input[@id='small-searchterms']")

    await expect(searchStoreBox).toBeEnabled()


    // 5) expect(locator).toBeChecked()  Radio/Checkbox is checked

    //radiobutton

    const radioButton = await page.locator("//input[@id='gender-male']")

     await(radioButton).click()  //select radiobutton

     await expect(radioButton).toBeChecked()

     //checkbox

     const checkBox = await page.locator("//input[@id='Newsletter']") //id
     await expect(checkBox).toBeChecked()


     //6) expect(locator).toHaveAttribute() Element has attribute

     const registerButton = await page.locator("#register-button")

     await expect(registerButton).toHaveAttribute('type', 'submit')

     //7) expect(locator).toHaveText()  Element matches text

     const Text = await page.locator(".page-title h1")    // class
     await expect(Text).toHaveText('Register')  //full value


     //8) expect(locator).toContainText()  Element contains text        // partialmatch

     
     const HalfText = await page.locator(".page-title h1")    // class
     await expect(HalfText).toContainText('Regi')  //partial value

     //9) expect(locator).toHaveValue(value) Input has a value

     const fname = await page.locator("//input[@id='FirstName']")
     await fname.fill("daisy")
     await expect(fname).toHaveValue("daisy")

    //10) expect(locator).toHaveCount()  List of elements has given length

    const options = await page.locator("select[name='DateOfBirthMonth'] option")
    await expect(options).toHaveCount(13)





})