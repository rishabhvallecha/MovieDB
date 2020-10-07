describe('ui-header: PageTitle component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pagetitle--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ui-header!');
  });
});
