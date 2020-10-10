describe('ui-header: SearchMovieHeader component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=searchmovieheader--primary'));
    
    it('should render the component', () => {
      cy.get('.search-movie-header').should('contain', 'Search for a Movie');
    });
});
