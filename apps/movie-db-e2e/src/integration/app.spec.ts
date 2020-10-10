import * as helper from '../support/app.po';


describe('movie-db', () => {
  beforeEach(() => cy.visit('/'));

  it('should display app heading', () => {
    cy.get('.app-heading').should('contain', 'Welcome to MovieDB')
  });

  it('should display latest movie heading', () => {
    cy.get('.latest-movie-header').should('contain', 'Latest Movies')
  })

  it('should display top 6 latest movies', () => {
    cy.get('.latest-movies').within( () => {
      cy.get('.card').should('have.length', 6)
    })
  })

  it('should search for "Spiderman"', () => {
    cy.get('.search-form').within(() => {
      cy.get('.search-form__input').type('Spiderman')
      
      cy.get('.search-form__button').click()
    })
    cy.get('.search-movie').within( () => {
      cy.get('.card').should('have.length', 6)
    })
  })
});
