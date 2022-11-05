require('cypress-xpath');

class wishListPage {

    elements = {
		wishListHeart:()=> cy.get('.wishlistIcon.wishlistIcon--pointer'),
		zipCodeInput:()=>cy.xpath('//input[@class="input input--wishlist"]'),
		allAddToCart:()=>cy.xpath('//button[text()="Alle Artikel in den Warenkorb"]'),
		goToCart:()=>cy.get('#overlayRight > div > div.generalOverlay__content > div > div.addToCartOverlay__footer > a.addToCartOverlay__footerToCart > div > button'),

    }

	clickAllAddToCart() {
		cy.server();
		this.elements.allAddToCart().click();
		cy.route('POST', '**/api/cart/addMultiple').as('postCall');
		cy.wait('@postCall');
	}

	typezipCodeInput(zipcode) {
		this.elements.zipCodeInput().type(zipcode);
	}
	clickGoToCart() {
		this.elements.goToCart().click();
	}

	clickToRandomItemsWishList() {
		const randomNo= Array.from({length: 50}, () => Cypress._.random(0,60));
		cy.server();
		for(let i = 0; i < 5; i++) {
			this.elements.wishListHeart().eq(randomNo[i]).click();//.wait(500);
			cy.route('PUT', '**/api/wishlist/**').as('putItem');
			cy.wait('@putItem');
		}
	}
}

module.exports = new wishListPage();