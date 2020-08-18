import { browser, by, element } from 'protractor';

export class PublicPage {
    navigateTo() {
        return browser.get('/public');
    }

    getPageTitleText() {
        return element(by.css('app-root h1')).getText();
    }

    logOut() {
        return element(by.css('a[href="/login"]')).click();
    }
}
