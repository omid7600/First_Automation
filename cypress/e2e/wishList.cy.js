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
  });

  describe('Unhappy test cases:unsuccessfully  ', () => {
    it('with empty input', () => {
      cy.visit('/ecksofas');
      wishListPage.clickToRandomItemsWishList();
      cy.visit('/wunschliste');
      wishListPage.typezipCodeInput('12161');
      wishListPage.clickAllAddToCart();
      wishListPage.clickGoToCart();
      cy.url().should('eq', 'https://www.hoeffner.de/warenkorb');
      wishListPage.clickToCheckOut();
      addressPage.clickAddressButtonSubmit();
      addressPage.elements.phoneError().should('have.text','Bitte geben Sie Ihre Telefonnummer ein');
      addressPage.elements.phoneAreaError().should('have.text','Bitte geben Sie Ihre Vorwahl ein. Bitte geben Sie min. 3 und max. 6 Zahlen ein. Bitte beginnen Sie mit "0" und verwenden Sie nur Zahlen ohne Leerzeichen.');
      addressPage.elements.houseNumberError().should('have.text','Bitte geben Sie IhreHausnummer ein');
      addressPage.elements.streetError().should('have.text','Bitte geben Sie Ihre Straße ein');
      addressPage.elements.cityError().should('have.text','Bitte geben Sie Ihre Postleitzahl ein');
      addressPage.elements.zipError().should('have.text','Bitte geben Sie Ihre Postleitzahl ein');
    });

    });

    // it('', () => {
    //
    // });
    //
    // it('', () => {
    //
    // });
    //
    // it('', () => {
    //
    // });
    //
    // it('', () => {
    //
    // });





});


