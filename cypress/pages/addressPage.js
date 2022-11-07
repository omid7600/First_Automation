require('cypress-xpath');


class addressPage {
    elements = {
        addressSalutation:()=>cy.xpath('//select[@id="salutation"]');
        addressFirstName:()=>cy.xpath('//input[@id="firstname"]');
        addressSurname:()=>cy.xpath('//input[@id="lastname"]');
        addressAreaCode:()=>cy.xpath('//input[@id="phoneArea"]');
        addressPhone:()=>cy.xpath('//input[@id="phone"]');
        addressStreet:()=>cy.xpath('//input[@id="streetName"]');
        addressHouseNumber:()=>cy.xpath('//input[@id="streetNumber"]');
        addressSupplement:()=>cy.xpath('//input[@id="addressExtra"]');
        addressFloor:()=>cy.xpath('//input[@id="floor"]');
        BoxElevator:()=>cy.xpath('//span[@id="paymentAddressElevatorExists"]');
        addressZip:()=>cy.xpath('//input[@id="zipCode"]');
        addressCity:()=>cy.xpath('//input[@id="town"]');
        addressButtonSubmit:()=>cy.xpath('//button[@id="address-submit"]');
    }


    setaddressSalutation(gender) {
        this.elements.addressSalutation().select(gender);
    }
    typeaddressFirstName(firstname) {
        this.elements.addressFirstName().type(firstname);
    }
    typeaddressSurname(lastname) {
        this.elements.addressSurname().type(lastname);
    }
    typeaddressAreaCode(areacode) {
        this.elements.addressAreaCode().type(areacode);
    }
    typeaddressPhone(phone) {
        this.elements.addressPhone().type(phone);
    }
    typeaddressStreet(street) {
        this.elements.addressStreet().type(street);
    }
    typeaddressHouseNumber(housenumber) {
        this.elements.addressHouseNumber().type(housenumber);
    }
    typeaddressSupplement(supplement) {
        this.elements.addressSupplement().type(supplement);
    }
    typeaddressFloor(floor) {
        this.elements.addressFloor().type(floor);
    }
    clickBoxElevator() {
        this.elements.clickBoxElevator().click();
    }
    typwaddressZip(zip) {
        this.elements.addressZip().type(zip);
    }
    typeaddressCity(city) {
        this.elements.addressCity().type(city);
    }
    clickaddressButtonSubmit() {
        this.elements.clickaddressButtonSubmit().click();
    }






}