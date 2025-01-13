import { test, expect } from '@playwright/test'

test('LocateMultipleElements', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html') 

// locate all links on homepage

    const links = await page.$$('a')

    for(const link of links){
        const linktext = await link.textContent();
        console.log(linktext);
    }




    //locate all the products displayed on the homepage

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");  // this is optional when log doesn't print
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a")

    for (const product of products){
        const ProductName = await product.textContent();

        console.log(ProductName);
    }

})