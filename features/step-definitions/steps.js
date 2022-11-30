const { Given, When, Then } = require('@wdio/cucumber-framework');


Given('I am on the homepage', async () => {
	await browser.url(`https://www.newegg.com/`)
});
Given('I close the promo banner if it appears', async () => {
const $modal=await $('[class="modal-Website-img"]');
const $button=await $('[class="close"]')
try {
    await $modal.toExist();
}
catch {
    $button.click()}
});

When('As a user I entry the word Windows in the search bar', async () => {
    const searchBar=await $('[class="ico ico-search"]');
    const searchInput=await $('input[type="search"]')
    await searchBar.click()
    await searchInput.setValue('Windows');
});

When('I click the search button', async () => {
    await $('[class="ico ico-search"]').click()
});

Then('I see that at least one item appears', async () => {
    const list = await $(`[class="item-cell"]`)
    await expect(list).toBeExisting();
});

When("As a user I Open Today's Best Deals tab", async () => {
await $('[id="trendingBanner_720202"]').click()
});

When('I click on the Internet shop logo', async () => {
await $('[class="header2021-logo-img"]').click()   
});

Then('I see that the main page is opened', async () => {
    await expect(browser).toHaveUrl('https://www.newegg.com/')
})