describe('ui-header: PageTitle component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pagetitle--primary'));

  it('should render the component', () => {
    cy.get('.app-heading').should('contain', 'Welcome to MovieDB');
  });
});
