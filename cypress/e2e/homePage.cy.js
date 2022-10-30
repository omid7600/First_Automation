import cookiePage from "../pages/cookiePage";
import loginPage from "../pages/loginPage";
import homePage from"../pages/homePage"
import {faker} from "@faker-js/faker";
import registerUserPage from "../pages/registerUsersPage";

const password = 'Test123456qwertz!';
let email = "";

beforeEach(()=>{
  cy.visit('/');
  cookiePage.clickSelectAllCookie();

/*  cy.visit('/registrierung');
  const url = 'https://www.hoeffner.de/';
  email = faker.internet.email();
  registerUserPage.setSalutation(faker.name.sex());
  registerUserPage.typeFirstName(faker.name.fullName());
  registerUserPage.typeLastName(faker.name.lastName());
  registerUserPage.typeEmail(email);
  registerUserPage.typePassword(password)
  registerUserPage.typePasswordRep(password);
  registerUserPage.clickCheckboxRuleApprove();
  registerUserPage.clickButtonSubmit();
  cy.url().should('eq', url);*/

})

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
  it('A registered user can add articles into the wish list', () => {
    cy.visit('/ecksofas');

    homePage.GetListOfWishArticle();
/*    homePage.clickCornerSofas();
    homePage.clickProduct001();
    homePage.clickProduct002();
    homePage.clickProduct003();
    homePage.clickWishListHome();*/





  })
})