it('Validate context menu', () => {
  cy.visit('/context_menu');
  cy.log('Do right click and handling alert').get('#hot-spot').rightclick();
  cy.on('window:alert', (alertText) => {
    expect(alertText).eq('You selected a context menu');
  });
});
