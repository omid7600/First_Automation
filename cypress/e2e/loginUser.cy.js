import cookiePage from '../pages/cookiePage'
import loginPage from'../pages/loginPage'
import homePage from '../pages/homePage'



beforeEach(()=>{
    cy.visit('//login');
    cookiePage.clickSelectAllCookie();
})

describe('Happy test cases: login a new user successfully' , () => {
    it('login a new user successfully for hoeffner website', () => {


        loginPage.typeEmail('omid_mohamadtari@yahoo.com')
        loginPage.typePassword('Om12345678@')
        loginPage.clickButtonSubmit()
        homePage.elements.loginUserElement().should('have.text','omid mohamadyari')

    });
})


describe('Unhappy test cases: unsuccessfully login a new user' , () => {
    it('login a register a with unsecure username', () => {
        loginPage.typeEmail('omid_mohamadyari@yahoo.com')
        loginPage.typePassword('Om1234567811111@')

    });

    it('login a  with unsecure password', () => {

    });

    it('login a unsuccessfully login: with empty input', () => {

    });
})







