class registerUserPage{

    elements = {
        salutation:()=>cy.get('//select[@id="salutation"]'),
        firstNameInput:()=>cy.get('//input[@id="firstName"]'),
        lastNameInput:()=>cy.get('//input[@id="lastName"]'),
        emailNewAccountInput:()=>cy.get('.accountNew > .formInput.formInput--text > .formInput__inputContainer > #email'),
        passwordInput:()=>cy.get('//input[@id="password"]'),
        passwordRepInput:()=>cy.get('//input[@id="password2"]'),
        checkboxNewsletter:()=>cy.get('.accountNew__newsletterCheckbox >.accountNew__checkbox >.checkbox.checkbox--alignTop'),
        checkBoxRuleApprove:()=>cy.get('.accountNew__agbCheckbox > .accountNew__checkbox > .checkbox.checkbox--alignTop'),
        buttonSubmit:()=>cy.get('//button[@id="register-submit"]'),
        emailDownInput:()=>cy.get('//input[@id="email"and@class="input input----text"]')
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

    typePasswordRep(passwordrep)
    {
        this.elements.passwordRepInput().type(passwordrep);
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