class loginPage {


    elements = {
        loginEmailInput:()=>cy.get('//input[@id="loginEmail"]'),
        loginPasswordInput:()=>cy.get('//input[@id="loginPassword"]'),
        loginButtonSubmit:()=>cy.get('//button[@id="login-submit"]'),
        loginForgotten:()=>cy.get(".existingAccount__row--left > .existingAccount__forgotten"),
        loginEmailInputError:()=>cy.get('//label[@id="loginEmail-error"]'),
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