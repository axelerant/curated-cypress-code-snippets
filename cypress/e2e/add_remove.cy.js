it('Validate add/remove elements', () => {
  cy.visit('/add_remove_elements/');
  cy.log("Click 'Add Element button' and check it's visibility after click");
  cy.contains('Add Element').click().should('be.visible');
  cy.log(
    "Click 'Add Element button' using mouse action and check it's visibility after click",
  );
  cy.contains('Add Element').trigger('mouseover').click().should('be.visible');
  cy.log(
    "Click 'Add Element button' using keyboard action and check it's visibility",
  );
  cy.contains('Add Element').type('{enter}');
  cy.log("Click 'Delete button' and check it's length as expected");
  cy.get("button:contains('Delete')")
    .should('be.visible')
    .its('length')
    .should('eq', 3);
  cy.log('Click all delete button present');
  cy.get("button:contains('Delete')")
    .click({ multiple: true })
    .should('not.exist');
});
