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
        articleName:()=>cy.get('.wishlistEntry__articleName'),
        articleRating:()=>cy.get('.wishlistEntry__articleRating'),
        articleImage:()=>cy.get('.wishlistEntry__articleImage'),
        articleAddToWishlist:()=>cy.get('.wishlistEntry__articleAddToWishlistInformation.wishlistEntry__articleAddToWishlistInformation--bodySmall.wishlistEntry__articleAddToWishlistInformation--textLight.wishlistEntry__articleAddToWishlistInformation--hiddenInS'),
        articleHighlights:()=>cy.get('.wishlistEntry__articleHighlights'),
        articleDetailPageButton:()=>cy.get('.wishlistEntry__articleDetailPageButton.wishlistEntry__articleDetailPageButton--hiddenInS'),
        articlePrices:()=>cy.get('.articlePricesNew'),
        deliveryInformation:()=>cy.get('.addToCart__deliveryInformation.addToCart__deliveryInformation--wishlist'),
        buttonContainerAddToCart:()=>cy.get('.addToCart__buttonContainer.addToCart__buttonContainer--wishlist'),
        wishlistEntryRemove:()=>cy.get('.wishlistEntry__remove'),
        wishListGoToHome:()=>cy.get('#goToHome'),
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
    getArticleName() {
        return this.elements.articleName();
    }
    getArticleRating() {
        return this.elements.articleRating();
    }
    getArticleImage() {
        return this.elements.articleImage();
    }
    getArticleAddToWishlist() {
        return this.elements.articleAddToWishlist();
    }
    getArticleHighlights() {
        return this.elements.articleHighlights();
    }
    getArticleDetailPageButton() {
        return this.elements.articleDetailPageButton();
    }
    getArticlePrices() {
        return this.elements.articlePrices();
    }
    getDeliveryInformation() {
        return this.elements.deliveryInformation();
    }
    getButtonContainerAddToCart() {
        return this.elements.buttonContainerAddToCart();
    }
    getWishlistEntryRemove() {
        return this.elements.wishlistEntryRemove();
    }
    clickwishListGoToHome() {
        this.elements.wishListGoToHome().click();
    }


}

module.exports = new wishListPage();