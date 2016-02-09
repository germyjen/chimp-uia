var selectors = require('../../../tests/system/pageobjects/globalSelectors');


module.exports = {

    'setUp': function(browser) {
        browser
        .url(browser.launch_url + 'users/new')
        .waitForElementVisible(selectors.headerLogo)
    },

    'Verify sign up page elements present': function(browser) {
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

    'Verify error is thrown for in-use email': function(browser) {
        browser
        .setValue(selectors.signUpFirstName, 'Automation')
        .setValue(selectors.signUpLastName, 'Tester')
        .setValue(selectors.signUpEmail, 'chimpautomation@gmail.com')
        .setValue(selectors.signUpPassword, 'qwerty1234@!')
        .click(selectors.signUpSubmit)
        .pause(3000)
        .verify.elementPresent(selectors.signUpEmailError)
        .end();
    },

    'Verify error is thrown for invalid password': function(browser) {
        browser
        .setValue(selectors.signUpFirstName, 'Automation')
        .setValue(selectors.signUpLastName, 'Tester')
        .setValue(selectors.signUpEmail, 'chimpautomation+1@gmail.com')
        .setValue(selectors.signUpPassword, 'qwerty1234')
        .click(selectors.signUpSubmit)
        .pause(3000)
        .verify.elementPresent(selectors.signUpPasswordError)
        .end();
    }
};
