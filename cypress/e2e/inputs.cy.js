it('Validate input field', () => {
  cy.visit('/inputs');
  cy.log('Should not accept text')
    .get('input')
    .type('Hello!')
    .should('not.have.value', 'Hello!');
  cy.log('Should only accept numeric value')
    .get('input')
    .type(123)
    .should('have.value', 123);
});
