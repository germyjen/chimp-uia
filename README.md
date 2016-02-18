# chimp-uia + Nightwatch.js
Nightwatch.js is an automated testing framework for web applications and websites, written in Node.js and using the Selenium WebDriver API.

It is a complete browser automation (End-to-End) solution which aims to simplify the process of setting up Continuous Integration and writing of automated tests.

This repo contains a suite of front-end UI tests written for chimp.net using Nightwatch.js

##To Run the Tests:

The minimum required java version for Selenium is 7.0.

The tests are organized into folders under `tests/system/` and can be run individually, in groups, or as a full suite.

To run the full suite, use `node nightwatch`.

To run a group of tests by folder, use `node nightwatch --group components` where "components" is the name of the grouped folder you'd like to run.

To run an individual test by filename, use `node nightwatch --test tests/system/components/mktHeader.js` with the path of the test you'd like to run.

##To Dev the Tests
Tests live in `tests/system/pages/`, and reference global selectors stored in `tests/system/pageobjects/globalSelectors.js`. Every page should have its own test file. Major components, such as header and footer, should also have independent test files.

##Documentation
- [Nightwatchjs.org](http://nightwatchjs.org/)
- [Nightwatchjs.org Developer Guide](http://nightwatchjs.org/guide)
- [Nightwatch.js API Reference](http://nightwatchjs.org/api)
- [Nightwatch.js GitWiki](https://github.com/nightwatchjs/nightwatch/wiki)
- [Chimp Wiki Coverage and Planned Coverage](https://github.com/ChimpTech/Chimp/wiki/Quality-Assurance:-UI-Automation)