
context('Cart', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Should complete the checkout', () => {
        cy.get(':nth-child(1) > .card__cart > .button__add_product').click()
        cy.get(':nth-child(2) > .button__icon').click()
        cy.get('.modal_body__items_container').children('div').should('have.class', 'modal_body__body--description')
        cy.get('.modal_body__checkout > button').click()
        cy.get('#card_number').type('4512123412341234')
        cy.get('#card_holder').type('Facundo')
        cy.get('#expire_date').type('09/21')
        cy.get('#cvc').type('333')
        cy.get('.btn').click()
        cy.get('#swal2-title').contains('Transaction completed')
    })

    //TO DO more test in order to cover different situations

})