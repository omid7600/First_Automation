class homePage {

    elements = {
        loginUserElement: () => cy.get('.headerElement__status.headerElement__status--login'),
    }

    getUserHeader(){
        this.elements.loginUserElement()
    }
}
module.exports = new homePage();
