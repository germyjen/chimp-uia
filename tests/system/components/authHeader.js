var gSelectors = require('../../../tests/system/pageobjects/globalSelectors');
var authSelectors = require('../../../tests/system/pageobjects/authSelectors');
//These tests are for the inside the wall or logged in pages
//when they contain the authenticated header.
//Signed out header tests live at mktHeader.js

// Creates a group with a random name for the currently authed user.
function createGroup(browser) {
    var groupName = 'testGroup:' + Math.random().toPrecision(4);
    var description = 'this description is always the same';
    browser.url(browser.launch_url + 'groups/step/one')
        .setValue('#group_name', groupName)
        .setValue('#group_short', description)
        .click('#new_group button[type="submit"]');

}

module.exports = {

    'setUp': function(browser) {
        browser
        //login to Chimp
        .url(browser.launch_url + 'login')
        .waitForElementVisible(authSelectors.logInSubmit)
        .setValue(authSelectors.logInUsername, 'chimpautomation+tests@gmail.com')
        .setValue(authSelectors.logInPassword, 'Qwerty1234!')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        .waitForElementVisible(authSelectors.headerMegaBtn);
    },

    'Verify auth header elements present': function(browser) {
    	browser
    	.verify.elementsPresent(
    		gSelectors.header,
            gSelectors.headerLogo,
            gSelectors.headerAuthSearch,
            gSelectors.headerMegaBtn,
            gSelectors.headerProfileBtn)
        .end();
    },

    'Verify Mega Nav can be toggled open and closed': function(browser) {
        browser
        .click(gSelectors.headerMegaBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-modal__header',
            '.c-modal__title',
            '.c-modal__close',
            '.c-modal__content.c--active')
        .click('.c-modal__close')
        .waitForAnimation()
        .verify.elementsVisible(
            gSelectors.header,
            gSelectors.headerLogo,
            gSelectors.headerAuthSearch,
            gSelectors.headerMegaBtn,
            gSelectors.headerProfileBtn)
        .end();
    },

    'Verify features links in Mega Nav': function(browser) {
        browser
        .click(gSelectors.headerMegaBtn)
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
        .click(gSelectors.headerMegaBtn)
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
        .click(gSelectors.headerMegaBtn)
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
        .click(gSelectors.headerMegaBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-modal__header')
        .verify.attributeContains('section > div > div > div > div > div:nth-child(4) li:nth-child(1) > a', "href", "contact")
        .verify.attributeContains('section > div > div > div > div > div:nth-child(4) li:nth-child(2) > a', "href", "help")
        .end();
    },

        'Verify Account Menu can toggle open and closed': function(browser) {
        browser
        .pause(100)
        .click(gSelectors.headerProfileBtn)
        .waitForAnimation()
        .verify.elementsVisible(gSelectors.accountNavBody)
        .click(gSelectors.headerProfileBtn)
        .waitForAnimation()
        .end();
    },

    'Verify Account Menu contains expected elements': function(browser) {
        browser
        .click(gSelectors.headerProfileBtn)
        .waitForAnimation()
        .verify.elementsVisible(gSelectors.accountNavBody)
        .verify.elementsVisible(
            gSelectors.accountNavGreeting,
            gSelectors.accountNavBalance,
            gSelectors.accountNavAmount,
            gSelectors.accountNavAddMoney,
            gSelectors.accountNavSettingsContent)
        .end();
    },

    'Verify Account Menu navigation': function(browser) {
        browser
        .click(gSelectors.headerProfileBtn)
        .waitForAnimation()
        .verify.elementsVisible(gSelectors.accountNavBody)
        .verify.containsText(gSelectors.accountNavSettings, 'Settings')
        .verify.containsText(gSelectors.accountNavAccSettingsLink, 'Account Settings')
        .verify.attributeContains(gSelectors.accountNavAccSettingsLink, "href", "/user/edit")
        .verify.containsText(gSelectors.accountNavTaxReceipts, 'Tax Receipts')
        .verify.attributeContains(gSelectors.accountNavTaxReceipts, "href", "/user/tax-receipts")
        .verify.containsText(gSelectors.accountNavGivingTools, 'Giving Tools')
        .verify.attributeContains(gSelectors.accountNavGivingTools, "href", "/user/giving-tools")
        .verify.containsText(gSelectors.accountNavLogout, 'Logout')
        .verify.attributeContains(gSelectors.accountNavLogout, "href", "/logout")
        .end();
    },

    // //=== Give Menu Tests Start

    'Verify that Give Menu has all the components': function(browser) {
        browser
        .click(gSelectors.headerGiveMenuBtn)
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-header-give-dropdown__content')
        .verify.containsText(gSelectors.headerGiveMenuFirstHeading, 'How would you like to give?')

        .verify.containsText(gSelectors.headerGiveMenuAddHeading, 'Add Money to your Account')
        .verify.attributeContains(gSelectors.headerGiveMenuAddButton, "href", "/donations/new")
        .verify.containsText(gSelectors.headerGiveMenuAddButton, "Add")

        .verify.containsText(gSelectors.headerGiveMenuGiveHeading, 'Give to a Charity or Giving Group')
        .verify.containsText(gSelectors.headerGiveMenuGiveButton, 'Give')
        .verify.attributeContains(gSelectors.headerGiveMenuGiveButton, "href", "/give")

        .verify.containsText(gSelectors.headerGiveMenuSendHeading, 'Send Charitable Dollars to Other People')
        .verify.containsText(gSelectors.headerGiveMenuSendButton, 'Send')
        .verify.attributeContains(gSelectors.headerGiveMenuSendButton, "href", "/give/to/friend/new")
        .end();
    },

       'Verify that Whats This? links in Give Menu work': function(browser) {
        browser
        .click(gSelectors.headerGiveMenuBtn)
        .waitForAnimation()
        .verify.elementsVisible('.c-header-give-dropdown__content')

        // Whats This? in Add Section
        .click(gSelectors.headerGiveMenuAddDropDownHeading)
        .waitForAnimation()
        .verify.elementsVisible(gSelectors.headerGiveMenuAddDropDownText)
        .click(gSelectors.headerGiveMenuAddDropDownHeading)
        .waitForAnimation()
        .verify.elementNotPresent(gSelectors.headerGiveMenuAddDropDownText)
        .end();
    },

    // 'Verify Account Nav switch to account switcher and back': function(browser) {
    //      browser
    //      .click(gSelectors.headerProfileBtn)
    //      .waitForAnimation()
    //      .verify.elementsVisible(
    //          gSelectors.headerAccountNav,
    //          gSelectors.headerAccountNavSwitchAccountButton,
    //          gSelectors.headerAccountNavGreeting,
    //          gSelectors.headerAccountNavBalanceSummary,
    //          gSelectors.headerAccountNavSettingsLinks
    //      )
    //      .click(gSelectors.headerAccountNavSwitchAccountButton)
    //      .waitForAnimation()
    //      .verify.elementsVisible(gSelectors.headerAccountSwitcher)
    //     .click(gSelectors.headerAccountSwitcherCancelButton)
    //      .verify.elementsVisible(gSelectors.headerAccountNav)
    //      .end();
    //  },

    'Verify Clicking the groups view all in the account nav opens a modal': function(browser) {
         browser
         .click(gSelectors.headerProfileBtn)
         .waitForAnimation()
         .verify.elementsVisible(
             gSelectors.headerAccountNavGroupsList,
             gSelectors.headerAccountNavGroupsViewAllBtn
         )
         .click(gSelectors.headerAccountNavGroupsViewAllBtn)
         .waitForAnimation()
         .verify.elementsVisible(gSelectors.modal)
         
         // Asserts that there's more than the cut off limit for the see more button in the modal
         browser.execute(function(gSelectors){
              return document.querySelectorAll(gSelectors.viewAllGroupsModalListItems).length;
            }, [gSelectors], function(result){
                var listContainsElements = (result.value > 5);
                browser.assert.equal(listContainsElements, true);
            });
          

         browser.end();
     }
    
}
