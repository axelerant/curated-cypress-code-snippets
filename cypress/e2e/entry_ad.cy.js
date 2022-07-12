it('Close entry ad', () => {
  cy.visit('/entry_ad');
  cy.log('Close the entry ad');
  cy.contains('Close').click().should('not.be.visible');
});
