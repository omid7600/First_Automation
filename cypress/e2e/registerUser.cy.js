import cookiePage from '../pages/cookiePage'
import registerUserPage from '../pages/registerUsersPage'
import homePage from '../pages/homePage'
const { faker } = require('@faker-js/faker');

beforeEach(()=>{
    cy.visit('/registrierung');
    cookiePage.clickSelectAllCookie();
})
const password = 'Test123456qwertz!';
let email = "";

describe('Happy test cases: register a new user successfully', () => {
    it('register a new user successfully for hoeffner website', () => {
        const url = 'https://www.hoeffner.de/';
        email = faker.internet.email();
        registerUserPage.setSalutation(faker.name.sex());
        registerUserPage.typeFirstName(faker.name.fullName());
        registerUserPage.typeLastName(faker.name.lastName());
        registerUserPage.typeEmail(email);
        registerUserPage.typePassword(password)
        registerUserPage.typePasswordRep(password);
        registerUserPage.clickCheckboxRuleApprove();
        registerUserPage.clickButtonSubmit();
        cy.url().should('eq', url);
    })
})

describe('Unhappy test cases: unsuccessfully register a new user', () => {
    it('register a duplicate user', () => {
        registerUserPage.setSalutation(faker.name.sex());
        registerUserPage.typeFirstName(faker.name.fullName());
        registerUserPage.typeLastName(faker.name.lastName());
        registerUserPage.typeEmail(email);
        registerUserPage.typePassword(password)
        registerUserPage.typePasswordRep(password);
        registerUserPage.clickCheckboxRuleApprove();
        registerUserPage.clickButtonSubmit();
        registerUserPage.elements.ErrorMessageDuplicateEmail().should('have.text','Dieser Nutzer ist bereits vorhanden.')
    })

    it('unsuccessfully register: with empty input', () => {
        registerUserPage.clickButtonSubmit()

        registerUserPage.elements.salutationInputError().should('have.text','Bitte geben Sie eine Anrede ein');
        registerUserPage.elements.firstNameInputError().should('have.text','Bitte geben Sie Ihren Vornamen ein');
        registerUserPage.elements.lastNameInputError().should('have.text','Bitte geben Sie Ihren Nachnamen ein');
        registerUserPage.elements.ErrorMessageDuplicateEmail().should('have.text','Bitte geben Sie Ihre E-Mail-Adresse ein');
        registerUserPage.elements.passwordInputError().should('have.text','Bitte verwenden Sie ein Passwort von mindestes 8 Zeichen mit mindestens einem Kleinbuchstaben, einem Großbuchstaben, einer Zahl und einem Sonderzeichen.');
        registerUserPage.elements.passwordRepInputError().should('have.text','Bitte wiederholen Sie die Eingabe des Passworts');
        registerUserPage.elements.checkBoxRuleApproveError().should('have.text','Bitte akzeptieren Sie die AGB und die Datenschutzbestimmungen');
    })

    it('register a with unsecure password', () => {
        const pass = faker.internet.password();
        registerUserPage.setSalutation(faker.name.sex());
        registerUserPage.typeFirstName(faker.name.fullName());
        registerUserPage.typeLastName(faker.name.lastName());
        registerUserPage.typeEmail(faker.internet.email());
        registerUserPage.typePassword(pass)
        registerUserPage.typePasswordRep(pass);
        registerUserPage.clickCheckboxRuleApprove();
        registerUserPage.clickButtonSubmit();
        registerUserPage.elements.passwordInputError().should('have.text','Bitte verwenden Sie ein Passwort von mindestes 8 Zeichen mit mindestens einem Kleinbuchstaben, einem Großbuchstaben, einer Zahl und einem Sonderzeichen.');
    })

    it('register a with unmatch password', () => {
        registerUserPage.setSalutation(faker.name.sex());
        registerUserPage.typeFirstName(faker.name.fullName());
        registerUserPage.typeLastName(faker.name.lastName());
        registerUserPage.typeEmail(faker.internet.email());
        registerUserPage.typePassword(password)
        registerUserPage.typePasswordRep(faker.internet.password());
        registerUserPage.clickCheckboxRuleApprove();
        registerUserPage.clickButtonSubmit();

        registerUserPage.elements.passwordRepInputError().should('have.text','Die Passwörter stimmen nicht überein');
    })

    it('unsuccessfully register: without checkbox to accept rule', () => {
        registerUserPage.setSalutation(faker.name.sex());
        registerUserPage.typeFirstName(faker.name.fullName());
        registerUserPage.typeLastName(faker.name.lastName());
        registerUserPage.typeEmail(email);
        registerUserPage.typePassword(password)
        registerUserPage.typePasswordRep(password);
        registerUserPage.clickButtonSubmit();

        registerUserPage.elements.checkBoxRuleApproveError().should('have.text','Bitte akzeptieren Sie die AGB und die Datenschutzbestimmungen');
    })
})