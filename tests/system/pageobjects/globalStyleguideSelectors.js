module.exports = {
    //Global Header
    header: {
        styleGuideScope: '#HeaderExample1', 
        selector: '.c-header'
    },



    headerLogo: {styleGuideScope: '#HeaderExample1', selector: '.c-header__logo'},

    //Marketing Header
    headerFeatures: {styleGuideScope: '#HeaderExample1', selector: '.c-header__nav-wrapper li:nth-child(1) > span'},
    headerFeaturesOpen: {styleGuideScope: '#HeaderExample1', selector: '.c-header-dropdown-item__contents.p-dropdown__item-contents.p--open'},
    headerSolutions: {styleGuideScope: '#HeaderExample1', selector: '.c-header__nav-wrapper li:nth-child(2) > span'},
    headerAbout: {styleGuideScope: '#HeaderExample1', selector: '.c-header__nav-wrapper li:nth-child(3) > span'},
    headerSupport: {styleGuideScope: '#HeaderExample1', selector: '.c-header__nav-wrapper li:nth-child(4) > span'},
        headerSolution1: {styleGuideScope: '#HeaderExample1', selector: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open div:nth-child(1) > div > a'},
        headerSolution2: {styleGuideScope: '#HeaderExample1', selector: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open div:nth-child(2) > div > a'},
        headerSolution3: {styleGuideScope: '#HeaderExample1', selector: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open div:nth-child(3) > div > a'},
        headerSolution4: {styleGuideScope: '#HeaderExample1', selector: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open div:nth-child(4) > div > a'},
            headerSecondary1: {styleGuideScope: '#HeaderExample1', selector: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open li:nth-child(1) > a'},
            headerSecondary2: {styleGuideScope: '#HeaderExample1', selector: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open li:nth-child(2) > a'},
            headerSecondary3: {styleGuideScope: '#HeaderExample1', selector: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open li:nth-child(3) > a'},
            headerSecondary4: {styleGuideScope: '#HeaderExample1', selector: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open li:nth-child(4) > a'},
            headerSecondary5: {styleGuideScope: '#HeaderExample1', selector: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open li:nth-child(5) > a'},
            headerSecondary6: {styleGuideScope: '#HeaderExample1', selector: '.c-header-dropdown-item.c-header-nav-menu__item.p-dropdown__item.p--open li:nth-child(6) > a'},
    headerSearch: {styleGuideScope: '#HeaderExample1', selector: '.c-header__button-wrapper .c-header__search-button'},
    headerSearchInput: {styleGuideScope: '#HeaderExample1', selector: '#header-search'},
    headerSearchClose: {styleGuideScope: '#HeaderExample1', selector: '.c-modal__close'},
    headerSearchResults:'.c-modal-search__results',
    headerSearchResultsName: {styleGuideScope: '#HeaderExample1', selector: '.c-list-preview__list-item-name'},
    headerSearchResultsArrow: {styleGuideScope: '#HeaderExample1', selector: '.c-list-preview__list-item-icon-end > svg'},
    logInHeaderButton: {styleGuideScope: '#HeaderExample1', selector: '.bonobo.header .c-header__button-wrapper > .c-button[href="/login"]'},
    signUpHeaderButton: {styleGuideScope: '#HeaderExample1', selector: '.bonobo.header .c-header__button-wrapper > .c-button[href="/users/new"]'},

    //Authenticated Header
    //Account Nav
    headerProfileBtn: {styleGuideScope: '#HeaderExample1', selector: '.c-header-account-dropdown__trigger-avatar'},
    accountNav: {styleGuideScope: '#HeaderExample1', selector: '.c-header-account-dropdown__trigger-avatar'},
        accountNavBody: {styleGuideScope: '#HeaderExample1', selector: '.c-header-account-nav'},
            accountNavGreeting: {styleGuideScope: '#HeaderExample1', selector: '.c-header-account-nav__greeting'},
            headerAccountNavSwitchAccountButton: {styleGuideScope: '#HeaderExample1', selector: '.c-header-account-nav .c-header-account-nav__switch-account-button'},
            accountNavBalance: {styleGuideScope: '#HeaderExample1', selector: '.c-user-balance-summary'},
                accountNavAmount: {styleGuideScope: '#HeaderExample1', selector: '.c-user-balance-summary__amount'},
                accountNavAddMoney: {styleGuideScope: '#HeaderExample1', selector: '.c-user-balance-summary .c-button[href="/donations/new"]'},
            accountNavSettings: {styleGuideScope: '#HeaderExample1', selector: '.c-header-account-nav__content-area > div.pure-u-3-8 > h3'},
                accountNavSettingsContent: {styleGuideScope: '#HeaderExample1', selector: '.c-header-account-nav__content-area'},
                accountNavAccSettingsLink: {styleGuideScope: '#HeaderExample1', selector: '.c-header-account-nav__content-area li:nth-child(1) > a'},
                accountNavTaxReceipts: {styleGuideScope: '#HeaderExample1', selector: '.c-header-account-nav__content-area li:nth-child(2) > a'},
                accountNavGivingTools: {styleGuideScope: '#HeaderExample1', selector: '.c-header-account-nav__content-area li:nth-child(3) > a'},
                accountNavLogout: {styleGuideScope: '#HeaderExample1', selector: '.c-header-account-nav__content-area li:nth-child(4) > a'},
    
    // Account Switcher
    headerAccountSwitcher: {styleGuideScope: '#HeaderExample1', selector: '.c-header-account-switcher'},
    headerAccountSwitcherCancelButton: {styleGuideScope: '#HeaderExample1', selector: '.c-header-account-switcher .c-button'},

    headerAuthSearch: {styleGuideScope: '#HeaderExample1', selector: 'div.c-header__nav-wrapper > div > button'},
    headerMegaBtn: {styleGuideScope: '#HeaderExample1', selector: 'div.c-header__button-wrapper > div.openByClickOn > button'},

 
    //Give Menu
    headerGiveMenuBtn: {styleGuideScope: '#HeaderExample1', selector: 'div.c-header-give-dropdown > div.p-dropdown__item-trigger > button'},
    headerGiveMenuFirstHeading: {styleGuideScope: '#HeaderExample1', selector: 'h2.c-header-give-contents__heading'},
    headerGiveMenuGiveHeading: {styleGuideScope: '#HeaderExample1', selector: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--give > div.c-give-cta__description > h3'},
    headerGiveMenuGiveButton: {styleGuideScope: '#HeaderExample1', selector: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--give > div.c-give-cta__action > a'},
    headerGiveMenuSendHeading: {styleGuideScope: '#HeaderExample1', selector: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--send > div.c-give-cta__description > h3'},
    headerGiveMenuSendButton: {styleGuideScope: '#HeaderExample1', selector: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--send > div.c-give-cta__action > a'},

    // Add Section of Give Menu
    headerGiveMenuAddDropDownHeading: {styleGuideScope: '#HeaderExample1', selector: '.c-header__button-wrapper .c-header-give-dropdown .c-header-give-dropdown__content.p--open .c-give-cta:nth-of-type(1) .p-collapsible-item__heading'},
    headerGiveMenuAddHeading: {styleGuideScope: '#HeaderExample1', selector: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div:nth-child(2) > div.c-give-cta__description > h3'},
    headerGiveMenuAddButton: {styleGuideScope: '#HeaderExample1', selector: '.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div:nth-child(2) > div.c-give-cta__action > a'},
    headerGiveMenuAddDropDownText: {styleGuideScope: '#HeaderExample1', selector: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div:nth-child(2) > div.c-give-cta__description > div > div:nth-child(2) > div > div > div > p'},

    // Give Section of Give Menu
    headerGiveMenuGiveDropDownHeading: {styleGuideScope: '#HeaderExample1', selector: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--give > div.c-give-cta__description > div > div > span.c-collapsable-item__title.c-give-cta__expand-heading'},
    headerGiveMenuGiveDropDownContent: {styleGuideScope: '#HeaderExample1', selector: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--give > div.c-give-cta__description > div > div:nth-child(2) > div > div'},
    headerGiveMenuGiveDropDownContentButton: {styleGuideScope: '#HeaderExample1', selector: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--give > div.c-give-cta__description > div > div:nth-child(2) > div > div > div > a'},

    //Send Section of Give Menu
    headerGiveMenuSendDropDownHeading: {styleGuideScope: '#HeaderExample1', selector: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--send > div.c-give-cta__description > div > div > span.c-collapsable-item__title.c-give-cta__expand-heading'},
    headerGiveMenuSendDropDownContent: {styleGuideScope: '#HeaderExample1', selector: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--send > div.c-give-cta__description > div > div:nth-child(2) > div > div > div > p'},

    //Old header
    oldHeader: {styleGuideScope: '#HeaderExample1', selector: '.site-header'},
    oldHeaderLogin: {styleGuideScope: '#HeaderExample1', selector: '#header-dropdown-btn'},
    oldHeaderSignup: {styleGuideScope: '#HeaderExample1', selector: '#sign-up-btn'},
    accountNav: {styleGuideScope: '#HeaderExample1', selector: '.p-account-nav'},
    accountNavLogout: {styleGuideScope: '#HeaderExample1', selector: '#logout-link'},

    //Global Footer
    preFooter: {styleGuideScope: '#HeaderExample1', selector: '.c-prefooter'},
    footer: {styleGuideScope: '#HeaderExample1', selector: '.c-footer'},
    postFooter: {styleGuideScope: '#HeaderExample1', selector: '.c-postfooter'},
    subFooter: {styleGuideScope: '#HeaderExample1', selector: '.sub-footer'},

    //Homepage Specific
    heroVideo: {styleGuideScope: '#HeaderExample1', selector: '.js-hero-video'},
    heroTitle: {styleGuideScope: '#HeaderExample1', selector: '.page--title'},
    heroSubtitle: {styleGuideScope: '#HeaderExample1', selector: '.page--subtitle'},
    btnStart: {styleGuideScope: '#HeaderExample1', selector: '.small-6.columns.text-right > a'},
    btnDiscover: {styleGuideScope: '#HeaderExample1', selector: '.small-6.columns.text-left > a'},
    contentTitle: {styleGuideScope: '#HeaderExample1', selector: '.c-section__title'},
    contentSubtitle: {styleGuideScope: '#HeaderExample1', selector: '.c-section__subtitle'},
    blockGrid: {styleGuideScope: '#HeaderExample1', selector: '.c-block-grid'},
    blockGridTitle: {styleGuideScope: '#HeaderExample1', selector: '.c-block-grid__title'}, 
    blockGridSubtitle: {styleGuideScope: '#HeaderExample1', selector: '.c-block-grid__subtitle--light'},
    blockGridBtn: {styleGuideScope: '#HeaderExample1', selector: 'section:nth-child(5) li:nth-child(1) > a'},
    highlights: {styleGuideScope: '#HeaderExample1', selector: '.c-highlight'},
    highlightsTitle: {styleGuideScope: '#HeaderExample1', selector: '.c--highlights div:nth-child(2) .c-highlight__title.c--center > div'},
    highlightsBody: {styleGuideScope: '#HeaderExample1', selector: '.c-highlight__body'},
    highlightsBtn: {styleGuideScope: '#HeaderExample1', selector: '.c--highlights div:nth-child(2) .c-highlight__body > a'},
    mkSearch: {styleGuideScope: '#HeaderExample1', selector: '.c-typeahead'},
    ctaBanner: {styleGuideScope: '#HeaderExample1', selector: '.c--cta'},
    ctaBannerBtn: {styleGuideScope: '#HeaderExample1', selector: '.c-section.c--cta > div > div > a'},

    //Log In page specifc
    logInSubmit: {styleGuideScope: '#HeaderExample1', selector: '#login_form > button'},
    logInUsername: {styleGuideScope: '#HeaderExample1', selector: 'input[type="text"]'},
    logInPassword: {styleGuideScope: '#HeaderExample1', selector: 'input[type="password"]'},
    logInForgot: {styleGuideScope: '#HeaderExample1', selector: '#login_form > a'},
    logInSidebar: {styleGuideScope: '#HeaderExample1', selector: '.sidebar'},
    logInSidebarBtn: {styleGuideScope: '#HeaderExample1', selector: '.sidebar > div > div > div > button'},
    logInError: {styleGuideScope: '#HeaderExample1', selector: '.error'},
    logInErrorMsg: {styleGuideScope: '#HeaderExample1', selector: '.flash-msg-body'},
    logInErrorClose: {styleGuideScope: '#HeaderExample1', selector: '#feed > div > div.flash-container.alert.error > div:nth-child(3) > a'},

    //Sign Up Page specific
    signUpFirstName: {styleGuideScope: '#HeaderExample1', selector: '#user_first_name'},
    signUpLastName: {styleGuideScope: '#HeaderExample1', selector: '#user_last_name'},
    signUpEmail: {styleGuideScope: '#HeaderExample1', selector: '#user_email'},
    signUpEmailError: {styleGuideScope: '#HeaderExample1', selector: '#new_user > div.form-wrapper > div.form-row.form-alert.error > div'},
    signUpPassword: {styleGuideScope: '#HeaderExample1', selector: '#user_password'},
    signUpPasswordError: {styleGuideScope: '#HeaderExample1', selector: 'div.form-row:nth-child(4) > div:nth-child(3)'},
    signUpCountry: {styleGuideScope: '#HeaderExample1', selector: '#country'},
    sighUpAgreement: {styleGuideScope: '#HeaderExample1', selector: '#new_user > p > a:nth-child(1)'},
    signUpTerms: {styleGuideScope: '#HeaderExample1', selector: '#new_user > p > a:nth-child(3)'},
    signUpPrivacy: {styleGuideScope: '#HeaderExample1', selector: '#new_user > p > a:nth-child(4)'},
    signUpSubmit: {styleGuideScope: '#HeaderExample1', selector: '#new_user > button'},

    //Account Page
    accountContent: {styleGuideScope: '#HeaderExample1', selector: '.tools-page'},

    //Donor Photo specific
    photoContentWrapper: {styleGuideScope: '#HeaderExample1', selector: '.tools-wrapper.settings-avatar.f-right'},
    photoUploadArea: {styleGuideScope: '#HeaderExample1', selector: '#upload-area'},
    photoTitle: {styleGuideScope: '#HeaderExample1', selector: '.tools-wrapper.settings-avatar.f-right > h2'},
    photoUploadedImg: {styleGuideScope: '#HeaderExample1', selector: '#uploaded-image'},
    photoTextBlurb: {styleGuideScope: '#HeaderExample1', selector: '.p-image-upload__text'},
    photoUploadButton: {styleGuideScope: '#HeaderExample1', selector: '#image-upload-button'},
    photoSelectButton: {styleGuideScope: '#HeaderExample1', selector: '#image-select-button'},
    photoCancelUpload: {styleGuideScope: '#HeaderExample1', selector: '#image-upload-cancel-button'},
    photoSliderContainer: {styleGuideScope: '#HeaderExample1', selector: '#slider-container'},
    photoResizeSlider: {styleGuideScope: '#HeaderExample1', selector: '#image-resize-slider'},
    photoHiddenUploadField: {styleGuideScope: '#HeaderExample1', selector: '#image-upload-field'},
    photoUploadOverlay: {styleGuideScope: '#HeaderExample1', selector: '#upload-overlay'},
    photoUploadProgress: {styleGuideScope: '#HeaderExample1', selector: '.p--loading-image'},
    photoUploadSuccess: '.p--upload-success',

};

