module.exports = {

    //Global Header
    header: '.c-header',
    headerLogo: '.c-header__logo',

    //Marketing Header
    headerFeatures: '.c-header__nav-wrapper li:nth-child(1) > span',
    headerFeaturesOpen: '.c-header-dropdown-item__contents.p-dropdown__item-contents.p--open',
    headerSolutions: '.c-header__nav-wrapper li:nth-child(2) > span',
    headerAbout: '.c-header__nav-wrapper li:nth-child(3) > span',
    headerSupport: '.c-header__nav-wrapper li:nth-child(4) > span',
        headerSolution1: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open div:nth-child(1) > div > a',
        headerSolution2: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open div:nth-child(2) > div > a',
        headerSolution3: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open div:nth-child(3) > div > a',
        headerSolution4: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open div:nth-child(4) > div > a',
            headerSecondary1: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open li:nth-child(1) > a',
            headerSecondary2: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open li:nth-child(2) > a',
            headerSecondary3: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open li:nth-child(3) > a',
            headerSecondary4: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open li:nth-child(4) > a',
            headerSecondary5: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open li:nth-child(5) > a',
            headerSecondary6: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open li:nth-child(6) > a',
    headerSearch: '.c-header__button-wrapper .c-header__search-button',
    headerSearchInput: '#header-search',
    headerSearchClose: '.c-header-modal__close',
    headerSearchResults:'.c-search-modal__results',
    headerSearchResultsName: '.c-list-preview__list-item-name',
    headerSearchResultsArrow: '.c-list-preview__list-item-icon-end > svg',
    logInHeaderButton: '.bonobo.header .c-header__button-wrapper > .c-button[href="/login"]',
    signUpHeaderButton: '.bonobo.header .c-header__button-wrapper > .c-button[href="/users/new"]',

    //Authenticated Header
    //Account Nav
    accountNav: '.c-header-account-dropdown__trigger-avatar',
        accountNavBody: '.c-header-account-nav',
    accountNavGreeting: '.c-header-account-nav__greeting',
    accountNavBalance: '.c-user-balance-summary',
        accountNavAmount: '.c-user-balance-summary__amount',
    accountNavAddMoney: '.c-user-balance-summary .c-button[href="/donations/new"]',
    accountNavSettings: '.c-header-account-nav__content-area > div.pure-u-3-8 > h3',
        accountNavSettingsContent: '.c-header-account-nav__content-area',
        accountNavAccSettingsLink: '.c-header-account-nav__content-area li:nth-child(1) > a',
        accountNavTaxReceipts: '.c-header-account-nav__content-area li:nth-child(2) > a',
        accountNavGivingTools: '.c-header-account-nav__content-area li:nth-child(3) > a',
        accountNavLogout: '.c-header-account-nav__content-area li:nth-child(4) > a',
    headerAuthSearch: 'div.c-header__nav-wrapper > div > button',
    headerMegaBtn: 'div.c-header__button-wrapper > div.openByClickOn > button',
    headerProfileBtn: '.header-wrapper .c-header__button-wrapper > div.p-dropdown button',

    //Global Footer
    preFooter: '.c-prefooter',
    footer: '.c-footer',
    postFooter: '.c-postfooter',
    subFooter: '.sub-footer',

    //Homepage Specific
    heroVideo: '.js-hero-video',
    heroTitle: '.page--title',
    heroSubtitle: '.page--subtitle',
    btnStart: '.small-6.columns.text-right > a',
    btnDiscover: '.small-6.columns.text-left > a',
    contentTitle: '.c-section__title',
    contentSubtitle: '.c-section__subtitle',
    blockGrid: '.c-block-grid',
    blockGridTitle: '.c-block-grid__title', 
    blockGridSubtitle: '.c-block-grid__subtitle--light',
    blockGridBtn: 'section:nth-child(5) li:nth-child(1) > a',
    highlights: '.c-highlight',
    highlightsTitle: '.c--highlights div:nth-child(2) .c-highlight__title.c--center > div',
    highlightsBody: '.c-highlight__body',
    highlightsBtn: '.c--highlights div:nth-child(2) .c-highlight__body > a',
    mkSearch: '.c-typeahead',
    ctaBanner: '.c--cta',
    ctaBannerBtn: '.c-section.c--cta > div > div > a',

    //Log In page specifc
    logInSubmit: '#login_form > button',
    logInUsername: 'input[type="text"]',
    logInPassword: 'input[type="password"]',
    logInForgot: '#login_form > a',
    logInSidebar: '.sidebar',
    logInSidebarBtn: '.sidebar > div > div > div > button',
    logInError: '.error',
    logInErrorMsg: '.flash-msg-body',
    logInErrorClose: '#feed > div > div.flash-container.alert.error > div:nth-child(3) > a',

    //Sign Up Page specific
    signUpFirstName: '#user_first_name',
    signUpLastName: '#user_last_name',
    signUpEmail: '#user_email',
    signUpEmailError: '#new_user > div.form-wrapper > div.form-row.form-alert.error > div',
    signUpPassword: '#user_password',
    signUpPasswordError: 'div.form-row:nth-child(4) > div:nth-child(3)',
    signUpCountry: '#country',
    sighUpAgreement: '#new_user > p > a:nth-child(1)',
    signUpTerms: '#new_user > p > a:nth-child(3)',
    signUpPrivacy: '#new_user > p > a:nth-child(4)',
    signUpSubmit: '#new_user > button',

    //Account Page
    accountContent: '.tools-page',

    //Donor Photo specific
    photoContentWrapper: '.tools-wrapper.settings-avatar.f-right',
    photoUploadArea: '#upload-area',
    photoTitle: '.tools-wrapper.settings-avatar.f-right > h2',
    photoUploadedImg: '#uploaded-image',
    photoTextBlurb: '.p-image-upload__text',
    photoUploadButton: '#image-upload-button',
    photoSelectButton: '#image-select-button',
    photoCancelUpload: '#image-upload-cancel-button',
    photoSliderContainer: '#slider-container',
    photoResizeSlider: '#image-resize-slider',
    photoHiddenUploadField: '#image-upload-field',
    photoUploadOverlay: '#upload-overlay',
    photoUploadProgress: '.p--loading-image',
    photoUploadSuccess: '.p--upload-success'

};

