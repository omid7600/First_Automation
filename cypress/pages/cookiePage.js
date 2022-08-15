class cookiePage {

    elements = {
        saveCookie: () => cy.get('//*[text()="Einstellungen speichern"]'),
        selectAllCookie: () => cy.xpath('//*[text()="Alle auswählen & bestätigen"]'),
    }
    clickSelectAllCookie() {
        this.elements.selectAllCookie().click();
    }
}
module.exports = new cookiePage();
