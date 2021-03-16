// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('math operations should update the display with the result of the operation', () => {
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '12')
  });

  it('should update the display with the result of the operation', () => {
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '18')
  }); 

  it('should have a negative number as a total', () => {
    cy.get('#number9').click();
    cy.get('#operator_subtract').click();
    cy.get('#number10').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-1')
  }); 

  it(' should have a decimal number as a total', () => {
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1.8')
  });

  it('should be a very large number', () => {
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator_multiply').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator_multiply').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2901096')
  }); 

});