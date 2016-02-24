var gSelectors = require('../../../tests/system/pageobjects/globalSelectors');
var authSelectors = require('../../../tests/system/pageobjects/authSelectors');



module.exports = {

    'setUp': function(browser) {
        browser
        .url(browser.launch_url + 'users/new')
        .waitForElementVisible(gSelectors.headerLogo);
    },

    'Verify sign up page elements present': function(browser) {
    	browser
        .verify.elementsPresent(
            gSelectors.header,
            gSelectors.headerLogo,
            gSelectors.headerFeatures,
            gSelectors.headerSolutions,
            gSelectors.headerAbout,
            gSelectors.headerSupport,
            gSelectors.headerSearch)
        .end();

    },

    'Verify error is thrown for in-use email': function(browser) {
        browser
        .setValue(authSelectors.signUpFirstName, 'Automation')
        .setValue(authSelectors.signUpLastName, 'Tester')
        .setValue(authSelectors.signUpEmail, 'chimpautomation@gmail.com')
        .setValue(authSelectors.signUpPassword, 'qwerty1234@!')
        .click(authSelectors.signUpSubmit)
        .pause(3000)
        .verify.elementPresent(authSelectors.signUpEmailError)
        .assert.containsText(authSelectors.signUpEmailError, '- has already been taken')
        .end();
    },

    'Verify error is thrown for invalid password': function(browser) {
        browser
        .setValue(authSelectors.signUpFirstName, 'Automation')
        .setValue(authSelectors.signUpLastName, 'Tester')
        .setValue(authSelectors.signUpEmail, 'chimpautomation+1@gmail.com')
        .setValue(authSelectors.signUpPassword, 'qwerty1234')
        .click(authSelectors.signUpSubmit)
        .pause(3000)
        .verify.elementPresent(authSelectors.signUpPasswordError)
        .assert.containsText(authSelectors.signUpPasswordError, '- Please provide a password that is at least 8 characters')
        .end();
    }
};
