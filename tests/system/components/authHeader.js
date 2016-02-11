var selectors = require('../../../tests/system/pageobjects/globalSelectors');
//These tests are for the inside the wall or logged in pages
//when they contain the authenticated header.
//Signed out header tests live at mktHeader.js

module.exports = {

       'setUp': function(browser) {
        browser
        //login to Chimp
        .url(browser.launch_url + 'login')
        .waitForElementVisible(selectors.logInSubmit)
        .setValue(selectors.logInUsername, 'chimpautomation+tests@gmail.com')
        .setValue(selectors.logInPassword, 'Qwerty1234!')
        .pause(1000)
        .click(selectors.logInSubmit)
        .waitForElementVisible(selectors.headerMegaBtn);
    },

    'Verify auth header elements present': function(browser) {
    	browser
    	.verify.elementsPresent(
    		selectors.header,
            selectors.headerLogo,
            selectors.headerAuthSearch,
            selectors.headerMegaBtn,
            selectors.headerProfileBtn)
        .end();
    },

    'Verify Mega Nav can be toggled open and closed': function(browser) {
        browser
        .click(selectors.headerMegaBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-header-modal__header',
            '.c-header-modal__title',
            '.c-header-modal__close',
            '.c-header-modal__content.c--active')
        .click('.c-header-modal__close')
        .waitForAnimation()
        .verify.elementsVisible(
            selectors.header,
            selectors.headerLogo,
            selectors.headerAuthSearch,
            selectors.headerMegaBtn,
            selectors.headerProfileBtn)
        .end();
    },

    'Verify features links in Mega Nav': function(browser) {
        browser
        .click(selectors.headerMegaBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-header-modal__header')
        .assert.attributeContains('section > div > div > div > div > div:nth-child(1) > ul > li:nth-child(1) > a', "href", "/fundraising")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(1) > ul > li:nth-child(2) > a', "href", "/ways-to-give")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(1) > ul > li:nth-child(3) > a', "href", "/community")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(1) > ul > li:nth-child(4) > a', "href", "/accounts")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(1) > ul > li:nth-child(5) > a', "href", "/fees")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(1) > ul > li:nth-child(6) > a', "href", "/trust")
        .end();
    },

    'Verify solutions links in Mega Nav': function(browser) {
        browser
        .click(selectors.headerMegaBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-header-modal__header')
        .assert.attributeContains('section > div > div > div > div > div:nth-child(2) > ul > li:nth-child(1) > a', "href", "/individuals")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(2) > ul > li:nth-child(2) > a', "href", "/workplace")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(2) > ul > li:nth-child(3) > a', "href", "/giving-groups")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(2) > ul > li:nth-child(4) > a', "href", "/charities")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(2) > ul > li:nth-child(5) > a', "href", "/philanthropists")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(2) > ul > li:nth-child(6) > a', "href", "/education")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(2) > ul > li:nth-child(7) > a', "href", "/sports")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(2) > ul > li:nth-child(8) > a', "href", "/funding-organizations")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(2) > ul > li:nth-child(9) > a', "href", "/events")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(2) > ul > li:nth-child(10) > a', "href", "/families")
        .end();
    },

    'Verify about links in Mega Nav': function(browser) {
        browser
        .click(selectors.headerMegaBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-header-modal__header')
        .assert.attributeContains('section > div > div > div > div > div:nth-child(3) > ul > li:nth-child(1) > a', "href", "/about")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(3) > ul > li:nth-child(2) > a', "href", "/our-story")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(3) > ul > li:nth-child(3) > a', "href", "/chimp-foundation")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(3) > ul > li:nth-child(4) > a', "href", "/team")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(3) > ul > li:nth-child(5) > a', "href", "/careers")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(3) > ul > li:nth-child(6) > a', "href", "/press")
        .end();
    },

    'Verify support links in Mega Nav': function(browser) {
        browser
        .click(selectors.headerMegaBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-header-modal__header')
        .assert.attributeContains('section > div > div > div > div > div:nth-child(4) > ul > li:nth-child(1) > a', "href", "contact")
        .assert.attributeContains('section > div > div > div > div > div:nth-child(4) > ul > li:nth-child(2) > a', "href", "help")
        .end();
    },

    // === Give Menu Tests Start

    'Verify that Give Menu has all the components': function(browser) {
        browser
        .click(selectors.headerGiveMenuBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-header-give-dropdown__content')
        .assert.containsText(selectors.headerGiveMenuFirstHeading, 'How would you like to give?')

        .assert.containsText(selectors.headerGiveMenuAddHeading, 'Add Money to your Account')
        .assert.attributeContains(selectors.headerGiveMenuAddButton, "href", "/donations/new")
        .assert.containsText(selectors.headerGiveMenuAddButton, "Add")

        .assert.containsText(selectors.headerGiveMenuGiveHeading, 'Give to a Charity or Giving Group')
        .assert.containsText(selectors.headerGiveMenuGiveButton, 'Give')
        .assert.attributeContains(selectors.headerGiveMenuGiveButton, "href", "/give")

        .assert.containsText(selectors.headerGiveMenuSendHeading, 'Send Charitable Dollars to Other People')
        .assert.containsText(selectors.headerGiveMenuSendButton, 'Send')
        .assert.attributeContains(selectors.headerGiveMenuSendButton, "href", "/give/to/friend/new")
        .end();
    },

       'Verify that Whats This? links in Give Menu work': function(browser) {
        browser
        .click(selectors.headerGiveMenuBtn)
        .waitForAnimation()
        .verify.elementsVisible('.c-header-give-dropdown__content')

        // Whats This? in Add Section
        .click(selectors.headerGiveMenuAddDropDownHeading)
        .waitForAnimation()
        .verify.elementsVisible(selectors.headerGiveMenuAddDropDownText)
        .click(selectors.headerGiveMenuAddDropDownHeading)
        .waitForAnimation()
        .assert.elementNotPresent(selectors.headerGiveMenuAddDropDownText)
       
         // Whats This? in Give Section
        .click(selectors.headerGiveMenuGiveDropDownHeading)
        .waitForAnimation()
        .verify.elementsVisible(selectors.headerGiveMenuGiveDropDownContent)
        .assert.attributeContains(selectors.headerGiveMenuGiveDropDownContentButton,'href','/groups/new')
        .click(selectors.headerGiveMenuGiveDropDownHeading)
        .waitForAnimation()
        .assert.elementNotPresent(selectors.headerGiveMenuGiveDropDownContent)


         // Whats This? In Send Section
        .click(selectors.headerGiveMenuSendDropDownHeading)
        .waitForAnimation()
        .verify.elementsVisible(selectors.headerGiveMenuSendDropDownContent)
        .click(selectors.headerGiveMenuSendDropDownHeading)
        .waitForAnimation()
        .assert.elementNotPresent(selectors.headerGiveMenuSendDropDownContent)
        .end();

    },

    //  === Give Meny Tests Finish
    'Verify Account Menu can toggle open and closed': function(browser) {
        browser
        .click(selectors.headerProfileBtn)
        .waitForAnimation()
        .verify.elementsVisible(selectors.accountNavBody)
        .click(selectors.headerProfileBtn)
        .end();
    },

    'Verify Account Menu contains expected elements': function(browser) {
        browser
        .click(selectors.headerProfileBtn)
        .waitForAnimation()
        .verify.elementsVisible(selectors.accountNavBody)
        .verify.elementsVisible(
            selectors.accountNavGreeting,
            selectors.accountNavBalance,
            selectors.accountNavAmount,
            selectors.accountNavAddMoney,
            selectors.accountNavSettingsContent)
        .end();
    },

    'Verify Account Menu Settings Menu navigation': function(browser) {
        browser
        .click(selectors.headerProfileBtn)
        .waitForAnimation()
        .verify.elementsVisible(selectors.accountNavBody)
        .assert.containsText(selectors.accountNavSettings, 'Settings')
        .assert.containsText(selectors.accountNavAccSettingsLink, 'Account Settings')
        .assert.attributeContains(selectors.accountNavAccSettingsLink, "href", "/user/edit")
        .assert.containsText(selectors.accountNavTaxReceipts, 'Tax Receipts')
        .assert.attributeContains(selectors.accountNavTaxReceipts, "href", "/user/tax-receipts")
        .assert.containsText(selectors.accountNavGivingTools, 'Giving Tools')
        .assert.attributeContains(selectors.accountNavGivingTools, "href", "/user/giving-tools")
        .assert.containsText(selectors.accountNavLogout, 'Logout')
        .assert.attributeContains(selectors.accountNavLogout, "href", "/logout")
        .end();
    }
    
}
