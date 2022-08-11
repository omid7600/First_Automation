// class loginPage {
//
//
//     elements = {
//         loginEmailInput:()=>cy.get('//input[@id="loginEmail"]'),
//         loginPasswordInput:()=>cy.get('//input[@id="loginPassword"]'),
//         loginButtonSubmit:()=>cy.get('//button[@id="login-submit"]'),
//         loginForgotten:()=>cy.get(".existingAccount__row--left > .existingAccount__forgotten"),
//         loginEmailInputError:()=>cy.get('//label[@id="loginEmail-error"]'),
//
//
//     }
//
//
//
//     typeEmail(email) {
//         this.elements.loginEmailInput().type(email);
//     }
//
//     typePassword(password) {
//         this.elements.loginPasswordInput().type(password);
//     }
//
//     typeButtonSubmit(submit) {
//         this.elements.loginButtonSubmit().type(submit);
//     }
//
//     typeLoginForgotten(forgotten) {
//         this.elements.loginForgotten().type(forgotten);
//     }
//
//     typeLoginEmailInputError(Error) {
//         this.elements.loginEmailInputError().type(Error);
//
//     }
//
//
//
// }
// module.exports = new loginPage();