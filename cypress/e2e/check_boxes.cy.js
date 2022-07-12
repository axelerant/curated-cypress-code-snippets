it('Validate check boxes', () => {
  cy.visit('/checkboxes');
  cy.log('Verify selected & unselected checkboxes')
    .get('#checkboxes > input:first-of-type')
    .should('not.be.checked')
    .get('#checkboxes > input:nth-of-type(2)')
    .should('be.checked');
  cy.log('Select check box 1');
  cy.get('#checkboxes > input:first-of-type').click().should('be.checked');
  cy.log('Un-select all checkbox')
    .get('input[type="checkbox"]')
    .uncheck()
    .should('not.be.checked');
});
