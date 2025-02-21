const {test, expect} = require('@playwright/test');

test("First Test Case", async({page})=>{

    await page.goto("https://demoblaze.com/index.html");
    const title= await page.title();
    await expect(title).toContain("STORE");
})


test("Second test case will fail", async({page})=>{

    await page.goto("https://demoblaze.com/index.html");
    const title= await page.title();
    await expect(title).toContain("STORE1");

})