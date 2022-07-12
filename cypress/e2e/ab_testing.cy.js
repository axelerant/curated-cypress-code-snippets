it('Validate A/B testing with cookie', () => {
  cy.visit('/abtest');
  cy.log('Asserting the header test before adding cookie');
  cy.contains('A/B Test').should('be.visible');
  cy.log('Set Cookie').setCookie('optimizelyOptOut', 'true');
  cy.log('Refresh the page').reload();
  cy.log('Asserting the header test after adding cookie');
  cy.contains('No A/B Test').should('be.visible');
});
it('Validate A/B testing with opt out URL', () => {
  cy.visit('/abtest?optimizely_opt_out=true');
  cy.log('Handle alert');
  cy.on('window:alert', (alertText) => {
    expect(alertText).eq(
      'You have successfully opted out of Optimizely for this domain.',
    );
  });
  cy.contains('No A/B Test').should('be.visible');
});
