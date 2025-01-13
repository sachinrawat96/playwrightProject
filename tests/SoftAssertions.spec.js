const {test,expect}=require('@playwright/test')

    test('SoftAssertions' , async ({page}) =>{

        await page.goto('https://www.demoblaze.com/index.html')


        

        //hard assertions=  //first run hard assertions so in title store123 is wrong so it will terminate the test execution 

        // await expect(page).toHaveTitle('STORE123');
        // await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
        // await expect( page.locator(".navbar-brand")).toBeVisible();

        //soft assertions  -- but in soft assertion donot terminate the test execution but mark the particular test as failed and rest of the code will executed

        // await expect.soft(page).toHaveTitle('STORE123');
        // await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html');
        // await expect.soft( page.locator(".navbar-brand")).toBeVisible();


    })