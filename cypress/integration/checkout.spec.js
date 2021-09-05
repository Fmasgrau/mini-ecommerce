
context('Checkout', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it.only('Cards must be rendered', () => {
        cy.get('.product__container').children('div').should('have.class', 'card')
    })

    it('Should render nothing', () => {
        cy.intercept('https://amiiboapi.com/api/amiibo/', { forceNetworkError: true })
        cy.get('.product__container').children('div').contains('No data')
    })
})