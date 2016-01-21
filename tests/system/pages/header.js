var selectors = require('../../../tests/system/pageobjects/globalSelectors');


module.exports = {

    'setUp': function(browser) {
        browser
        .url('http://www.chimp.net/')
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
            '#header-search',
            '.c-modal__close',
            selectors.headerSearch)
        .end();
    },

    'Verify auto-complete activates when text is entered': function(browser) {
        browser
        .triggerTouch(selectors.headerSearch)
        .waitForAnimation()
        .setValue('#header-search', 'Red Cross')
        .waitForAnimation()
        .verify.elementsVisible(
            '.c-modal__close',
            selectors.headerSearch,
            '.c-header-search-results')
        .verify.elementsPresent(
            'li:nth-child(1) > a > svg > use',
            'div.c-list-preview__list-item-name',
            'div.c-list-preview__list-item-icon-end > svg')
        .end();
    },

'Verify Search is dismissed by close button': function(browser) {
        browser
        .triggerTouch(selectors.headerSearch)
        .waitForAnimation()
        .verify.elementsVisible(
            '#header-search')
        .triggerTouch('.c-modal__close')
        .end();
    }

}
