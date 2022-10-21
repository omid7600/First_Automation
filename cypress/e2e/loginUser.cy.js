import cookiePage from '../pages/cookiePage'
import loginPage from'../pages/loginPage'
// import homePage from '../pages/homePage'


beforeEach(()=>{
    cy.visit('/login');
    cookiePage.clickSelectAllCookie();
})

describe('Happy test cases: login a  user successfully' , () => {
    it('Login a  user successfully for hoeffner website', () => {
        cy.fixture('example').then((date)=>{
            loginPage.typeEmail(date.email),
                loginPage.typePassword(date.password)
        });
        loginPage.clickButtonSubmit();

    });
})

describe('Unhappy test cases: unsuccessfully login a  user' , () => {
    it('Login with invalid user', () => {
        cy.fixture('example').then((date)=>{
            loginPage.typeEmail(date.user),
                loginPage.typePassword(date.password)
        });
        loginPage.clickButtonSubmit();
        loginPage.GetErrorEmail().should('have.text','Benutzername nicht gefunden oder Passwort falsch.');


    });


    it('Login with invalid password', () => {
        cy.fixture('example').then((date)=>{
            loginPage.typeEmail(date.user),
                loginPage.typePassword(date.pass)
        });
        loginPage.clickButtonSubmit();
        loginPage.GetErrorEmail().should('have.text','Benutzername nicht gefunden oder Passwort falsch.')



    });

    it('Login unsuccessfully: with empty input', () => {
        loginPage.clickButtonSubmit()
        loginPage.GetErrorEmail().should('have.text','Bitte geben Sie Ihre E-Mail-Adresse ein')
        loginPage.GetErrorPassword().should('have.text','Bitte verwenden Sie ein Passwort von mindestes 8 Zeichen mit mindestens einem Kleinbuchstaben, einem Großbuchstaben, einer Zahl und einem Sonderzeichen.')

    });
})






