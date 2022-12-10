import cookiePage from "../pages/cookiePage";
import wishListPage from "../pages/CategoryPage";
import {faker} from "@faker-js/faker";
import registerUserPage from '../pages/registerUsersPage'
import addressPage from '../pages/addressPage'
import payPage from '../pages/payPage'

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


  it('A registered user can add articles into the wish list and add valid address successfully', () => {
    cy.visit('/ecksofas');
    wishListPage.clickToRandomItemsWishList();
    cy.visit('/wunschliste');
    wishListPage.typezipCodeInput('12161');
    wishListPage.clickAllAddToCart();
    wishListPage.clickGoToCart();
    cy.url().should('eq', 'https://www.hoeffner.de/warenkorb');
    wishListPage.clickToCheckOut();
    addressPage.typeAreaCode('0049');
    addressPage.typePhone('15217917666');
    addressPage.typeStreet('Im Stift ');
    addressPage.typeHouseNumber('5');
    addressPage.typeSupplement(faker.address.street());
    addressPage.typeFloor('6');
    addressPage.clickBoxElevator();
    addressPage.typeZip('36251');
    addressPage.typeCity('Bad Hersfeld');
    addressPage.clickAddressButtonSubmit();
    payPage.clickInstantlyRadioButton();
    payPage.clickPostPaymentSubmit();

    //elemetcart.should('have.length',wishListPage.countClickAddToWishList)
  });

});


