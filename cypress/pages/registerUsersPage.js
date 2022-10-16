require('cypress-xpath');
class registerUserPage{

    elements = {
        salutation:()=>cy.xpath('//select[@id="salutation"]'),

        firstNameInput:()=>cy.xpath('//input[@id="firstName"]'),
        lastNameInput:()=>cy.xpath('//input[@id="lastName"]'),
        emailNewAccountInput:()=>cy.get('.accountNew > .formInput.formInput--text > .formInput__inputContainer > #email'),
        passwordInput:()=>cy.xpath('//input[@id="password"]'),
        passwordRepInput:()=>cy.xpath('//input[@id="password2"]'),
        checkboxNewsletter:()=>cy.get('.accountNew__newsletterCheckbox >.accountNew__checkbox >.checkbox.checkbox--alignTop'),
        checkBoxRuleApprove:()=>cy.get('.accountNew__agbCheckbox > .accountNew__checkbox > .checkbox.checkbox--alignTop'),
        buttonSubmit:()=>cy.xpath('//button[@id="register-submit"]'),

        emailDownInput:()=>cy.xpath('//input[@id="email"and@class="input input----text"]'),

        salutationInputError:()=>cy.xpath('//span[@id="salutation-error"]'),
        firstNameInputError:()=>cy.xpath('//span[@id="firstName-error"]'),
        lastNameInputError:()=>cy.xpath('//span[@id="lastName-error"]'),
        passwordRepInputError:()=>cy.xpath('//span[@id="password2-error"]'),
        passwordInputError:()=>cy.xpath('//span[@id="password-error"]'),
        ErrorMessageDuplicateEmail:()=>cy.xpath('//span[@id="email-error"]'),
        checkBoxRuleApproveError:()=>cy.xpath('//span[@id="accountNew__agbBoxErrorId"]'),

    }

    setSalutation(gender)
    {
        this.elements.salutation().select(gender);
    }

    typeFirstName(firstname)
    {
        this.elements.firstNameInput().type(firstname);
    }

    typeLastName(lastname)
    {
        this.elements.lastNameInput().type(lastname);
    }

    typeEmail(email)
    {
        this.elements.emailNewAccountInput().type(email);
    }

    typePassword(password)
    {
        this.elements.passwordInput().type(password);
    }

    typePasswordRep(passwordRep)
    {
        this.elements.passwordRepInput().type(passwordRep);
    }

    clickCheckboxNewsletter()
    {
        this.elements.checkboxNewsletter().click();
    }

    clickCheckboxRuleApprove()
    {
        this.elements.checkBoxRuleApprove().click();
    }

    clickButtonSubmit()
    {
        this.elements.buttonSubmit().click();
    }


}
module.exports = new registerUserPage();