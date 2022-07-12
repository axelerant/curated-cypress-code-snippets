beforeEach(() => {
  cy.visit('/dynamic_loading');
});
it('Validate Dynamic Loading - assert the hidden element', () => {
  cy.get('[href="/dynamic_loading/1"]')
    .contains('Example 1')
    .click()
    .get('h4')
    .contains('Example 1: Element on page that is hidden')
    .should('be.visible');
  cy.get('#finish').invoke('show').should('be.visible');
  cy.contains('Start')
    .click()
    .get('#loading')
    .contains('Loading', { timeout: 20000 })
    .should('not.be.visible')
    .get('#finish')
    .contains('Hello World!')
    .should('be.visible');
});
it('Validate Dynamic Loading - wait till element rendered', () => {
  cy.get('[href="/dynamic_loading/2"]')
    .contains('Example 2')
    .click()
    .get('h4')
    .contains('Example 2: Element rendered after the fact')
    .should('be.visible');
  cy.contains('Start')
    .click()
    .get('#loading')
    .contains('Loading', { timeout: 20000 })
    .should('not.be.visible')
    .get('#finish')
    .contains('Hello World!')
    .should('be.visible');
});
