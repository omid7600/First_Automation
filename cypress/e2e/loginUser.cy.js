import cookiePage from '../pages/cookiePage'
import loginPage from'../pages/loginPage'
import customerAccountPage from '../pages/customerAccountPage'
// import homePage from '../pages/homePage'

describe('Happy test cases: login a  user successfully' , function(){
    before(()=>{
        cy.visit('/login');
        cookiePage.clickSelectAllCookie();
        cy.fixture('/userCredentials')
            .then(credentials => {
                this.credentials = credentials;
            })
    });

    it('Login a user', () => {
        loginPage.typeEmail(this.credentials.email);
        loginPage.typePassword(this.credentials.password);
        loginPage.clickButtonSubmit();
        cy.url().should('eq', 'https://www.hoeffner.de/');
        cy.visit('/kundenkonto');
        customerAccountPage.clickSignOut();
        cy.url().should('eq', 'https://www.hoeffner.de/login');

    });
})

describe('Unhappy test cases: unsuccessfully login',function(){
    beforeEach(()=>{
        cy.visit('/login');
        cookiePage.clickSelectAllCookie();
        cy.fixture('/userCredentials')
            .then(credentials => {
                this.credentials = credentials;
            })
    });

    it('Login with invalid user credentials', () => {
        cy.fixture('userCredentials').then((date)=>{
            loginPage.typeEmail(this.credentials.user),
                loginPage.typePassword(this.credentials.pass)
        });
        loginPage.clickButtonSubmit();
        loginPage.GetErrorEmail().should('have.text','Benutzername nicht gefunden oder Passwort falsch.');
    });


    it('Login with invalid password', () => {
        cy.fixture('userCredentials').then((date)=>{
            loginPage.typeEmail(this.credentials.user),
                loginPage.typePassword(this.credentials.pass)
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






