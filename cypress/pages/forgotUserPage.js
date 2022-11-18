require('cypress-xpath');

class forgotUserPage {

    elements = {
        forgotten:()=>cy.get('.existingAccount__forgotten'),
        forgotEmailInput:()=>cy.xpath('//input[@class="input input----rightbound"]'),
        forgotButtonSubmit:()=>cy.xpath('//button[@id="passwordForgottenSubmitId"]'),
        forgotError:()=>cy.xpath('//label[@id="passwordForgottenEmail-error"]'),
    }

    typeForgotEmailInput(email) {
    this.elements.forgotEmailInput().type(email);
    }
    clickForgotten() {
    this.elements.forgotten().click();
    }
    clickForgotButtonSubmit() {
    this.elements.forgotButtonSubmit().click();
    }


}
module.exports = new forgotUserPage();