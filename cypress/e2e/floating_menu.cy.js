it('Validate floating menu', () => {
  cy.visit('/floating_menu');
  cy.get('#page-footer').scrollIntoView();
  cy.contains('About').should('be.visible').click();
  cy.log("Verify current URL has endpoint '#about'");
  cy.hash().should('contains', '#about');
});
