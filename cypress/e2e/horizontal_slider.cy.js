beforeEach(() => {
  cy.visit('/horizontal_slider');
});
it('Validate horizontal silder - click on slider', () => {
  cy.get('input')
    .invoke('val', '2')
    .trigger('change')
    .get('#range')
    .should('have.text', '2');
});
it('Validate horizontal silder - key strokes', () => {
  cy.get('input')
    .focus()
    .type(Cypress._.repeat('{rightarrow}-{enter}', 5)) // Pressing right arrow key for 5 times
    .trigger('change')
    .get('#range')
    .should('have.text', '2.5');
});
