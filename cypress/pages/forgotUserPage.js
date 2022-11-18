require('cypress-xpath');

class forgotUserPage {

    elements = {
        forgotten:()=>cy.get(".existingAccount__row--left > .existingAccount__forgotten"),
        forgotEmailInput:()=>.cy.xpath('//input[@id="passwordForgottenEmail"]'),
        forgotSubmitButton:()=>.cy.xpath('button[@id="passwordForgottenSubmitId"]'),
        forgotEmailError:()=>.cy.xpath('label[@id="passwordForgottenEmail-error"]'),
        forgotEmailEmptyError()=>.cy.xpath('l[@id="passwordForgottenEmail-error"]'),
    }

    clickForgotten() {
    this.elements.forgotten().click.();
    }

    typeForgotEmail(email) {
    this.elements.forgotEmailInput().type(email);
    }

    clickForgotSubmitButton() {
    this.elements.forgotSubmitButton().click();
    }

}

module.exports = new forgotUserPage();