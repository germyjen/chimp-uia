var path = require('path');
var self = module.exports = {
	environment: '',
	selectors: {},
    before: function (done) {
    	var testEnvironment = getArg('env', process.argv);
    	this.environment = testEnvironment;
    	
    	var selectors = require(path.resolve(__dirname, 'tests/system/pageobjects/globalStyleguideSelectors.js'));
    	this.selectors = applyStyleGuideScope(selectors, testEnvironment);
        done();
    }
};

function getArg(arg, args) {
	var argIndex = null;
	var argString = '';
	for (var i = 0; i < args.length; i++) {
		if(args[i].substring(0,2) === '--')
		argString = args[(i + 1)];
	}

	return (argString === '') ? null : argString ;
}

function applyStyleGuideScope(selectors, testEnvironment) {
	var selectorArr = Object.keys(selectors);
	var returnObject = {};

	for (var i = 0; i < selectorArr.length; i++) {
		var key = selectorArr[i];
		var selector = selectors[key];
		if(testEnvironment === 'styleguide') {
			// Prepend the styleguide scope to all the global selectors
			if( typeof selector.styleGuideScope != 'undefined' && typeof selector.selector != 'undefined'){
				returnObject[key] = selector.styleGuideScope + ' ' + selector.selector; 
			} else {
				returnObject[key] = selector;
			}
		} else {
			// All other environments ignore the styleguide scope
			if( typeof selector.styleGuideScope != 'undefined' && typeof selector.selector != 'undefined'){
				returnObject[key] = selector.selector; 
			} else {
				returnObject[key] = selector;
			}
		}
	}
	return returnObject;
}