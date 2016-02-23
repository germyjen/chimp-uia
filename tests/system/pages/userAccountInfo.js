var gSelectors = require('../../../tests/system/pageobjects/globalSelectors');
var authSelectors = require('../../../tests/system/pageobjects/authSelectors');
var dashSelectors = require('../../../tests/system/pageobjects/dashSelectors');


module.exports = {
	//This step will be repeated for every test
	//I've moved it to set up so I don't have to duplicate the code
    'setUp': function(browser) {
        browser
        .url(browser.launch_url + 'login')
        .waitForElementVisible(authSelectors.logInSubmit)
        .setValue(authSelectors.logInUsername, 'chimpautomation+tests@gmail.com')
        .setValue(authSelectors.logInPassword, 'Qwerty1234!')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        .waitForElementVisible(gSelectors.accountNav);
    },

    'Verify Account Settings sidebar navigation is present': function(browser) {
        browser
        .url(browser.launch_url + 'user/edit')
        .waitForElementVisible(dashSelectors.accountContent)
        .verify.elementsPresent(
            dashSelectors.photoContentWrapper,
            dashSelectors.photoUploadArea)
        .end();
    },

    'Verify Account Basics module elements are present': function(browser) {
        browser
        .url(browser.launch_url + 'user/edit')
        .waitForElementVisible(dashSelectors.accountContent)
        .verify.elementsPresent(
            dashSelectors.photoContentWrapper,
            dashSelectors.photoUploadArea)
        .end();
    },

    'Verify Donor Photo module elements are present': function(browser) {
    	browser
        .url(browser.launch_url + 'user/edit')
    	.waitForElementVisible(dashSelectors.accountContent)
        .verify.elementsPresent(
        	dashSelectors.photoContentWrapper,
        	dashSelectors.photoUploadArea,
            dashSelectors.photoTitle,
            dashSelectors.photoUploadedImg,
            dashSelectors.photoTextBlurb,
            dashSelectors.photoUploadButton)
        .end();
    },

    'Verify Change Password module elements are present': function(browser) {
        browser
        .url(browser.launch_url + 'user/edit')
        .waitForElementVisible(dashSelectors.accountContent)
        .verify.elementsPresent(
            dashSelectors.photoContentWrapper,
            dashSelectors.photoUploadArea,
            dashSelectors.photoTitle,
            dashSelectors.photoUploadedImg,
            dashSelectors.photoTextBlurb,
            dashSelectors.photoUploadButton)
        .end();
    }
}