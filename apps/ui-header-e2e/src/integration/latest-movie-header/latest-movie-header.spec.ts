describe('ui-header: LatestMovieHeader component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=latestmovieheader--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ui-header!');
  });
});
