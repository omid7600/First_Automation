require('cypress-xpath');


class wishListPage {

    elements = {
        titleOverview:()=>cy.get('.wishlistOverview__headline.wishlistOverview__headline--headlineLarge'),
        descOverview:()=>cy.get('.wishlistOverview__description.wishlistOverview__description--bodyRegular'),
        zipCodeDesc:()=>cy.get('.wishlist__postalCodeAreaDescription.wishlist__postalCodeAreaDescription--bodyRegular'),
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

}

module.exports = new wishListPage();