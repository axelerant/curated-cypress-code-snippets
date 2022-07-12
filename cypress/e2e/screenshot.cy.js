it('Take screenshort', () => {
  cy.visit('/');
  cy.log('Takes full page screenshot');
  cy.screenshot();
  cy.log(
    'By default, Cypress automatically takes a screenshot when there is a failure when running cypress run',
  );
});
