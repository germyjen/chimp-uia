module.exports = {

    //Global Header
    header: '.c-header',
    headerLogo: '.c-header__logo',
        //refactor for nth child**
    headerFeatures: 'div.c-header__nav-wrapper > nav > ul > li:nth-child(1) > span',
    headerFeaturesOpen: 'li.c-nav-menu__item.c-nav-items-dropdown.c--open > div',
    headerSolutions: 'div.c-header__nav-wrapper > nav > ul > li:nth-child(2) > span',
    headerAbout: 'div.c-header__nav-wrapper > nav > ul > li:nth-child(3) > span',
    headerSupport: 'div.c-header__nav-wrapper > nav > ul > li:nth-child(4) > span',
        headerSolution1: '.c-nav-items-dropdown.c--open > div > div.pure-g.pure-g--gutters > div:nth-child(1) > div > a',
        headerSolution2: '.c-nav-items-dropdown.c--open > div > div.pure-g.pure-g--gutters > div:nth-child(2) > div > a',
        headerSolution3: '.c-nav-items-dropdown.c--open > div > div.pure-g.pure-g--gutters > div:nth-child(3) > div > a',
        headerSolution4: '.c-nav-items-dropdown.c--open > div > div.pure-g.pure-g--gutters > div:nth-child(4) > div > a',
            headerSecondary1: '.c-nav-items-dropdown.c--open > div > ul > li:nth-child(1) > a',
            headerSecondary2: '.c-nav-items-dropdown.c--open > div > ul > li:nth-child(2) > a',
            headerSecondary3: '.c-nav-items-dropdown.c--open > div > ul > li:nth-child(3) > a',
            headerSecondary4: '.c-nav-items-dropdown.c--open > div > ul > li:nth-child(4) > a',
            headerSecondary5: '.c-nav-items-dropdown.c--open > div > ul > li:nth-child(5) > a',
            headerSecondary6: '.c-nav-items-dropdown.c--open > div > ul > li:nth-child(6) > a',

    headerSearch: 'div.c-header__button-wrapper > div > button > svg',
    headerSearchInput: '#header-search',
    headerSearchClose: '.c-modal__close',
    headerSearchResults:'.c-header-search-results',
    headerSearchResultsAv: 'li:nth-child(1) > a > svg > use',
    headerSearchResultsName: 'div.c-list-preview__list-item-name',
    headerSearchResultsArrow: 'div.c-list-preview__list-item-icon-end > svg',
    logInHeaderButton: '.c-button.c--pop.c--light.u-margin-end-md',
    signUpHeaderButton: 'div.c-header__button-wrapper > a.c-button.c--pop.c--filled-inverted',

    //Authenticated Header
    headerAuthSearch: 'div.c-header__nav-wrapper > div > button',
    headerMegaBtn: 'div.c-header__button-wrapper > div.openByClickOn > button',
    headerProfileBtn: 'div.c-header-account-dropdown__trigger.p-dropdown__item-trigger > div > img',
 
    //Give Menu
    headerGiveMenuBtn: 'div.c-header-give-dropdown > div.p-dropdown__item-trigger > button',
    headerGiveMenuFirstHeading: 'h2.c-header-give-contents__heading',
    headerGiveMenuGiveHeading: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--give > div.c-give-cta__description > h3',
    headerGiveMenuGiveButton: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--give > div.c-give-cta__action > a',
    headerGiveMenuSendHeading: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--send > div.c-give-cta__description > h3',
    headerGiveMenuSendButton: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--send > div.c-give-cta__action > a',

    // Add Section of Give Menu
    headerGiveMenuAddDropDownHeading: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div:nth-child(2) > div.c-give-cta__description > div > div > span.c-collapsable-item__title.c-give-cta__expand-heading',
    headerGiveMenuAddHeading: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div:nth-child(2) > div.c-give-cta__description > h3',
    headerGiveMenuAddButton: '.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div:nth-child(2) > div.c-give-cta__action > a',
    headerGiveMenuAddDropDownText: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div:nth-child(2) > div.c-give-cta__description > div > div:nth-child(2) > div > div > div > p',

    // Give Section of Give Menu
    headerGiveMenuGiveDropDownHeading: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--give > div.c-give-cta__description > div > div > span.c-collapsable-item__title.c-give-cta__expand-heading',
    headerGiveMenuGiveDropDownContent: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--give > div.c-give-cta__description > div > div:nth-child(2) > div > div',
    headerGiveMenuGiveDropDownContentButton: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--give > div.c-give-cta__description > div > div:nth-child(2) > div > div > div > a',

    //Send Section of Give Menu
    headerGiveMenuSendDropDownHeading: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--send > div.c-give-cta__description > div > div > span.c-collapsable-item__title.c-give-cta__expand-heading',
    headerGiveMenuSendDropDownContent: '.c-header__button-wrapper > div:nth-child(2) > div > div.c-header-dropdown-item__contents.c-header-give-dropdown__content.p-dropdown__item-contents.p--open.p--right.p--sm > div > div.c-give-cta.c--send > div.c-give-cta__description > div > div:nth-child(2) > div > div > div > p',

    //Old header
    oldHeader: '.site-header',
    oldHeaderLogin: '#header-dropdown-btn',
    oldHeaderSignup: '#sign-up-btn',
    accountNav: '.p-account-nav',
    accountNavLogout: '#logout-link',

    //Global Footer
    preFooter: '.c-prefooter',
    footer: '.c-footer',
    postFooter: '.c-postfooter',
    subFooter: '.sub-footer',

    //Homepage Specific
    heroVideo: '.js-hero-video',
    heroTitle: '.page--title',
    heroSubtitle: '.page--subtitle',
    btnStart: 'div.row > div.small-6.columns.text-right > a',
    btnDiscover: 'div.row > div.small-6.columns.text-left > a',
    contentTitle: '.c-section__title',
    contentSubtitle: '.c-section__subtitle',
    blockGrid: '.c-block-grid',
    blockGridTitle: '.c-block-grid__title', 
    blockGridSubtitle: '.c-block-grid__subtitle--light',
    blockGridBtn: 'body > section:nth-child(5) > div > ul > li:nth-child(1) > a',
    highlights: '.c-highlight',
    highlightsTitle: '.c-section.c--highlights > div > div:nth-child(2) > div > div.c-highlight__title.c--center > div',
    highlightsBody: '.c-highlight__body',
    highlightsBtn: '.c-section.c--highlights > div > div:nth-child(2) > div > div.c-highlight__body > a',
    mkSearch: '.c-typeahead',
    ctaBanner: '.c--cta',
    ctaBannerBtn: 'body > section.c-section.c--cta > div > div > a',

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
    signUpEmailError: 'div.form-row:nth-child(3) > div:nth-child(3)',
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

