it('Validate hovers', () => {
  cy.visit('/hovers');
  cy.log('Mouse hover');
  cy.get('.figcaption').first().invoke('show');
  cy.get('.figcaption')
    .first()
    .contains('h5', 'name: user1')
    .should('be.visible');
  cy.contains('a', 'View profile').should('be.visible');
});
