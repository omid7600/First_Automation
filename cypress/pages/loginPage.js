require('cypress-xpath');


class loginPage {

    elements = {
        loginEmailInput:()=>cy.xpath('//input[@id="loginEmail"]'),
        loginPasswordInput:()=>cy.xpath('//input[@id="loginPassword"]'),
        loginButtonSubmit:()=>cy.xpath('//button[@id="login-submit"]'),
        loginForgotten:()=>cy.xpath(".existingAccount__row--left > .existingAccount__forgotten"),
        loginEmailInputError:()=>cy.xpath('//label[@id="loginEmail-error"]'),
    }

    typeEmail(email) {
        this.elements.loginEmailInput().type(email);
    }

    typePassword(password) {
        this.elements.loginPasswordInput().type(password);
    }

    clickButtonSubmit() {
        this.elements.loginButtonSubmit().click();
    }

    clickLoginForgotten() {
        this.elements.loginForgotten().click();
    }

    typeLoginEmailInputError() {
        this.elements.loginEmailInputError().type(Error);

    }
}
module.exports = new loginPage();