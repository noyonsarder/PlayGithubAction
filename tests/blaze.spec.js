const {test, expect} = require('@playwright/test');

test.describe("@regression", ()=>{
    test("First Test Case", async({page})=>{
        await page.goto("https://demoblaze.com/index.html");
        const title= await page.title();
        await expect(title).toContain("STORE");
    })
    test("Second Test Case", async({page})=>{
        await page.goto("https://demoblaze.com/index.html");
        const url= await page.url();
        await expect(url).toBe("https://demoblaze.com/index.html");
    
    })
})

test.describe("smoke",()=>{
    test("Third Test Case", async({page})=>{
        await page.goto("https://demoblaze.com/index.html");
        await page.waitForSelector(`//a[@id='cat']`);
        await expect(page.locator(`//a[@id='cat']`)).toBeVisible();
        
    })
})
