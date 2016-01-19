var selectors = require('../../../tests/system/pageobjects/globalSelectors');


module.exports = {

    'setUp': function(browser) {
        browser
        .url('http://www.chimp.net/users/new')
        .waitForElementVisible(selectors.oldHeader)
    },

        'Verify sign up page elements present': function(browser) {
    	browser
        .verify.elementsPresent(
        	selectors.oldHeaderLogin,
            selectors.oldHeaderSignup,
            selectors.signUpFirstName,
            selectors.signUpLastName,
            selectors.signUpEmail,
            selectors.signUpPassword,
            selectors.signUpCountry,
            selectors.sighUpAgreement,
            selectors.signUpTerms,
            selectors.signUpPrivacy,
            selectors.signUpSubmit,
            selectors.subFooter)
        .end();
    }
};