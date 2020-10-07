describe('ui-header: SearchMovieHeader component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=searchmovieheader--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-header!');
    });
});
