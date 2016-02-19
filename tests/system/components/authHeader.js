//var browser.globals.selectors = require('../../../tests/system/pageobjects/globalSelectors');
//These tests are for the inside the wall or logged in pages
//when they contain the authenticated header.
//Signed out header tests live at mktHeader.js

module.exports = {

    'setUp': function(browser) {
        if (browser.globals.environment === 'styleguide'){
            browser.url(browser.launch_url);
        }else {
            //login to Chimp
            browser
            .url(browser.launch_url + 'login')
            .waitForElementVisible(browser.globals.selectors.logInSubmit)
            .setValue(browser.globals.selectors.logInUsername, 'chimpautomation+tests@gmail.com')
            .setValue(browser.globals.selectors.logInPassword, 'Qwerty1234!')
            .pause(1000)
            .click(browser.globals.selectors.logInSubmit)
            .waitForElementVisible(browser.globals.selectors.headerMegaBtn);
        }
    },

    'Verify auth header elements present': function(browser) {
    	browser
    	.verify.elementsPresent(
    		browser.globals.selectors.header,
            browser.globals.selectors.headerLogo,
            browser.globals.selectors.headerAuthSearch,
            browser.globals.selectors.headerMegaBtn,
            browser.globals.selectors.headerProfileBtn)
        .end();
    },

    'Verify Mega Nav can be toggled open and closed': function(browser) {
        browser
        .click(browser.globals.selectors.headerMegaBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-modal__header',
            '.c-modal__title',
            '.c-modal__close',
            '.c-modal__content.c--active')
        .click('.c-modal__close')
        .waitForAnimation()

        .verify.elementsVisible(
            browser.globals.selectors.header,
            browser.globals.selectors.headerLogo,
            browser.globals.selectors.headerAuthSearch,
            browser.globals.selectors.headerMegaBtn,
            browser.globals.selectors.headerProfileBtn)
        .end();
    },

    'Verify features links in Mega Nav': function(browser) {
        browser
        .click(browser.globals.selectors.headerMegaBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-modal__header')
        .verify.attributeContains('section div:nth-child(1) li:nth-child(1) > a', "href", "/fundraising")
        .verify.attributeContains('section div:nth-child(1) li:nth-child(2) > a', "href", "/ways-to-give")
        .verify.attributeContains('section div:nth-child(1) li:nth-child(3) > a', "href", "/community")
        .verify.attributeContains('section div:nth-child(1) li:nth-child(4) > a', "href", "/accounts")
        .verify.attributeContains('section div:nth-child(1) li:nth-child(5) > a', "href", "/fees")
        .verify.attributeContains('section div:nth-child(1) li:nth-child(6) > a', "href", "/trust")
        .end();
    },

    'Verify solutions links in Mega Nav': function(browser) {
        browser
        .click(browser.globals.selectors.headerMegaBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-modal__header')
        .verify.attributeContains('section > div > div > div > div > div:nth-child(2) li:nth-child(1) > a', "href", "/individuals")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(2) li:nth-child(2) > a', "href", "/workplace")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(2) li:nth-child(3) > a', "href", "/giving-groups")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(2) li:nth-child(4) > a', "href", "/charities")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(2) li:nth-child(5) > a', "href", "/philanthropists")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(2) li:nth-child(6) > a', "href", "/education")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(2) li:nth-child(7) > a', "href", "/sports")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(2) li:nth-child(8) > a', "href", "/funding-organizations")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(2) li:nth-child(9) > a', "href", "/events")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(2) li:nth-child(10) > a', "href", "/families")
        .end();
    },

    'Verify about links in Mega Nav': function(browser) {
        browser
        .click(browser.globals.selectors.headerMegaBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-modal__header')
        .verify.attributeContains('section > div > div > div > div > div:nth-child(3) li:nth-child(1) > a', "href", "/about")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(3) li:nth-child(2) > a', "href", "/our-story")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(3) li:nth-child(3) > a', "href", "/chimp-foundation")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(3) li:nth-child(4) > a', "href", "/team")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(3) li:nth-child(5) > a', "href", "/careers")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(3) li:nth-child(6) > a', "href", "/press")
        .end();
    },

    'Verify support links in Mega Nav': function(browser) {
        browser
        .click(browser.globals.selectors.headerMegaBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-modal__header')
        .assert.attributeContains('section > div > div > div > div > div:nth-child(4) li:nth-child(1) > a', "href", "contact")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(4) li:nth-child(2) > a', "href", "help")
        .end();
    },

    // === Give Menu Tests Start

    'Verify that Give Menu has all the components': function(browser) {
        browser
        .click(browser.globals.selectors.headerGiveMenuBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-header-give-dropdown__content')
        .assert.containsText(browser.globals.selectors.headerGiveMenuFirstHeading, 'How would you like to give?')

        .assert.containsText(browser.globals.selectors.headerGiveMenuAddHeading, 'Add Money to your Account')
        .assert.attributeContains(browser.globals.selectors.headerGiveMenuAddButton, "href", "/donations/new")
        .assert.containsText(browser.globals.selectors.headerGiveMenuAddButton, "Add")

        .assert.containsText(browser.globals.selectors.headerGiveMenuGiveHeading, 'Give to a Charity or Giving Group')
        .assert.containsText(browser.globals.selectors.headerGiveMenuGiveButton, 'Give')
        .assert.attributeContains(browser.globals.selectors.headerGiveMenuGiveButton, "href", "/give")

        .assert.containsText(browser.globals.selectors.headerGiveMenuSendHeading, 'Send Charitable Dollars to Other People')
        .assert.containsText(browser.globals.selectors.headerGiveMenuSendButton, 'Send')
        .assert.attributeContains(browser.globals.selectors.headerGiveMenuSendButton, "href", "/give/to/friend/new")
        .end();
    },

       'Verify that Whats This? links in Give Menu work': function(browser) {
        browser
        .click(browser.globals.selectors.headerGiveMenuBtn)
        .waitForAnimation()
        .verify.elementsVisible('.c-header-give-dropdown__content')

        // Whats This? in Add Section
        .click(browser.globals.selectors.headerGiveMenuAddDropDownHeading)
        .waitForAnimation()
        .verify.elementsVisible(browser.globals.selectors.headerGiveMenuAddDropDownText)
        .click(browser.globals.selectors.headerGiveMenuAddDropDownHeading)
        .waitForAnimation()
        .assert.elementNotPresent(browser.globals.selectors.headerGiveMenuAddDropDownText)
       
         // Whats This? in Give Section
        .click(browser.globals.selectors.headerGiveMenuGiveDropDownHeading)
        .waitForAnimation()
        .verify.elementsVisible(browser.globals.selectors.headerGiveMenuGiveDropDownContent)
        .assert.attributeContains(browser.globals.selectors.headerGiveMenuGiveDropDownContentButton,'href','/groups/new')
        .click(browser.globals.selectors.headerGiveMenuGiveDropDownHeading)
        .waitForAnimation()
        .assert.elementNotPresent(browser.globals.selectors.headerGiveMenuGiveDropDownContent)


         // Whats This? In Send Section
        .click(browser.globals.selectors.headerGiveMenuSendDropDownHeading)
        .waitForAnimation()
        .verify.elementsVisible(browser.globals.selectors.headerGiveMenuSendDropDownContent)
        .click(browser.globals.selectors.headerGiveMenuSendDropDownHeading)
        .waitForAnimation()
        .assert.elementNotPresent(browser.globals.selectors.headerGiveMenuSendDropDownContent)
        .end();

    },

    //  === Give Meny Tests Finish
    'Verify Account Menu can toggle open and closed': function(browser) {
        browser
        .click(browser.globals.selectors.headerProfileBtn)
        .waitForAnimation()
        .verify.elementsVisible(browser.globals.selectors.accountNavBody)
        .click(browser.globals.selectors.headerProfileBtn)
        .verify.hidden(browser.globals.selectors.accountNavBody)
        .end();
    },

    'Verify Account Menu contains expected elements': function(browser) {
        browser
        .click(browser.globals.selectors.headerProfileBtn)
        .waitForAnimation()
        .verify.elementsVisible(browser.globals.selectors.accountNavBody)
        .verify.elementsVisible(
            browser.globals.selectors.accountNavGreeting,
            browser.globals.selectors.accountNavBalance,
            browser.globals.selectors.accountNavAmount,
            browser.globals.selectors.accountNavAddMoney,
            browser.globals.selectors.accountNavSettingsContent)
        .end();
    },

    'Verify Account Menu Settings Menu navigation': function(browser) {
        browser
        .click(browser.globals.selectors.headerProfileBtn)
        .waitForAnimation()
        .verify.elementsVisible(browser.globals.selectors.accountNavBody)
        .assert.containsText(browser.globals.selectors.accountNavSettings, 'Settings')
        .assert.containsText(browser.globals.selectors.accountNavAccSettingsLink, 'Account Settings')
        .assert.attributeContains(browser.globals.selectors.accountNavAccSettingsLink, "href", "/user/edit")
        .assert.containsText(browser.globals.selectors.accountNavTaxReceipts, 'Tax Receipts')
        .assert.attributeContains(browser.globals.selectors.accountNavTaxReceipts, "href", "/user/tax-receipts")
        .assert.containsText(browser.globals.selectors.accountNavGivingTools, 'Giving Tools')
        .assert.attributeContains(browser.globals.selectors.accountNavGivingTools, "href", "/user/giving-tools")
        .assert.containsText(browser.globals.selectors.accountNavLogout, 'Logout')
        .assert.attributeContains(browser.globals.selectors.accountNavLogout, "href", "/logout")
        .end();
    },

    'Verify Account Nav switch to account switcher and back': function(browser) {
        browser
        .click(browser.globals.selectors.headerProfileBtn)
        .waitForAnimation()
        .click(browser.globals.selectors.headerAccountNavSwitchAccountButton)
        .waitForAnimation()
        .verify.elementsVisible(browser.globals.selectors.headerAccountSwitcher)
        .click(browser.globals.selectors.headerAccountSwitcherCancelButton)
        .verify.elementsVisible(browser.globals.selectors.accountNavBody)
        .end();
    }
}
