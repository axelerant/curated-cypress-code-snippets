beforeEach(() => {
  cy.visit('/javascript_alerts');
});
it('Validate alert box', () => {
  cy.contains('Click for JS Alert').click().should('be.visible');
  cy.on('window:alert', (alertText) => {
    expect(alertText).eq('I am a JS Alert');
  });
  cy.get('#result')
    .contains('You successfully clicked an alert')
    .should('be.visible');
});
it('Validate confirm box', () => {
  cy.contains('Click for JS Confirm').click().should('be.visible');
  cy.on('window:confirm', (alertText) => {
    expect(alertText).eq('I am a JS Confirm');
    return true;
    // By default, Cypress will automatically hit "Ok" for alert confirmation and no need to explicitly return true in this event callback
    // If we wanted to instead test a use case of someone clicking "Cancel", then we need to return false in this event callback
  });
  cy.get('#result').contains('You clicked: Ok').should('be.visible');
});
it('Validate prompt box', () => {
  cy.window().then(($win) => {
    cy.stub($win, 'prompt').returns('Hello Hi!!');
    cy.contains('Click for JS Prompt').click().should('be.visible');
  });
  cy.get('#result').contains('You entered: Hello Hi!!').should('be.visible');
});
