var selectors = require('../../../tests/system/pageobjects/globalSelectors');
//These tests are for the inside the wall or logged in pages
//when they contain the authenticated header.
//Signed out header tests live at mktHeader.js

module.exports = {

       'setUp': function(browser) {
        browser
        .url('http://www.chimp.net/')
        .waitForElementVisible(selectors.logInHeaderButton)
        .click(selectors.logInHeaderButton)
        .waitForElementVisible(selectors.logInSubmit)
        .setValue(selectors.logInUsername, 'chimpautomation+tests@gmail.com')
        .setValue(selectors.logInPassword, 'Qwerty1234!')
        .pause(1000)
        .click(selectors.logInSubmit)
        .waitForElementVisible(selectors.accountNav)
    },

    'Verify header elements present': function(browser) {
    	browser
    	.verify.elementsPresent(
    		selectors.header,
            selectors.headerLogo,
            selectors.headerSearch,
            selectors.headerMegaBtn)
        .end();
    }
}
