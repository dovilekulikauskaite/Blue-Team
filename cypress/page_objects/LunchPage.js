class LunchPage{

    getEmailInputField(){
        return cy.get(':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot > input');
    }
    getPasswordInputField(){
        return cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot > input');
    }
    getLoginButton(){
        return cy.get('.v-btn');
    }
    getWednesdayMenuButton(){
        return cy.get(':nth-child(3) > .v-list__group__header > :nth-child(1) > .v-list__tile');
    }
    getFirstDish(){
        return cy.get(':nth-child(2) > .layout > .dish-card > :nth-child(1)');
    }
    getSecondDish(){
        return cy.get(':nth-child(6) > .layout > .dish-card > :nth-child(1)');
    }
    getFirstDishPrice(){
        return cy.get(':nth-child(2) > .layout > .dish-card > :nth-child(1) > .mx-1 > .grey--text');
    }
    getSecondDishPrice(){
        return cy.get(':nth-child(6) > .layout > .dish-card > :nth-child(1) > .mx-1 > .grey--text');
    }
    getOrderPrice(){
        return cy.get('.orders-list-button > .v-btn__content > span');
    }
    getPlaceOrderButton(){
        return cy.get('.orders-list-button');
    }
}

export default LunchPage;