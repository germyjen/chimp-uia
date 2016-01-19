var selectors = require('../../../tests/system/pageobjects/globalSelectors');


module.exports = {

    'setUp': function(browser) {
        browser
        .url('http://www.chimp.net/login')
        .waitForElementVisible(selectors.oldHeader)
    },

        'Verify login page elements present': function(browser) {
    	browser
        .verify.elementsPresent(
        	selectors.oldHeaderLogin,
            selectors.oldHeaderSignup,
            selectors.logInUsername,
            selectors.logInPassword,
            selectors.logInForgot,
            selectors.logInSubmit,
            selectors.logInSidebar,
            selectors.logInSidebarBtn,
            selectors.subFooter)
        .end();
    },

    'Verify user can log in with valid credentials': function(browser) {
    	browser
        .waitForElementVisible(selectors.logInSubmit)
        .setValue(selectors.logInUsername, 'jennifer.germyn+tests@chimp.net')
        .setValue(selectors.logInPassword, 'Qwerty1234!')
        //let setValue finish adding text:
        .pause(1000)
        .click(selectors.logInSubmit)
        .waitForElementVisible(selectors.accountNav)
        .click(selectors.accountNav)
        .waitForAnimation()
        .click(selectors.accountNavLogout)
        .end();
    },

    'Verify error is thrown with invalid credentials': function(browser) {
    	browser
        .waitForElementVisible(selectors.logInSubmit)
        .setValue(selectors.logInUsername, 'jennifer.germyn+tests@chimp.net')
        .setValue(selectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(selectors.logInSubmit)
        .waitForElementVisible(selectors.logInError)
        .verify.elementsPresent(
        	selectors.logInError,
        	selectors.logInErrorClose,
        	selectors.logInErrorMsg)
        .end();
    },

       'Verify lockout is reset after successful login': function(browser) {
		browser
        .waitForElementVisible(selectors.logInSubmit)
        //first failed attempt
        .setValue(selectors.logInUsername, 'jennifer.germyn+tests@chimp.net')
        .setValue(selectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(selectors.logInSubmit)
        .waitForElementVisible(selectors.logInError)
        //second failed attempt
        .setValue(selectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(selectors.logInSubmit)
        .waitForElementVisible(selectors.logInError)
        //third failed attempt
        .setValue(selectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(selectors.logInSubmit)
        .waitForElementVisible(selectors.logInError)
        //fourth attempt good password
        .setValue(selectors.logInPassword, 'Qwerty1234!')
        .pause(1000)
        .click(selectors.logInSubmit)
        .waitForElementVisible(selectors.accountNav)
        //log out
        .click(selectors.accountNav)
        .waitForAnimation()
        .click(selectors.accountNavLogout)
        .url('http://www.chimp.net/login')
        .waitForElementVisible(selectors.logInSubmit)
        //fourth failed attempt
        .setValue(selectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(selectors.logInSubmit)
        .waitForElementVisible(selectors.logInError)
        //fifth failed attempt
        .setValue(selectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(selectors.logInSubmit)
        //sixth attempt good password
        .setValue(selectors.logInPassword, 'Qwerty1234!')
        .pause(1000)
        .click(selectors.logInSubmit)
        .waitForElementVisible(selectors.accountNav)
        .end();
},

     'Verify user is locked out after 5 failed attempts': function(browser) {
        browser
        .waitForElementVisible(selectors.logInSubmit)
        //first failed attempt
        .setValue(selectors.logInUsername, 'jennifer.germyn+locked@chimp.net')
        .setValue(selectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(selectors.logInSubmit)
        .waitForElementVisible(selectors.logInError)
        //second failed attempt
        .setValue(selectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(selectors.logInSubmit)
        .waitForElementVisible(selectors.logInError)
        //third failed attempt
        .setValue(selectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(selectors.logInSubmit)
        .waitForElementVisible(selectors.logInError)
        //fourth failed attempt
        .setValue(selectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(selectors.logInSubmit)
        .waitForElementVisible(selectors.logInError)
        //fifth failed attempt
        .setValue(selectors.logInPassword, 'notrealpassword')
        .pause(1000)
        .click(selectors.logInSubmit)
        //sixth attempt good password
        .setValue(selectors.logInPassword, 'Qwerty1234!')
        .pause(1000)
        .click(selectors.logInSubmit)
        //check for error message
        .waitForElementVisible(selectors.logInError)
        .verify.elementsPresent(
        	selectors.logInError,
        	selectors.logInErrorClose,
        	selectors.logInErrorMsg)
        .end();
    }

};