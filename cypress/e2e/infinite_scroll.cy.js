const givenArraySize = 8;
const indexArray = [...Array(givenArraySize).keys()];
it('Infinite scroll', () => {
  cy.log('Spying network request & apply aliases')
    .intercept('/infinite_scroll/**')
    .as('paragraph');
  cy.visit('/infinite_scroll');
  cy.wrap(indexArray).each((index) => {
    cy.log(`Scroll to bottom with ${index + 1} time`);
    cy.log('Wait for the network request').wait('@paragraph');
    cy.window().scrollTo('bottom');
  });
  cy.get('.jscroll-added').its('length').should('eq', givenArraySize);
});
