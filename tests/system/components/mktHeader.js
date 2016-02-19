//var browser.globals.selectors.= require('../../../tests/system/pageobjects/globalSelectors');
//These tests are for the outside the wall or marketing pages
//when they contain the signed-out header.
//Authenticated header tests live at authHeader.js

module.exports = {

    'setUp': function(browser) {
        browser
        .url(browser.launch_url)
        .waitForElementVisible(browser.globals.selectors.headerLogo)
    },

    'Verify header elements present': function(browser) {
    	browser
    	.verify.elementsPresent(
    		browser.globals.selectors.header,
            browser.globals.selectors.headerLogo,
            browser.globals.selectors.headerFeatures,
            browser.globals.selectors.headerSolutions,
            browser.globals.selectors.headerAbout,
            browser.globals.selectors.headerSupport,
            browser.globals.selectors.headerSearch,
            browser.globals.selectors.logInHeaderButton,
            browser.globals.selectors.signUpHeaderButton)
        .end();
    },

    'Verify header top level navigation': function(browser) {
        browser
        .assert.containsText(browser.globals.selectors.headerFeatures, 'Features')
        .assert.containsText(browser.globals.selectors.headerSolutions, 'Solutions')
        .assert.containsText(browser.globals.selectors.headerAbout, 'About')
        .assert.containsText(browser.globals.selectors.headerSupport, 'Support')
        .triggerTouch(browser.globals.selectors.headerFeatures)
        .waitForAnimation()
        .verify.elementsVisible(browser.globals.selectors.headerFeaturesOpen)
        .end();
    },


    'Verify features secondary navigation': function(browser) {
        browser
        .triggerTouch(browser.globals.selectors.headerFeatures)
        .waitForAnimation()
    	.assert.attributeContains(browser.globals.selectors.headerSecondary1, "href", "/fundraising")
        .assert.attributeContains(browser.globals.selectors.headerSecondary2, "href", "/ways-to-give")
        .assert.attributeContains(browser.globals.selectors.headerSecondary3, "href", "/community")
        .assert.attributeContains(browser.globals.selectors.headerSecondary4, "href", "/accounts")
        .assert.attributeContains(browser.globals.selectors.headerSecondary5, "href", "/fees")
        .assert.attributeContains(browser.globals.selectors.headerSecondary6, "href", "/trust")
        .end();
    },

    'Verify solutions secondary navigation': function(browser) {
        browser
        .triggerTouch(browser.globals.selectors.headerSolutions)
        .waitForAnimation()
        .assert.attributeContains(browser.globals.selectors.headerSolution1, "href", "/individuals")
        .assert.attributeContains(browser.globals.selectors.headerSolution2, "href", "/workplace")
        .assert.attributeContains(browser.globals.selectors.headerSolution3, "href", "/giving-groups")
        .assert.attributeContains(browser.globals.selectors.headerSolution4, "href", "/charities")
        .assert.attributeContains(browser.globals.selectors.headerSecondary1, "href", "/philanthropists")
        .assert.attributeContains(browser.globals.selectors.headerSecondary2, "href", "/education")
        .assert.attributeContains(browser.globals.selectors.headerSecondary3, "href", "/sports")
        .assert.attributeContains(browser.globals.selectors.headerSecondary4, "href", "/funding-organizations")
        .assert.attributeContains(browser.globals.selectors.headerSecondary5, "href", "/events")
        .assert.attributeContains(browser.globals.selectors.headerSecondary6, "href", "/families")
        .end();
    },

    'Verify about secondary navigation': function(browser) {
        browser
        .triggerTouch(browser.globals.selectors.headerAbout)
        .waitForAnimation()
        .assert.attributeContains(browser.globals.selectors.headerSecondary1, "href", "/about")
        .assert.attributeContains(browser.globals.selectors.headerSecondary2, "href", "/our-story")
        .assert.attributeContains(browser.globals.selectors.headerSecondary3, "href", "/chimp-foundation")
        .assert.attributeContains(browser.globals.selectors.headerSecondary4, "href", "/team")
        .assert.attributeContains(browser.globals.selectors.headerSecondary5, "href", "/careers")
        .assert.attributeContains(browser.globals.selectors.headerSecondary6, "href", "/press")
        .end();
    },

    'Verify support secondary navigation': function(browser) {
        browser
        .triggerTouch(browser.globals.selectors.headerSupport)
        .waitForAnimation()
        .assert.attributeContains(browser.globals.selectors.headerSecondary1, "href", "contact")
        .assert.attributeContains(browser.globals.selectors.headerSecondary2, "href", "help")
        .end();
    },

    'Verify Search opens on click': function(browser) {
        browser
        .triggerTouch(browser.globals.selectors.headerSearch)
        .waitForAnimation()
        .verify.elementsVisible(
            browser.globals.selectors.headerSearchInput,
            browser.globals.selectors.headerSearchClose,
            browser.globals.selectors.headerSearch)
        .end();
    },

    'Verify auto-complete activates when text is entered': function(browser) {
        browser
        .triggerTouch(browser.globals.selectors.headerSearch)
        .waitForAnimation()
        .setValue(browser.globals.selectors.headerSearchInput, 'Red Cross')
        .waitForAnimation()
        .pause(2000)
        .verify.elementsVisible(
            browser.globals.selectors.headerSearchClose,
            browser.globals.selectors.headerSearch,
            browser.globals.selectors.headerSearchResults)
        .verify.elementsPresent(
            browser.globals.selectors.headerSearchResultsName,
            browser.globals.selectors.headerSearchResultsArrow)
        .end();
    },

    'Verify Search can be dismissed by close button': function(browser) {
        browser
        .triggerTouch(browser.globals.selectors.headerSearch)
        .waitForAnimation()
        .verify.elementsVisible(
            browser.globals.selectors.headerSearchInput)
        .triggerTouch(browser.globals.selectors.headerSearchClose)
        .end();
    },

    'Verify login button navigates to Log In page': function(browser) {
        browser
        .assert.attributeContains(browser.globals.selectors.logInHeaderButton, "href", "login")
        .triggerTouch(browser.globals.selectors.logInHeaderButton)
        .waitForElementVisible('.login_form')
        .assert.urlEquals(browser.launch_url + 'login')
        .end();
    },

        'Verify sign up button navigates to sign up page': function(browser) {
        browser
        .assert.attributeContains(browser.globals.selectors.signUpHeaderButton, "href", "new")
        .triggerTouch(browser.globals.selectors.signUpHeaderButton)
        .waitForElementVisible('.new_user')
        .assert.urlEquals(browser.launch_url + 'users/new')
        .end();
    }
}
