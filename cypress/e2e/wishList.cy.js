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
});

describe('Check the input or textboxes work as expected', () => {
    beforeEach(()=>{
        cy.visit('/');
        cookiePage.clickSelectAllCookie();
    });

    it('zipcode input should get only the number', () => {
        cy.visit('/login');
        loginPage.typeEmail("omid_mohamadyari@yahoo.com");
        loginPage.typePassword("Om7600FGH@122");
        loginPage.clickButtonSubmit();
        cy.url().should('eq', 'https://www.hoeffner.de/');
        cy.visit('/wunschliste');
        wishListPage.typewishListImputZipcode("12161");
    });

    it('zipcode input should return error with invalid value(alphabets)', () => {
        cy.visit('/login');
        loginPage.typeEmail("omid_mohamadyari@yahoo.com");
        loginPage.typePassword("Om7600FGH@122");
        loginPage.clickButtonSubmit();
        cy.url().should('eq', 'https://www.hoeffner.de/');
        cy.visit('/wunschliste');
        wishListPage.typewishListImputZipcode("eufhuewh");
    });

    it('zipcode input should return error with invalid value(space)', () => {
        cy.visit('/login');
        loginPage.typeEmail("omid_mohamadyari@yahoo.com");
        loginPage.typePassword("Om7600FGH@122");
        loginPage.clickButtonSubmit();
        cy.url().should('eq', 'https://www.hoeffner.de/');
        cy.visit('/wunschliste');
        wishListPage.typewishListImputZipcode("  ");
    });

    it('zipcode input should return error with invalid value(symbols)', () => {
        cy.visit('/login');
        loginPage.typeEmail("omid_mohamadyari@yahoo.com");
        loginPage.typePassword("Om7600FGH@122");
        loginPage.clickButtonSubmit();
        cy.url().should('eq', 'https://www.hoeffner.de/');
        cy.visit('/wunschliste');
        wishListPage.typewishListImputZipcode("@#$%^&*()_+!");
    });
});


describe('search input', () => {
    beforeEach(()=>{
        cy.visit('/');
        cookiePage.clickSelectAllCookie();
    });

    it('Enter valid input -> the item should appear after the search input', () => {
        cy.visit('/login');
        loginPage.typeEmail("omid_mohamadyari@yahoo.com");
        loginPage.typePassword("Om7600FGH@122");
        loginPage.clickButtonSubmit();
        cy.url().should('eq', 'https://www.hoeffner.de/');
        cy.visit('/wunschliste');
        wishListPage.typeWishListImputSearchField('smart');
    });

    it('Enter invalid input(symbols) -> the searched item should have empty result', () => {
        cy.visit('/login');
        loginPage.typeEmail("omid_mohamadyari@yahoo.com");
        loginPage.typePassword("Om7600FGH@122");
        loginPage.clickButtonSubmit();
        cy.url().should('eq', 'https://www.hoeffner.de/');
        cy.visit('/wunschliste');
        wishListPage.typeWishListImputSearchField('!@#$%^&*()_+');
    });

    it('Enter invalid input(two space) -> the searched item should have empty result', () => {
        cy.visit('/login');
        loginPage.typeEmail("omid_mohamadyari@yahoo.com");
        loginPage.typePassword("Om7600FGH@122");
        loginPage.clickButtonSubmit();
        cy.url().should('eq', 'https://www.hoeffner.de/');
        cy.visit('/wunschliste');
        wishListPage.typeWishListImputSearchField('      ');
    });

    it('Clear the text after put one alphabet |Digits', () => {
        cy.visit('/login');
        loginPage.typeEmail("omid_mohamadyari@yahoo.com");
        loginPage.typePassword("Om7600FGH@122");
        loginPage.clickButtonSubmit();
        cy.url().should('eq', 'https://www.hoeffner.de/');
        cy.visit('/wunschliste');
        wishListPage.typeWishListImputSearchField('smart');
        wishListPage.clickwishListSearchClearButton();
    });
});

describe(' Buttons functionality(Print button)', () => {
    beforeEach(()=>{
        cy.visit('/');
        cookiePage.clickSelectAllCookie();
    });

    it('Click on the print button -> the windows should be appear', () => {
        cy.visit('/login');
        loginPage.typeEmail("omid_mohamadyari@yahoo.com");
        loginPage.typePassword("Om7600FGH@122");
        loginPage.clickButtonSubmit();
        cy.url().should('eq', 'https://www.hoeffner.de/');
        cy.visit('/wunschliste');
        wishListPage.clickWishListPrinterIcon();
        cy.url().should('eq', 'https://www.hoeffner.de/');
    });
})

describe('Articles in wishlist row', () => {
    beforeEach(()=>{
        cy.visit('/');
        cookiePage.clickSelectAllCookie();
    });

    it('should have one informatins', () => {
        cy.visit('/login');
        loginPage.typeEmail("omid_mohamadyari@yahoo.com");
        loginPage.typePassword("Om7600FGH@122");
        loginPage.clickButtonSubmit();
        cy.url().should('eq', 'https://www.hoeffner.de/');
        cy.visit('/wunschliste');
        wishListPage.getArticleName();
        wishListPage.getArticleImage();
        wishListPage.getArticleAddToWishlist();
        wishListPage.getArticleRating();
        wishListPage.getArticleHighlights();
        wishListPage.getArticleDetailPageButton();
        wishListPage.getArticlePrices();
        wishListPage.getDeliveryInformation();
        wishListPage.getButtonContainerAddToCart();
        wishListPage.getWishlistEntryRemove();

    });

});

describe('Buttons', () => {
    beforeEach(()=>{
        cy.visit('/');
        cookiePage.clickSelectAllCookie();
    });

    it('button continue shopping redirect the customer to the homepage ', () => {
        cy.visit('/login');
        loginPage.typeEmail("omid_mohamadyari@yahoo.com");
        loginPage.typePassword("Om7600FGH@122");
        loginPage.clickButtonSubmit();
        cy.url().should('eq', 'https://www.hoeffner.de/');
        cy.visit('/wunschliste');
        wishListPage.clickwishListGoToHome();
        cy.url().should('eq', 'https://www.hoeffner.de/');


    });

});

