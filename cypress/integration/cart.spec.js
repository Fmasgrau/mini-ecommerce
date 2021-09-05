
context('Cart', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Should have 0 items', () => {
        cy.get(':nth-child(2) > .button__icon').click()
        cy.get('.modal_body__no_items').contains('No items to show')
    })
    it('Should have 1 item', () => {
        cy.get(':nth-child(1) > .card__cart > .button__add_product').click()
        cy.get(':nth-child(2) > .button__icon').click()
        cy.get('.modal_body__items_container').children('div').should('have.class', 'modal_body__body--description')
    })

    //TO DO more test in order to cover different situations

})