const { Given, When, Then } = require('@wdio/cucumber-framework');


Given('I am on the homepage', async () => {
	await browser.url(`https://www.newegg.com/`)
});
Given('I close the promo banner if it appears', async () => {
const $modal=await $('#modal-Website > div.modal-dialog.modal-dialog-centered > div > div > a > img');
const $button=await $('#modal-Website > div.modal-dialog.modal-dialog-centered > div > button')
try {
    await $modal.toExist();
}
catch {
    $button.click()}
});

When('As a user I entry the word Windows in the search bar', async () => {
    const searchBar=await $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[4]/form/div/div[3]/button');
    const searchInput=await $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[4]/form/div/div[1]/input')
    await searchBar.click()
    await searchInput.setValue('Windows');
});

When('I click the search button', async () => {
    await $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[5]/form/div/div[2]/button').click()
});

Then('I see that at least one item appears', async () => {
    const list = await $(`//*[@id="app"]/div[3]/section/div/div/div[2]/div/div/div/div[2]/div/div/div[2]`)
    await expect(list).toBeExisting();
});

When("As a user I Open Today's Best Deals tab", async () => {
await $('#trendingBanner_720202 > span').click()
});

When('I click on the Internet shop logo', async () => {
await $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[2]/a/img').click()   
});

Then('I see that the main page is opened', async () => {
    await expect(browser).toHaveUrl('https://www.newegg.com/')
})