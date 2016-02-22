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
            '.c-modal__header',
            '.c-modal__title',
            '.c-modal__close',
            '.c-modal__content.c--active')
        .click('.c-modal__close')
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
        .click(selectors.headerMegaBtn)
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
        .click(selectors.headerMegaBtn)
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
        .click(selectors.headerMegaBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-modal__header')
        .verify.attributeContains('section > div > div > div > div > div:nth-child(4) li:nth-child(1) > a', "href", "contact")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(4) li:nth-child(2) > a', "href", "help")
        .end();
    },

    === Give Menu Tests Start

    'Verify that Give Menu has all the components': function(browser) {
        browser
        .click(selectors.headerGiveMenuBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-header-give-dropdown__content')
        .verify.containsText(selectors.headerGiveMenuFirstHeading, 'How would you like to give?')

        .verify.containsText(selectors.headerGiveMenuAddHeading, 'Add Money to your Account')
        .verify.attributeContains(selectors.headerGiveMenuAddButton, "href", "/donations/new")
        .verify.containsText(selectors.headerGiveMenuAddButton, "Add")

        .verify.containsText(selectors.headerGiveMenuGiveHeading, 'Give to a Charity or Giving Group')
        .verify.containsText(selectors.headerGiveMenuGiveButton, 'Give')
        .verify.attributeContains(selectors.headerGiveMenuGiveButton, "href", "/give")

        .verify.containsText(selectors.headerGiveMenuSendHeading, 'Send Charitable Dollars to Other People')
        .verify.containsText(selectors.headerGiveMenuSendButton, 'Send')
        .verify.attributeContains(selectors.headerGiveMenuSendButton, "href", "/give/to/friend/new")
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
        .verify.elementNotPresent(selectors.headerGiveMenuAddDropDownText)
       
         // Whats This? in Give Section
        .click(selectors.headerGiveMenuGiveDropDownHeading)
        .waitForAnimation()
        .verify.elementsVisible(selectors.headerGiveMenuGiveDropDownContent)
        .verify.attributeContains(selectors.headerGiveMenuGiveDropDownContentButton,'href','/groups/new')
        .click(selectors.headerGiveMenuGiveDropDownHeading)
        .waitForAnimation()
        .verify.elementNotPresent(selectors.headerGiveMenuGiveDropDownContent)


         // Whats This? In Send Section
        .click(selectors.headerGiveMenuSendDropDownHeading)
        .waitForAnimation()
        .verify.elementsVisible(selectors.headerGiveMenuSendDropDownContent)
        .click(selectors.headerGiveMenuSendDropDownHeading)
        .waitForAnimation()
        .verify.elementNotPresent(selectors.headerGiveMenuSendDropDownContent)
        .end();

    },

     === Give Menu Tests Finish
    
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
        .verify.containsText(selectors.accountNavSettings, 'Settings')
        .verify.containsText(selectors.accountNavAccSettingsLink, 'Account Settings')
        .verify.attributeContains(selectors.accountNavAccSettingsLink, "href", "/user/edit")
        .verify.containsText(selectors.accountNavTaxReceipts, 'Tax Receipts')
        .verify.attributeContains(selectors.accountNavTaxReceipts, "href", "/user/tax-receipts")
        .verify.containsText(selectors.accountNavGivingTools, 'Giving Tools')
        .verify.attributeContains(selectors.accountNavGivingTools, "href", "/user/giving-tools")
        .verify.containsText(selectors.accountNavLogout, 'Logout')
        .verify.attributeContains(selectors.accountNavLogout, "href", "/logout")
        .end();
    },

    'Verify Account Nav switch to account switcher and back': function(browser) {
         browser
         .click(selectors.headerProfileBtn)
         .waitForAnimation()
         .verify.elementsVisible(
             selectors.headerAccountNav,
             selectors.headerAccountNavSwitchAccountButton,
             selectors.headerAccountNavGreeting,
             selectors.headerAccountNavBalanceSummary,
             selectors.headerAccountNavSettingsLinks
         )
         .click(selectors.headerAccountNavSwitchAccountButton)
         .waitForAnimation()
         .verify.elementsVisible(selectors.headerAccountSwitcher)
        .click(selectors.headerAccountSwitcherCancelButton)
         .verify.elementsVisible(selectors.headerAccountNav)
         .end();
     }
    
}
