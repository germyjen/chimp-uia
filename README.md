# chimp-uia + Nightwatch.js
Nightwatch.js is an automated testing framework for web applications and websites, written in Node.js and using the Selenium WebDriver API.

It is a complete browser automation (End-to-End) solution which aims to simplify the process of setting up Continuous Integration and writing of automated tests.

This repo contains a suite of front-end UI tests written for chimp.net using Nightwatch.js

##To Run the Tests:

`node nightwatch` will run the entire test suite, and
`node nightwatch --test tests/system/pages/header.js`, substituting 'header.js' for any file name, will run only the selected test.

##To Dev the Tests
Tests live in `tests/system/pages/`, and reference global selectors stored in `tests/system/pageobjects/globalSelectors.js`. Every page should have its own test file. Major components, such as header and footer, should also have independent test files.

##Documentation
- [Nightwatchjs.org](http://nightwatchjs.org/)
- [Nightwatchjs.org Developer Guide](http://nightwatchjs.org/guide)
- [Nightwatch.js API Reference](http://nightwatchjs.org/api)
- [Nightwatch.js GitWiki](https://github.com/nightwatchjs/nightwatch/wiki)
- [Chimp Wiki Coverage and Planned Coverage](https://github.com/ChimpTech/Chimp/wiki/Quality-Assurance:-UI-Automation)