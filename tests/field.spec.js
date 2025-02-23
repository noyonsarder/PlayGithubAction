const {test, expect} = require('@playwright/test');

test.describe("@sanity", ()=>{

    test("Base url settings check", async({page})=>{
        await page.goto("/");
        const title= await page.title();
        await expect(title).toContain("Log in to Field Nation");
    })
})