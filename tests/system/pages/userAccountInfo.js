var selectors = require('../../../tests/system/pageobjects/globalSelectors');


module.exports = {
	//This step will be repeated for every test
	//I've moved it to set up so I don't have to duplicate the code
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
        .waitForElementVisible(selectors.accountNav);
    },

    'Verify Account Settings sidebar navigation is present': function(browser) {
        browser
        .url('https://www.chimp.net/user/edit')
        .waitForElementVisible(selectors.accountContent)
        .verify.elementsPresent(
            selectors.photoContentWrapper,
            selectors.photoUploadArea)
        .end();
    },

    'Verify Account Basics module elements are present': function(browser) {
        browser
        .url('https://www.chimp.net/user/edit')
        .waitForElementVisible(selectors.accountContent)
        .verify.elementsPresent(
            selectors.photoContentWrapper,
            selectors.photoUploadArea)
        .end();
    },

    'Verify Donor Photo module elements are present': function(browser) {
    	browser
        .url('https://www.chimp.net/user/edit')
    	.waitForElementVisible(selectors.accountContent)
        .verify.elementsPresent(
        	selectors.photoContentWrapper,
        	selectors.photoUploadArea,
            selectors.photoTitle,
            selectors.photoUploadedImg,
            selectors.photoTextBlurb,
            selectors.photoUploadButton)
        .end();
    },

    'Verify Change Password module elements are present': function(browser) {
        browser
        .url('https://www.chimp.net/user/edit')
        .waitForElementVisible(selectors.accountContent)
        .verify.elementsPresent(
            selectors.photoContentWrapper,
            selectors.photoUploadArea,
            selectors.photoTitle,
            selectors.photoUploadedImg,
            selectors.photoTextBlurb,
            selectors.photoUploadButton)
        .end();
    }
}