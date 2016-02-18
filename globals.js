var path = require('path');
var self = module.exports = {
    environment: undefined,
	selectors: require(path.resolve(__dirname, 'tests/system/pageobjects/globalSelectors.js')),
    before: function (done) {
       // parseArgumentsAndGetEnv is function you need to implement on your own to find your env param
        //console.log(process.env);

        self.environment = {}
        for (e in process.env) self.environment[e] = process.env[e];
        //console.log("Run against: " + self.environment);
    	var testEnvironment = getArg('env', process.argv);
    	
    	if (testEnvironment === 'styleguide'){
    		self.selectors = prefixSelectors(self.selectors);
    		console.log(self.selectors.headerLogo);
    	}
        //done();
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

function prefixSelectors(selectors) {
	var selectorArr = Object.keys(selectors);
	var returnObject = {};
	for (var i = 0; i < selectorArr.length; i++) {
		var key = selectorArr[i];
		var selector = selectors[key];
		if(typeof selector.styleGuideScope != 'undefined' && typeof selector.selector != 'undefined'){
			returnObject[key] = selector.styleGuideScope + ' ' + selector.selector; 
		} else {
			returnObject[key] = selector;
		}
	}
	return returnObject;
}