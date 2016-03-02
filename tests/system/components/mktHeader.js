var selectors = require('../../../tests/system/pageobjects/globalSelectors');
//These tests are for the outside the wall or marketing pages
//when they contain the signed-out header.
//Authenticated header tests live at authHeader.js

module.exports = {

    'setUp': function(browser) {
        browser
        .url(browser.launch_url)
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
    },

    'Verify header top level navigation': function(browser) {
        browser
        .assert.containsText(selectors.headerFeatures, 'Features')
        .assert.containsText(selectors.headerSolutions, 'Solutions')
        .assert.containsText(selectors.headerAbout, 'About')
        .assert.containsText(selectors.headerSupport, 'Support')
        .triggerTouch(selectors.headerFeatures)
        .waitForAnimation()
        .verify.elementsVisible(selectors.headerFeaturesOpen)
        .end();
    },


    'Verify features secondary navigation': function(browser) {
        browser
        .triggerTouch(selectors.headerFeatures)
        .waitForAnimation()
    	.assert.attributeContains(selectors.headerSecondary1, "href", "/fundraising")
        .assert.attributeContains(selectors.headerSecondary2, "href", "/ways-to-give")
        .assert.attributeContains(selectors.headerSecondary3, "href", "/community")
        .assert.attributeContains(selectors.headerSecondary4, "href", "/accounts")
        .assert.attributeContains(selectors.headerSecondary5, "href", "/fees")
        .assert.attributeContains(selectors.headerSecondary6, "href", "/trust")
        .end();
    },

    'Verify solutions secondary navigation': function(browser) {
        browser
        .triggerTouch(selectors.headerSolutions)
        .waitForAnimation()
        .assert.attributeContains(selectors.headerSolution1, "href", "/individuals")
        .assert.attributeContains(selectors.headerSolution2, "href", "/workplace")
        .assert.attributeContains(selectors.headerSolution3, "href", "/giving-groups")
        .assert.attributeContains(selectors.headerSolution4, "href", "/charities")
        .assert.attributeContains(selectors.headerSecondary1, "href", "/philanthropists")
        .assert.attributeContains(selectors.headerSecondary2, "href", "/education")
        .assert.attributeContains(selectors.headerSecondary3, "href", "/sports")
        .assert.attributeContains(selectors.headerSecondary4, "href", "/funding-organizations")
        .assert.attributeContains(selectors.headerSecondary5, "href", "/events")
        .assert.attributeContains(selectors.headerSecondary6, "href", "/families")
        .end();
    },

    'Verify about secondary navigation': function(browser) {
        browser
        .triggerTouch(selectors.headerAbout)
        .waitForAnimation()
        .assert.attributeContains(selectors.headerSecondary1, "href", "/about")
        .assert.attributeContains(selectors.headerSecondary2, "href", "/our-story")
        .assert.attributeContains(selectors.headerSecondary3, "href", "/chimp-foundation")
        .assert.attributeContains(selectors.headerSecondary4, "href", "/team")
        .assert.attributeContains(selectors.headerSecondary5, "href", "/careers")
        .assert.attributeContains(selectors.headerSecondary6, "href", "/press")
        .end();
    },

    'Verify support secondary navigation': function(browser) {
        browser
        .triggerTouch(selectors.headerSupport)
        .waitForAnimation()
        .assert.attributeContains(selectors.headerSecondary1, "href", "contact")
        .assert.attributeContains(selectors.headerSecondary2, "href", "help")
        .end();
    },

    'Verify Search opens on click': function(browser) {
        browser
        .triggerTouch(selectors.headerSearch)
        .waitForAnimation()
        .verify.elementsVisible(
            selectors.headerSearchInput,
            selectors.headerSearchClose,
            selectors.headerSearch)
        .end();
    },

    'Verify auto-complete activates when text is entered': function(browser) {
        browser
        .triggerTouch(selectors.headerSearch)
        .waitForAnimation()
        .setValue(selectors.headerSearchInput, 'Red Cross')
        .waitForAnimation()
        .pause(2000)
        .verify.elementsVisible(
            selectors.headerSearchClose,
            selectors.headerSearch,
            selectors.headerSearchResults)
        .verify.elementsPresent(
            selectors.headerSearchResultsName,
            selectors.headerSearchResultsArrow)
        .end();
    },

    'Verify Search can be dismissed by close button': function(browser) {
        browser
        .triggerTouch(selectors.headerSearch)
        .waitForAnimation()
        .verify.elementsVisible(
            selectors.headerSearchInput)
        .triggerTouch(selectors.headerSearchClose)
        .end();
    },

    'Verify login button navigates to Log In page': function(browser) {
        browser
        .assert.attributeContains(selectors.logInHeaderButton, "href", "login")
        .triggerTouch(selectors.logInHeaderButton)
        .waitForElementVisible('.login_form')
        .assert.urlEquals(browser.launch_url + 'login')
        .end();
    },

    'Verify sign up button navigates to sign up page': function(browser) {
        browser
        .assert.attributeContains(selectors.signUpHeaderButton, "href", "new")
        .triggerTouch(selectors.signUpHeaderButton)
        .waitForElementVisible('.new_user')
        .assert.urlEquals(browser.launch_url + 'users/new')
        .end();
    },

    'Verify switching to french updates the header with french translations': function(browser) {
        browser
        .assert.attributeContains(selectors.logInHeaderButton, "href", "login")
        .triggerTouch(selectors.logInHeaderButton)
        .waitForElementVisible(selectors.langToggle)
        .triggerTouch(selectors.langToggle)
        .waitForElementVisible(selectors.logInHeaderButton)
        .assert.containsText(selectors.logInHeaderButton, 'Connexion')
        .end();
    }
}
