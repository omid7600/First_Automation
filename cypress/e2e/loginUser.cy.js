import cookiePage from '../pages/cookiePage'
import loginPage from'../pages/loginPage'
// import homePage from '../pages/homePage'


beforeEach(()=>{
    cy.visit('/login');
    cookiePage.clickSelectAllCookie();
})

describe('Happy test cases: login a  user successfully' , () => {
    it('login a  user successfully for hoeffner website', () => {
        cy.fixture('example').then((date)=>{
            loginPage.typeEmail(date.email);
            loginPage.typePassword(date.password);
            loginPage.clickButtonSubmit();
        })
    });
})

describe('Unhappy test cases: unsuccessfully login a  user' , () => {
    it('login a user with invalid user', () => {
        cy.fixture('example').then((date)=>{
            loginPage.typeEmail(date.user);
            loginPage.typePassword(date.password);
            loginPage.clickButtonSubmit();
            loginPage.elements.loginEmailInputError().should('have.text','Bitte geben Sie eine gültige E-Mail-Adresse ein');
        })

    });


    it('login a  user with invalid password', () => {
        cy.fixture('example').then((date)=>{
            loginPage.typeEmail(date.email);
            loginPage.typePassword(date.pass);
            loginPage.clickButtonSubmit()
            loginPage.elements.loginPasswordInput().should('have.text','Benutzername nicht gefunden oder Passwort falsch.');
        })


    });

    it('login a unsuccessfully login: with empty input', () => {
        loginPage.clickButtonSubmit();
        loginPage.elements.loginEmailInputError().should('have.text','Bitte geben Sie Ihre E-Mail-Adresse ein');
        loginPage.elements.loginPasswordInput().should('have.text','Bitte verwenden Sie ein Passwort von mindestes 8 Zeichen mit mindestens einem Kleinbuchstaben, einem Großbuchstaben, einer Zahl und einem Sonderzeichen.');
    });
})







