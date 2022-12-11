require('cypress-xpath');


class wishListPage {

    elements = {
        titleOverview:()=>cy.get('.wishlistOverview__headline.wishlistOverview__headline--headlineLarge'),
        descOverview:()=>cy.get('.wishlistOverview__description.wishlistOverview__description--bodyRegular'),
        zipCodeDesc:()=>cy.get('.wishlist__postalCodeAreaDescription.wishlist__postalCodeAreaDescription--bodyRegular'),
        wishListImputZipcode:()=>cy.xpath('//input[@class="input input--wishlist"]'),
        wishListImputSearchField:()=>cy.xpath('//input[@class="searchField__field searchField__field--bodyRegular"]'),
        wishListSearchClearButton:()=>cy.xpath('//button[@class="searchField__clearButton"]'),
        WishListPrinterIcon:()=>cy.get('.wishlist__printArea >.printerIcon'),

    }

    getTitleOverview(){
        return this.elements.titleOverview();
    }

    getdescOverview(){
        return this.elements.descOverview();
    }

    getzipCodeDesc(){
        return this.elements.zipCodeDesc();
    }
    typewishListImputZipcode(zipcode) {
        this.elements.wishListImputZipcode().type(zipcode);
    }
    typeWishListImputSearchField(artikel) {
        this.elements.wishListImputSearchField().type(artikel);
    }
    clickwishListSearchClearButton() {
        this.elements.wishListSearchClearButton().click();
    }
    clickWishListPrinterIcon() {
        this.elements.WishListPrinterIcon().click();
    }

}

module.exports = new wishListPage();