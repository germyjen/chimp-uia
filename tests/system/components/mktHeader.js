var gSelectors = require('../../../tests/system/pageobjects/globalSelectors');
//These tests are for the outside the wall or marketing pages
//when they contain the signed-out header.
//Authenticated header tests live at authHeader.js

module.exports = {

    'setUp': function(browser) {
        browser
        .url(browser.launch_url)
        .waitForElementVisible(gSelectors.headerLogo)
    },

    'Verify header elements present': function(browser) {
    	browser
    	.verify.elementsPresent(
    		gSelectors.header,
            gSelectors.headerLogo,
            gSelectors.headerFeatures,
            gSelectors.headerSolutions,
            gSelectors.headerAbout,
            gSelectors.headerSupport,
            gSelectors.headerSearch,
            gSelectors.logInHeaderButton,
            gSelectors.signUpHeaderButton)
        .end();
    },

    'Verify header top level navigation': function(browser) {
        browser
        .assert.containsText(gSelectors.headerFeatures, 'Features')
        .assert.containsText(gSelectors.headerSolutions, 'Solutions')
        .assert.containsText(gSelectors.headerAbout, 'About')
        .assert.containsText(gSelectors.headerSupport, 'Support')
        .triggerTouch(gSelectors.headerFeatures)
        .waitForAnimation()
        .verify.elementsVisible(gSelectors.headerFeaturesOpen)
        .end();
    },


    'Verify features secondary navigation': function(browser) {
        browser
        .triggerTouch(gSelectors.headerFeatures)
        .waitForAnimation()
    	.assert.attributeContains(gSelectors.headerSecondary1, "href", "/fundraising")
        .assert.attributeContains(gSelectors.headerSecondary2, "href", "/ways-to-give")
        .assert.attributeContains(gSelectors.headerSecondary3, "href", "/community")
        .assert.attributeContains(gSelectors.headerSecondary4, "href", "/accounts")
        .assert.attributeContains(gSelectors.headerSecondary5, "href", "/fees")
        .assert.attributeContains(gSelectors.headerSecondary6, "href", "/trust")
        .end();
    },

    'Verify solutions secondary navigation': function(browser) {
        browser
        .triggerTouch(gSelectors.headerSolutions)
        .waitForAnimation()
        .assert.attributeContains(gSelectors.headerSolution1, "href", "/individuals")
        .assert.attributeContains(gSelectors.headerSolution2, "href", "/workplace")
        .assert.attributeContains(gSelectors.headerSolution3, "href", "/giving-groups")
        .assert.attributeContains(gSelectors.headerSolution4, "href", "/charities")
        .assert.attributeContains(gSelectors.headerSecondary1, "href", "/philanthropists")
        .assert.attributeContains(gSelectors.headerSecondary2, "href", "/education")
        .assert.attributeContains(gSelectors.headerSecondary3, "href", "/sports")
        .assert.attributeContains(gSelectors.headerSecondary4, "href", "/funding-organizations")
        .assert.attributeContains(gSelectors.headerSecondary5, "href", "/events")
        .assert.attributeContains(gSelectors.headerSecondary6, "href", "/families")
        .end();
    },

    'Verify about secondary navigation': function(browser) {
        browser
        .triggerTouch(gSelectors.headerAbout)
        .waitForAnimation()
        .assert.attributeContains(gSelectors.headerSecondary1, "href", "/about")
        .assert.attributeContains(gSelectors.headerSecondary2, "href", "/our-story")
        .assert.attributeContains(gSelectors.headerSecondary3, "href", "/chimp-foundation")
        .assert.attributeContains(gSelectors.headerSecondary4, "href", "/team")
        .assert.attributeContains(gSelectors.headerSecondary5, "href", "/careers")
        .assert.attributeContains(gSelectors.headerSecondary6, "href", "/press")
        .end();
    },

    'Verify support secondary navigation': function(browser) {
        browser
        .triggerTouch(gSelectors.headerSupport)
        .waitForAnimation()
        .assert.attributeContains(gSelectors.headerSecondary1, "href", "contact")
        .assert.attributeContains(gSelectors.headerSecondary2, "href", "help")
        .end();
    },

    'Verify Search opens on click': function(browser) {
        browser
        .triggerTouch(gSelectors.headerSearch)
        .waitForAnimation()
        .verify.elementsVisible(
            gSelectors.headerSearchInput,
            gSelectors.headerSearchClose,
            gSelectors.headerSearch)
        .end();
    },

    'Verify auto-complete activates when text is entered': function(browser) {
        browser
        .triggerTouch(gSelectors.headerSearch)
        .waitForAnimation()
        .setValue(gSelectors.headerSearchInput, 'Red Cross')
        .waitForAnimation()
        .pause(2000)
        .verify.elementsVisible(
            gSelectors.headerSearchClose,
            gSelectors.headerSearch,
            gSelectors.headerSearchResults)
        .verify.elementsPresent(
            gSelectors.headerSearchResultsName,
            gSelectors.headerSearchResultsArrow)
        .end();
    },

    'Verify Search can be dismissed by close button': function(browser) {
        browser
        .triggerTouch(gSelectors.headerSearch)
        .waitForAnimation()
        .verify.elementsVisible(
            gSelectors.headerSearchInput)
        .triggerTouch(gSelectors.headerSearchClose)
        .end();
    },

    'Verify login button navigates to Log In page': function(browser) {
        browser
        .assert.attributeContains(gSelectors.logInHeaderButton, "href", "login")
        .triggerTouch(gSelectors.logInHeaderButton)
        .waitForElementVisible('.login_form')
        .assert.urlEquals(browser.launch_url + 'login')
        .end();
    },

        'Verify sign up button navigates to sign up page': function(browser) {
        browser
        .assert.attributeContains(gSelectors.signUpHeaderButton, "href", "new")
        .triggerTouch(gSelectors.signUpHeaderButton)
        .waitForElementVisible('.new_user')
        .assert.urlEquals(browser.launch_url + 'users/new')
        .end();
    }
}
