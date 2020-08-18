import { LoginPage } from './login.po';
import { HomePage } from '../home/home.po';
import { browser } from 'protractor';
describe('protractor-tutorial - Login page', () => {
  let page: LoginPage;
  let publicPage: HomePage;

  const wrongCredentias = {
    username: 'wrongname',
    password: 'wrongpasswd'
  };
  const rightCredentials = {
    username: 'test',
    password: 'test12'
  }

  beforeEach(() => {
    page = new LoginPage();
    publicPage = new HomePage();

  });

  it('when user trying to login with wrong credentials he should stay on “login” page', () => {
    page.navigateTo();
    page.fillCredentials(wrongCredentias);
    expect(page.getPageTitleText()).toEqual('Login');
    expect(page.getErrorMessage()).toEqual('Username or password is incorrect');
  });

  it('when login is successful — he should redirect to default “home” page', () => {

    page.navigateTo();
    const val = [{
      firstName: "test",
      id: 1,
      lastName: 'test',
      password: 'test12',
      username: 'test'
    }];
    browser.executeScript(`localStorage.setItem('users', JSON.stringify(${val}))`);

    page.fillCredentials(rightCredentials);
    expect(publicPage.getPageTitleText()).toEqual('You\'re logged in with Angular 8!!');
  });
});
