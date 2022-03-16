// type definitions for Cypress object "cy"
/// <reference types="cypress" />
 
describe('My First Cypress Test', function() {
    it('Visits the localhost website', function() {
    //Visit the Demo QA Website
    cy.visit("http://localhost:4567/");
    cy.get('.btn').click() // Click on button
    cy.location('pathname').should('eq', '/hi')    
  })
  })
