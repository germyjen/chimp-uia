var gSelectors = require('../../../tests/system/pageobjects/globalSelectors');
var homeSelectors = require('../../../tests/system/pageobjects/homeSelectors');


module.exports = {

    'setUp': function(browser) {
        browser
        .init(browser.launch_url)
        .waitForElementVisible(gSelectors.logInHeaderButton)
    },

    'Verify page elements present': function(browser) {
    	browser
    	.verify.elementsPresent(
    		//global
    		gSelectors.header,
    		gSelectors.preFooter,
    		gSelectors.footer,
    		gSelectors.postFooter,
    		//home hero
    		homeSelectors.heroVideo,
    		homeSelectors.heroTitle,
    		homeSelectors.heroSubtitle,
    		homeSelectors.btnStart,
    		homeSelectors.btnDiscover,
    		//home content
    		homeSelectors.contentTitle,
    		homeSelectors.contentSubtitle,
    		homeSelectors.blockGrid,
    		homeSelectors.blockGridTitle,
    		homeSelectors.blockGridSubtitle,
    		// selectors.blockGridBtn,
    		homeSelectors.highlights,
    		homeSelectors.highlightsTitle,
    		homeSelectors.highlightsBody,
    		homeSelectors.highlightsBtn,
    		homeSelectors.mkSearch,
    		//banner CTA
    		homeSelectors.ctaBanner,
    		homeSelectors.ctaBannerBtn
    		)
    	.end();
    }

}
