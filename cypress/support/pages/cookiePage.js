class CookiePage {

    elements= {
        saveCookie:()=>cy.get('//*[text()="Einstellungen speichern"]'),
        selectAllCookie:()=>cy.get('//*[text()="Alle auswählen & bestätigen"]'),


        clickselectAllCookie(selectallCookie) {
            this.elements.clickselectAllCookie().click();
        }


}
}
module.exports = new cookiePage();
