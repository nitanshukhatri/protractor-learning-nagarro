import { RegisterPage } from './register.po';
import { HomePage } from '../home/home.po';
import { browser } from 'protractor';
describe('protractor-tutorial - Login page', () => {
    let page: RegisterPage;
    let publicPage: HomePage;

    const wrongCredentias = {
        username: 'wrongname',
        password: 'wrongpasswd'
    };
    const rightCredentials = {
        firstname: 'test',
        lastname: 'test',
        username: 'test',
        password: 'test12'
    }

    beforeEach(() => {
        page = new RegisterPage();
        publicPage = new HomePage();

    });

    it('when user trying to Register with invalid credentials he should stay on “register” page', () => {
        page.navigateTo();
        page.fillCredentials();
        const form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-invalid');
    });
    it('when user trying to Register with valid credentials he should navigate to “login” page', () => {
        page.navigateTo();
        page.fillCredentials(rightCredentials);
        expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'login');
    });


});
