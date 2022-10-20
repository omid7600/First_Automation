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
            loginPage.typeEmail(date.email)
            loginPage.typePassword(date.password)
            loginPage.clickButtonSubmit()
        })
    });
})

describe('Unhappy test cases: unsuccessfully login a  user' , () => {
    it('login a user with invalid user', () => {
        cy.fixture('example').then((date)=>{
            loginPage.typeEmail(date.user)
            loginPage.typePassword(date.password)
            loginPage.clickButtonSubmit()
            loginPage.elements.loginEmailInputError().should('have.text','Please enter a valid email address')
        })

    });


    it('login a  user with invalid password', () => {
        cy.fixture('example').then((date)=>{
            loginPage.typeEmail(date.email)
            loginPage.typePassword(date.pass)
            loginPage.clickButtonSubmit()
            loginPage.elements.loginPasswordInput().should('have.text','Username not found or wrong password.')
        })


    });

    it('login a unsuccessfully login: with empty input', () => {
        loginPage.clickButtonSubmit()
        loginPage.elements.loginEmailInputError().should('have.text','Please enter your e-mail address')
        loginPage.elements.loginPasswordInput().should('have.text','Please use a password of at least 8 characters with at least one lowercase letter, one uppercase letter, one number and one special character.')

    });
})







