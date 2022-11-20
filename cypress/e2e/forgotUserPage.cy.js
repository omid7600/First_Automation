import cookiePage from '../pages/cookiePage'
import forgotUserPage from  '../pages/forgotUserPage'
import {faker} from "@faker-js/faker";

describe('Happy test cases: input valid email address for new password ', () => {
  it('input email address', () => {
           cy.visit('/login');
          cookiePage.clickSelectAllCookie();
          const email = faker.internet.email();
          forgotUserPage.clickForgotten();
          forgotUserPage.typeForgotEmailInput(email)
          forgotUserPage.clickForgotButtonSubmit();
          cy.url().should('eq', 'https://www.hoeffner.de/passwortMail/gesendet');
  })

})

describe('Happy test cases: input valid email address for new password ', () => {
  it('input email address', () => {
  beforeEach(()=>{
    cy.visit('/login');
    forgotUserPage.clickForgotten();
    forgotUserPage.typeForgotEmailInput('omid.mohamadyari.yahoo.con');
    forgotUserPage.clickForgotButtonSubmit();
    forgotUserPage.elements.forgotError()
    cy.url().should('eq', 'https://www.hoeffner.de/passwortMail/gesendet');

  })


  })
})