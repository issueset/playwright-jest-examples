describe("GitHub", ()=> {
  it("should show the microsoft/Playwright project in the search if you search for Playwright", async()=> {
    await page.goto("https://github.com");
    await page.type('input[name="q"]', "Playwright");
    await page.press('input[name="q"]', "Enter");
    await expect(page).toHaveText(".repo-list", "microsoft/playwright")
  })
  it("should contain 'Playwright' in the project title", async () => {
    await page.click(".repo-list-item:nth-child(1) a");
    await expect(page).toHaveText("#readme h1", "Playwright")
  })
})