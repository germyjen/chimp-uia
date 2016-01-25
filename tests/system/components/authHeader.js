var selectors = require('../../../tests/system/pageobjects/globalSelectors');
//These tests are for the inside the wall or logged in pages
//when they contain the authenticated header.
//Signed out header tests live at mktHeader.js

module.exports = {

    'setUp': function(browser) {
        browser
        .url('http://www.chimp.net/')
        .waitForElementVisible(selectors.headerLogo)
    },

    'Verify header elements present': function(browser) {
    	browser
    	.verify.elementsPresent(
    		selectors.header,
            selectors.headerLogo,
            selectors.headerFeatures,
            selectors.headerSolutions,
            selectors.headerAbout,
            selectors.headerSupport,
            selectors.headerSearch,
            selectors.logInHeaderButton,
            selectors.signUpHeaderButton)
        .end();
    }
}
