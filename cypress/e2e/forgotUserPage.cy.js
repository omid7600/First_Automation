import cookiePage from '../pages/cookiePage'
import forgotUserPage from  '../pages/forgotUserPage'
import {faker} from "@faker-js/faker";

beforeEach(()=>{
    cy.visit('/login');
    cookiePage.clickSelectAllCookie();
});

describe('Happy test cases: input valid email address for new password ', () => {
    it('input email address', () => {
        const email = faker.internet.email();
        forgotUserPage.clickForgotten();
        forgotUserPage.typeForgotEmailInput(email);
        forgotUserPage.clickForgotButtonSubmit();
        cy.url().should('eq', 'https://www.hoeffner.de/passwortMail/gesendet');
    })
})

describe('unhappy:invalid date for forget password ', () => {
    it('invalid input email address', () => {
        forgotUserPage.clickForgotten();
        forgotUserPage.typeForgotEmailInput('omid.mohamadyari.yahoo.con');
        forgotUserPage.clickForgotButtonSubmit();
        forgotUserPage.elements.forgotError().should('have.text','Bitte geben Sie eine gültige E-Mail-Adresse ein');
    })

    it('input empty email address ', () => {
        forgotUserPage.clickForgotten();
        forgotUserPage.clickForgotButtonSubmit();
        forgotUserPage.elements.forgotError().should('have.text','Bitte geben Sie Ihre E-Mail-Adresse ein');
    })
})