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
        .setValue(selectors.logInUsername, 'jennifer.germyn+tests@chimp.net')
        .setValue(selectors.logInPassword, 'Qwerty1234!')
        //let setValue finish adding text:
        .pause(1000)
        .click(selectors.logInSubmit)
        .waitForElementVisible(selectors.accountNav)
        .url('https://www.chimp.net/user/edit');
    },

    'Verify Donor Photo module elements present': function(browser) {
    	browser
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