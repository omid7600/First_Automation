import cookiePage from "../pages/cookiePage"
import loginPage from "../pages/loginPage"
import wishListPage from "../pages/wishListPage"


describe('Check wish List elements', function(){
    beforeEach(()=>{
        cy.visit('/');
        cookiePage.clickSelectAllCookie();
    });

    it('Validate the static label of wishList page: Title, overview description and postal code', () => {
        cy.visit('/login');
        loginPage.typeEmail("omid_mohamadyari@yahoo.com");
        loginPage.typePassword("Om7600FGH@122");
        loginPage.clickButtonSubmit();
        cy.url().should('eq', 'https://www.hoeffner.de/');

        cy.visit('/wunschliste');
        wishListPage.getTitleOverview().should('have.text','Wunschliste');
        wishListPage.getdescOverview().should('have.text','An dieser Stelle finden Sie eine Übersicht aller Wunschlistenartikel. Auf einen Blick erhalten Sie außerdem die wichtigsten Infos zu den Produkten. Mit nur einem Klick können Sie Ihre Lieblinge zu Ihrem Warenkorb hinzufügen.');
        wishListPage.getzipCodeDesc().should('have.text','Bitte geben Sie Ihre Postleitzahl ein, um die Lieferzeit zu berechnen.');
    })
})