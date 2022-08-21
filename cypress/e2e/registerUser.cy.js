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
        registerUserPage.clickButtonSubmit()
        registerUserPage.elements.firstNameInputError();
        registerUserPage.elements.lastNameInputError();
        registerUserPage.elements.ErrorMessageDuplicateEmail();
        // registerUserPage.elements.passwordInputError();
        registerUserPage.elements.passwordRepInputError();
        registerUserPage.elements.checkBoxRuleApproveError();


    })

    it('register a with unsecure password', () => {
        registerUserPage.typeFirstName('omid');
        registerUserPage.typeLastName('mohamadyari');
        registerUserPage.typeEmail('usertest@test.com');
        registerUserPage.typePassword('12345678o')
        registerUserPage.typePasswordRep('12345678o');
        registerUserPage.clickCheckboxRuleApprove();
        registerUserPage.clickButtonSubmit();


    })

    it('register a with unmatch password', () => {
        registerUserPage.typeFirstName('omid');
        registerUserPage.typeLastName('mohamadyari');
        registerUserPage.typeEmail('usertest@test.com');
        registerUserPage.typePassword('Test123456qwert!')
        registerUserPage.typePasswordRep('Test123456qwertz!');
        registerUserPage.clickCheckboxRuleApprove();
        registerUserPage.clickButtonSubmit();


    })

    it('unsuccessfully register: without checkbox to accept rule', () => {
        registerUserPage.typeFirstName('omid');
        registerUserPage.typeLastName('mohamadyari');
        registerUserPage.typeEmail('usertest@test.com');
        registerUserPage.typePassword('Test123456qwertz!')
        registerUserPage.typePasswordRep('Test123456qwertz!');
        // registerUserPage.clickCheckboxRuleApprove();
        registerUserPage.clickButtonSubmit();

    })



})