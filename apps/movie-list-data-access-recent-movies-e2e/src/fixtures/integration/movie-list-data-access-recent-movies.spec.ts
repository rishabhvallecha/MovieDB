describe('Latest Movies Component', () => {

    beforeEach(() => cy.visit('/iframe.html?id=movielistdataaccessrecentmovies--primary'));

    it('should render the component', () => {
        cy.get('.card').should('have.length', 6)
    })

})