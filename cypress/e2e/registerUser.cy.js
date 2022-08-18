import cookiePage from '../pages/cookiePage'
import registerUserPage from '../pages/registerUsersPage'
import homePage from '../pages/homePage'

beforeEach(()=>{
  cy.visit('/registrierung');
  cookiePage.clickSelectAllCookie();
})

describe('Happy test cases: register a new user successfully', () => {
  it('register a new user successfully for hoeffner website', () => {
    let randomNo = parseInt(Math.random() * 6 * 100);
    cy.log(randomNo.toString());
    registerUserPage.typeFirstName('omid');
    registerUserPage.typeLastName('mohamadyari');
    registerUserPage.typeEmail('usertest' + randomNo +'@test.com');
    registerUserPage.typePassword('Test123456qwertz!')
    registerUserPage.typePasswordRep('Test123456qwertz!');
    registerUserPage.clickCheckboxRuleApprove();
    registerUserPage.clickButtonSubmit();
    homePage.elements.loginUserElement().should('have.text','omid mohamadyari')
  })

})

describe('Unhappy test cases: unsuccessfully register a new user', () => {
  it.only('register a duplicate user', () => {
    registerUserPage.typeFirstName('omid');
    registerUserPage.typeLastName('mohamadyari');
    registerUserPage.typeEmail('usertest@test.com');
    registerUserPage.typePassword('Test123456qwertz!')
    registerUserPage.typePasswordRep('Test123456qwertz!');
    registerUserPage.clickCheckboxRuleApprove();
    registerUserPage.clickButtonSubmit();
    registerUserPage.elements.ErrorMessageDuplicateEmail().should('have.text','Dieser Nutzer ist bereits vorhanden.')
  })

  it('unsuccessfully register: with empty input', () => {

  })

 it('register a with unsecure password', () => {

  })

  it('register a with unmatch password', () => {

  })

  it('unsuccessfully register: without checkbox to accept rule', () => {

  })



})