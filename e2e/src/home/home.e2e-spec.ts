import { HomePage } from './home.po';
import { LoginPage } from '../login/login.po';

describe('protractor- Home page', () => {
    let page: HomePage;
    let loginPage: LoginPage;

    beforeEach(() => {
        page = new HomePage();
        loginPage = new LoginPage();
    });

    it('when not authenticated user tries to access “protected” page he should redirect to “login” page and see error notification', () => {
        page.navigateTo();
        page.logOut(); // must be logged out before trying access "protected" page
        page.navigateTo();
        expect(loginPage.getPageTitleText()).toEqual('Login');
    });

    //   it(`not authenticated user tries to access “protected” page and after being redirected to “login” screen, after successful
    //    login he should redirect to  “protected”`, () => {
    //     publicPage.navigateTo();
    //     publicPage.logOut(); // must be logged out before trying access "protected" page
    //     page.navigateTo();
    //     loginPage.fillCredentials();
    //     expect(page.getPageTitleText()).toEqual('Protected');
    //   });
});
