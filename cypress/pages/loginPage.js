require('cypress-xpath');


class loginPage {

    elements = {
        loginEmailInput:()=>cy.xpath('//input[@id="loginEmail"]'),
        loginPasswordInput:()=>cy.xpath('//input[@id="loginPassword"]'),
        loginButtonSubmit:()=>cy.xpath('//button[@id="login-submit"]'),
        loginEmailError:()=>cy.xpath('//label[@id="loginEmail-error"]'),
        LoginPasswordError:()=>cy.xpath('//label[@id="loginPassword-error"]')
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

    GetErrorEmail(){
        return this.elements.loginEmailError();
    }
    GetErrorPassword(){
        return this.elements.LoginPasswordError();
    }

}

module.exports = new loginPage();