/// <reference types="cypress" />

import LunchPage from '../../../page_objects/LunchPage.js';

before("visits page", () => {
    cy.visit("https://lunch.devbstaging.com/login-password");
});

let lunch_page = new LunchPage();

before("logs in", () => {
    lunch_page.getEmailInputField().type("admin@blue.vln");
    lunch_page.getPasswordInputField().type("Jeans000");
    lunch_page.getLoginButton().click();
});

it("checks if the sum of ordered food is correct", () =>{
    lunch_page.getWednesdayMenuButton().click();

    let first_price = 0;
    lunch_page.getFirstDishPrice().then(($span, $first_price) => {
        first_price = parseFloat($span.text());
    });

    let second_price = 0;
    lunch_page.getSecondDishPrice().then(($span, $second_price) => {
        second_price = parseFloat($span.text());
    });

    lunch_page.getFirstDish().click();
    lunch_page.getSecondDish().click();

    lunch_page.getOrderPrice().then(($span, $first_price, $second_price) => {
        let sum = parseFloat($span.text());
        expect(sum).to.equal(first_price + second_price);
    });
    
});

