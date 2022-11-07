import cookiePage from "../pages/cookiePage";
import wishListPage from "../pages/wishListPage";
import {faker} from "@faker-js/faker";
import registerUserPage from '../pages/registerUsersPage'
import addressPage from '../pages/addressPage'

/*describe('Happy test cases: login a  user successfully' , () => {
  it('Login a  user successfully for hoeffner website', () => {
    cy.fixture('example').then((date)=>{
      loginPage.typeEmail(date.email),
          loginPage.typePassword(date.password)
    });
    loginPage.clickButtonSubmit();

  });
})*/

describe('Wish List creation', () => {
  beforeEach(()=>{
    const password = 'Test123456qwertz!';

    cy.visit('/registrierung');
    cookiePage.clickSelectAllCookie();
    const email = faker.internet.email();
    registerUserPage.setSalutation(faker.name.sex());
    registerUserPage.typeFirstName(faker.name.firstName());
    registerUserPage.typeLastName(faker.name.lastName());
    registerUserPage.typeEmail(email);
    registerUserPage.typePassword(password);
    registerUserPage.typePasswordRep(password);
    registerUserPage.clickCheckboxRuleApprove();
    registerUserPage.clickButtonSubmit();
    cy.url().should('eq', 'https://www.hoeffner.de/');
  });


  it('A registered user can add articles into the wish list', () => {
    cy.visit('/ecksofas');
    wishListPage.clickToRandomItemsWishList();
    cy.visit('/wunschliste');
    wishListPage.typezipCodeInput('12161');
    wishListPage.clickAllAddToCart();
    wishListPage.clickGoToCart();
    cy.url().should('eq', 'https://www.hoeffner.de/warenkorb');
    wishListPage.clickToCheckOut();








  });






});


