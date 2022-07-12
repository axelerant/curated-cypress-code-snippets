it('Navigate to multiple tabs & verify', () => {
  cy.visit('/windows');
  cy.contains('Click Here')
    .invoke('removeAttr', 'target')
    .click()
    .url()
    .should('include', '/windows/new')
    .get('h3')
    .should('have.text', 'New Window');
  // Navigate back to the previous or next URL in the browser’s history.
  cy.go('back');
  cy.contains('Click Here').should('be.visible');
});
