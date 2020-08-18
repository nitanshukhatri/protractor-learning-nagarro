import { browser, by, element } from 'protractor';

export class RegisterPage {
    private credentias = {
        firstname: 'test',
        lastname: 'test',
        username: 'test',
        password: '12'
    };

    navigateTo() {
        return browser.get('/register');
    }

    fillCredentials(credentias: any = this.credentias) {
        element(by.css('[name="firstname"]')).sendKeys(credentias.firstname);
        element(by.css('[name="lastname"]')).sendKeys(credentias.lastname);
        element(by.css('[name="username"]')).sendKeys(credentias.username);
        element(by.css('[name="password"]')).sendKeys(credentias.password);
        element(by.css('.btn-primary')).click();
    }

    getPageTitleText() {
        return element(by.css('app-root h2')).getText();
    }

    getErrorMessage() {
        return element(by.css('.alert-danger')).getText();
    }
    getForm() {
        return element(by.css('[name="form"]'));
    }
}
