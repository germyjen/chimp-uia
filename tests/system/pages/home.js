var selectors = require('../../../tests/system/pageobjects/globalSelectors');


module.exports = {

    'setUp': function(browser) {
        browser
        .url('http://www.chimp.net/')
        .waitForElementVisible(selectors.logInHeaderButton)
    },

    'Verify page elements present': function(browser) {
    	browser
    	.verify.elementsPresent(
    		//global
    		selectors.header,
    		selectors.preFooter,
    		selectors.footer,
    		selectors.postFooter,
    		//home hero
    		selectors.heroVideo,
    		selectors.heroTitle,
    		selectors.heroSubtitle,
    		selectors.btnStart,
    		selectors.btnDiscover,
    		//home content
    		selectors.contentTitle,
    		selectors.contentSubtitle,
    		selectors.blockGrid,
    		selectors.blockGridTitle,
    		selectors.blockGridSubtitle,
    		selectors.blockGridBtn,
    		selectors.highlights,
    		selectors.highlightsTitle,
    		selectors.highlightsBody,
    		selectors.highlightsBtn,
    		selectors.mkSearch,
    		//banner CTA
    		selectors.ctaBanner,
    		selectors.ctaBannerBtn
    		)
    	.end();
    }

}
