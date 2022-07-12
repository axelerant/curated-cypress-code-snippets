it('Select and verify dropdowns', () => {
  cy.visit('/dropdown');
  cy.log('Select by value').get('select').select('1').should('have.value', '1');
  cy.log('Check selected option')
    .get('select#dropdown option:selected')
    .should('have.value', '1')
    .should('have.text', 'Option 1');
  cy.log('Select by index').get('select').select(2).should('have.value', '2');
  cy.log('Check selected option')
    .get('select#dropdown option:selected')
    .should('have.value', '2')
    .should('have.text', 'Option 2');
  cy.log('Select by text')
    .get('select')
    .select('Option 1')
    .should('have.value', '1');
  cy.log('Check selected option')
    .get('select#dropdown option:selected')
    .should('have.value', '1')
    .should('have.text', 'Option 1');
});
