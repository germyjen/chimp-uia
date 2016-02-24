var gSelectors = require('../../../tests/system/pageobjects/globalSelectors');
var authSelectors = require('../../../tests/system/pageobjects/authSelectors');


module.exports = {

    'setUp': function(browser) {
        browser
        .url(browser.launch_url + 'login')
        .waitForElementVisible(gSelectors.headerLogo)
    },

        'Verify login page elements present': function(browser) {
    	browser
        .verify.elementsPresent(
            gSelectors.header,
            gSelectors.headerLogo,
            gSelectors.headerFeatures,
            gSelectors.headerSolutions,
            gSelectors.headerAbout,
            gSelectors.headerSupport,
            gSelectors.headerSearch,
            gSelectors.logInHeaderButton)
        .end();
    },

    'Verify user can log in with valid credentials': function(browser) {
    	browser
        .waitForElementVisible(authSelectors.logInSubmit)
        .setValue(authSelectors.logInUsername, 'chimpautomation+tests@gmail.com')
        .setValue(authSelectors.logInPassword, 'Qwerty1234!')
        //let setValue finish adding text:
        .pause(1000)
        .click(authSelectors.logInSubmit)
        .waitForElementVisible(gSelectors.accountNav)
        .click(gSelectors.accountNav)
        .waitForAnimation()
        .url(browser.launch_url + 'logout')
        .end();
    },

    'Verify error is thrown with invalid credentials': function(browser) {
    	browser
        .waitForElementVisible(authSelectors.logInSubmit)
        .setValue(authSelectors.logInUsername, 'chimpautomation+tests@gmail.com')
        .setValue(authSelectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        .waitForElementVisible(authSelectors.logInError)
        .verify.elementsPresent(
        	authSelectors.logInError,
        	authSelectors.logInErrorClose,
        	authSelectors.logInErrorMsg)
        .end();
    },

       'Verify lockout is reset after successful login': function(browser) {
		browser
        .waitForElementVisible(authSelectors.logInSubmit)
        //first failed attempt
        .setValue(authSelectors.logInUsername, 'chimpautomation+tests@gmail.com')
        .setValue(authSelectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        .waitForElementVisible(authSelectors.logInError)
        //second failed attempt
        .setValue(authSelectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        .waitForElementVisible(authSelectors.logInError)
        //third failed attempt
        .setValue(authSelectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        .waitForElementVisible(authSelectors.logInError)
        //fourth attempt good password
        .setValue(authSelectors.logInPassword, 'Qwerty1234!')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        .waitForElementVisible(authSelectors.accountNav)
        //log out
        .url(browser.launch_url + 'logout')
        .url(browser.launch_url + 'login')
        .waitForElementVisible(authSelectors.logInSubmit)
        //fourth failed attempt
        .setValue(authSelectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        .waitForElementVisible(authSelectors.logInError)
        //fifth failed attempt
        .setValue(authSelectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        //sixth attempt good password
        .setValue(authSelectors.logInPassword, 'Qwerty1234!')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        .waitForElementVisible(gSelectors.accountNav)
        .end();
},

     'Verify user is locked out after 5 failed attempts': function(browser) {
        browser
        .waitForElementVisible(authSelectors.logInSubmit)
        //first failed attempt
        .setValue(authSelectors.logInUsername, 'chimpautomation+locked@gmail.com')
        .setValue(authSelectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        .waitForElementVisible(authSelectors.logInError)
        //second failed attempt
        .setValue(authSelectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        .waitForElementVisible(authSelectors.logInError)
        //third failed attempt
        .setValue(authSelectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        .waitForElementVisible(authSelectors.logInError)
        //fourth failed attempt
        .setValue(authSelectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        .waitForElementVisible(authSelectors.logInError)
        //fifth failed attempt
        .setValue(authSelectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        //sixth attempt good password
        .setValue(authSelectors.logInPassword, 'Qwerty1234!')
        .pause(1000)
        .click(authSelectors.logInSubmit)
        //check for error message
        .waitForElementVisible(authSelectors.logInError)
        .verify.elementsPresent(
        	authSelectors.logInError,
        	authSelectors.logInErrorClose,
        	authSelectors.logInErrorMsg)
        .end();
    }

};