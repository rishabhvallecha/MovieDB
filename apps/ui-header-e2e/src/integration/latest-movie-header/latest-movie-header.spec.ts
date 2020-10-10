describe('ui-header: Latest Movie Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=latestmovieheader--primary'));

  it('should render the component', () => {
    cy.get('.latest-movie-header').should('contain', 'Latest Movies');
  });
});
