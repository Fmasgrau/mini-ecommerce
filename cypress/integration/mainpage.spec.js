
context('Checkout', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Should render cards', () => {
        cy.get('.product__container').children('div').should('have.class', 'card')
    })

    it('Should display No data', () => {
        cy.intercept('https://amiiboapi.com/api/amiibo/', { forceNetworkError: true })
        cy.get('.product__container').children('div').contains('No data')
    })

    //TO DO more test in order to cover different situations
})