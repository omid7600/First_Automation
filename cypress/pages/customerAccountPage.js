require('cypress-xpath');

class customerAccountPage {

    elements = {
        signOutLabel:()=>cy.get(".sidebarNavigation__rootChild"),
    }

    clickSignOut() {
        this.elements.signOutLabel().click();
    }
}

module.exports = new customerAccountPage();