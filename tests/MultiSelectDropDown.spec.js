const {test, expect} = require("@playwright/test")
const exp = require("constants")

test('MultipleDropDown' , async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    ////// select multiple options from multi Select DropDown

    // await page.selectOption('#colors', ['Red' , 'Blue' , 'Yellow'])

    // Add Assertions
    // 1) check number of options in dropdown

    // const numberofoptions = await page.locator('#colors option')
    // await expect(numberofoptions).toHaveCount(7)

    //2) check number of option in dropdown by using JS array

    // const numberofoptions = await page.$$('#colors option')
    // // console.log('number of options', numberofoptions.length)
    // await expect(numberofoptions.length).toBe(7);

// 3 check presence of single value in dropdown

  const content = await page.locator('#colors').textContent()
  await expect(content.includes('Yellow')).toBeTruthy();
  await expect(content.includes('Black')).toBeFalsy();



    await page.waitForTimeout(5000);
})