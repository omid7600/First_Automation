require('cypress-xpath');

class homePage {

    elements = {

		furniture:()=>cy.xpath('//a[@class="menu__linkHref menu__linkHref--default"and@href="/moebel"]'),
		Christmas:()=>cy.xpath('//a[@class="menu__linkHref menu__linkHref--default"and@href="/weihnachten"]'),
		kitchens:()=>cy.xpath('//a[@class="menu__linkHref menu__linkHref--default"and@href="/kuechenstudio"]'),
		household:()=>cy.xpath('//a[@class="menu__linkHref menu__linkHref--default"and@href="/haushalt"]'),
		bedding:()=>cy.xpath('//a[@class="menu__linkHref menu__linkHref--default"and@href="/bettwaren"]'),
		mattresses:()=>cy.xpath('//a[@class="menu__linkHref menu__linkHref--default"and@href="/matratzen"]'),
		carpets:()=>cy.xpath('//a[@class="menu__linkHref menu__linkHref--default"and@href="/teppiche"]'),
		textiles:()=>cy.xpath('//a[@class="menu__linkHref menu__linkHref--default"and@href="/textilien"]'),
		to_shine:()=>cy.xpath('//a[@class="menu__linkHref menu__linkHref--default"and@href="/lampen"]'),
		accessories:()=>cy.xpath('//a[@class="menu__linkHref menu__linkHref--default"and@href="/accessoires"]'),
		children:()=>cy.xpath('//a[@class="menu__linkHref menu__linkHref--default"and@href="/baby-kind"]'),
		Brands:()=>cy.xpath('//a[@class="menu__linkHref menu__linkHref--default"and@href="/marken-serien"]'),
		Sale:()=>cy.xpath('//a[@class="menu__linkHref menu__linkHref--default"and@href="/angebote"]'),
		inspiration:()=>cy.xpath('//a[@class="menu__linkHref menu__linkHref--default"and@href="/inspiration"]'),
		wishListHome:()=>cy.xpath('//a[@class="headerElement__link headerElement__link--wishlist"and@href="/wunschliste"]'),
		shoppingCartHome:()=>cy.xpath('//a[@class="headerElement__link headerElement__link--cart headerElement__link--cartFilled"and@href="/warenkorb"],'),
		couches:()=>cy.xpath('//a[text()="Sofas"and@href="/sofas"]'),
		cornerSofas:()=>cy.xpath('//a[@class="sidebarNavigation__thirdLevelCategoryName"and@href="/schlafsofas"]'),
		product001:()=>cy.xpath('//div[@data-wish-list-entry-number="23403766"]'),
		product002:()=>cy.xpath('//div[@class="wishlistIcon wishlistIcon--pointer"and@data-wish-list-entry-number="20403530"]'),
		product003:()=>cy.xpath('//div[@class="wishlistIcon wishlistIcon--pointer"and@data-wish-list-entry-number="25405544"]'),

		wishListHeart:()=> cy.get('.wishlistIcon.wishlistIcon--pointer')
    }

	clickFurniture() {
		this.elements.furniture().click();
	}
	clickCouches() {
		this.elements.couches().click();
	}
	clickCornerSofas() {
		this.elements.cornerSofas().click();
	}
	clickProduct001() {
		this.elements.product001().click();
	}
	clickProduct002() {
		this.elements.product002().click();
	}
	clickProduct003() {
		this.elements.product003().click();
	}
	clickWishListHome() {
		this.elements.wishListHome().click();
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

module.exports = new homePage();