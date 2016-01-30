var selectors = require('../../../tests/system/pageobjects/globalSelectors');
//These tests are for the inside the wall or logged in pages
//when they contain the authenticated header.
//Signed out header tests live at mktHeader.js

module.exports = {

       'setUp': function(browser) {
        browser
        .url('https://local.chimp.net:3000/login')
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
    }
}
