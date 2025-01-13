const {test, expect} = require('@playwright/test')

test ('Handle DropDown', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // multiple ways to select option from dropdown

   // await page.locator('#country').selectOption({label: 'India'});  // using lable visible text
      //await page.locator('#country').selectOption('India')  // using visible text
      //await page.locator('#country').selectOption({value: 'uk'}); // using value attribute
      // await page.locator('#country').selectOption({index : 3}); // using index and we have to count number ourself
      // await page.selectOption('#country' , 'India'); //by using text value
    
      // Assertions : what type of assertion we can add

      // 1) we can check number of options in dropdown - approach 1

      // const options=    await page.locator('#country option') // return all the options(element)
      // await expect(options).toHaveCount(10);

      //2) we can check number of options in dropdown - approach 2 

       //const options = await page.$$('#country option')  //getting all the elements from the options in the form of array
      // console.log("number of options", options.length) // we can find length of an array by using length attribute
      //await expect(options.length).toBe(10);

      //3 check presence of value in the dropdown - approach1

      // const content = await page.locator('#country').textContent()     // note: textContent() return string
      // await expect(content.includes('India')).toBeTruthy()              
      //// await expect(content.includes('x')).toBeTruthy() // it will return error because x is not present

     //4) check check presence of value in the dropdown - approach2 --using looping statement

  //    const options = await page.$$('#country option')   //we have to capture all the country options in the form of array
  //    let status = false;

  //    for (const option of options){
  //   //   console.log(await option.textContent())
  //   let value = await option.textContent()
  //  if( value.includes('France')){
  //     status = true;
  //      break;
  //    }
  //   }
  //     await expect(status).toBeTruthy();



// 5) select option from dropdown using loop

const options = await page.$$('#country option')   //we have to capture all the country options in the form of array
for (const option of options){
let value = await option.textContent();
value=value.trim(); ////.trim() is a JavaScript method that removes whitespace from both ends of a string (i.e., leading and trailing spaces, tabs, newlines).It does not affect spaces between words or in the middle of the string.
if( value.includes('France'))
   {
   await page.selectOption('#country',value);
  break;
}
}

    await page.waitForTimeout(5000);

    
})