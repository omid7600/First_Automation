require('cypress-xpath');

class wishListPage {

    elements = {
		wishListHeart:()=> cy.get('.wishlistIcon.wishlistIcon--pointer'),
		zipCodeInput:()=>cy.xpath('//input[@class="input input--wishlist"]'),
		allAddToCart:()=>cy.xpath('//button[text()="Alle Artikel in den Warenkorb"]'),
		goToCart:()=>cy.get('#overlayRight > div > div.generalOverlay__content > div > div.addToCartOverlay__footer > a.addToCartOverlay__footerToCart > div > button'),
		ToCheckOut:()=>cy.get('#responsive > div.mainContent > div.container > div.wrapper--b.cartOverviewContent > div > div.cartOverview > div.cartOverview__summary > div.cartOverview__summaryContainer.cartOverview__summaryContainer--desktop > div.cartOverview__summaryBox > div > div.summaryBox__line.summaryBox__line--checkoutButton > div > div.totalPriceAndCheckoutButton__button > button')
    }
	countClickAddToWishList = 0;

	clickAllAddToCart() {
		cy.server();
		this.elements.allAddToCart().click();
		cy.route('PUT', '**/wunschliste').as('PutRequest');
		cy.wait('@PutRequest');
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
			this.elements.wishListHeart().eq(randomNo[i]).click().wait(500);
			cy.route('PUT', '**/api/wishlist/**').as('putItem');
			cy.wait('@putItem');
			this.countClickAddToWishList++;
		}
	}

	clickToCheckOut() {

			this.elements.ToCheckOut().click();





	}
}

module.exports = new wishListPage();