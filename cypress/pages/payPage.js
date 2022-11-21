require('cypress-xpath');

class payPage {

    elements = {
        //selectorPayment:()=>cy.get('div[class="paymentForm__radioSelect"][data-payment=directEBanking]').invoke('attr', 'href'),
        instantlyRadioButton: () => cy.get('div.paymentForm.paymentForm--payPal > div > div > div.paymentForm__radioSelect'),
        //-- //span[@class="radioButton radioButton--checked"]
        // .paymentForm.paymentForm--directEBanking > .accordion__content > .paymentForm__paymentContent > .paymentForm__button > .leftRightButtonBar > .leftRightButtonBar__leftButton #postPaymentFormHeader
        postPaymentSubmit: () => cy.xpath('//*[contains(@type,"submit")]'),
    }
    clickInstantlyRadioButton() {
        this.elements.instantlyRadioButton().click();
    }

    clickPostPaymentSubmit() {
        this.elements.postPaymentSubmit().eq(0).click();
    }
}
module.exports = new payPage();
