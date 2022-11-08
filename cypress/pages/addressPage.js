require('cypress-xpath');


class addressPage {
    elements = {
        salutation:()=>cy.xpath('//select[@id="salutation"]'),
        firstNameAddress:()=>cy.xpath('//input[@id="firstname"]'),
        surnameAddress:()=>cy.xpath('//input[@id="lastname"]'),
        areaCode:()=>cy.xpath('//input[@id="phoneArea"]'),
        phone:()=>cy.xpath('//input[@id="phone"]'),
        street:()=>cy.xpath('//input[@id="streetName"]'),
        houseNumber:()=>cy.xpath('//input[@id="streetNumber"]'),
        supplement:()=>cy.xpath('//input[@id="addressExtra"]'),
        Floor:()=>cy.xpath('//input[@id="floor"]'),
        boxElevator:()=>cy.xpath('//span[@id="paymentAddressElevatorExists"]'),
        Zip:()=>cy.xpath('//input[@id="zipCode"]'),
        city:()=>cy.xpath('//input[@id="town"]'),
        addressButtonSubmit:()=>cy.xpath('//button[@id="address-submit"]')
    }


    setSalutation(gender) {
        this.elements.salutation().select(gender)
    }
    typeFirstname(firstname) {
        this.elements.firstNameAddress().type(firstname);
    }
    typeSurnameAddress(lastname) {
        this.elements.surnameAddress().type(lastname);
    }
    typeAreaCode(areacode) {
        this.elements.areaCode().type(areacode);
    }
    typePhone(phone) {
        this.elements.phone().type(phone);
    }
    typeStreet(street) {
        this.elements.street().type(street);
    }
    typeHouseNumber(housenumber) {
        this.elements.houseNumber().type(housenumber);
    }
    typeSupplement(supplement) {
        this.elements.supplement().type(supplement);
    }
    typeFloor(floor) {
        this.elements.Floor().type(floor);
    }
    clickBoxElevator() {
        this.elements.boxElevator().click();
    }
    typeZip(zip) {
        this.elements.Zip().type(zip);
    }
    typeCity(city) {
        this.elements.city().type(city);
    }
    clickAddressButtonSubmit() {
        this.elements.addressButtonSubmit().click();
    }






}