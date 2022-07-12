// Added the following logic based on this good reference: https://github.com/cypress-io/cypress/issues/14857#issuecomment-785717474

const path = require('path');
const downloadsFolder = Cypress.config('downloadsFolder');
it('Validate JQuery UI menus', () => {
  cy.visit('/jqueryui/menu');
  // Added the following logic based on this issue: https://github.com/cypress-io/cypress/issues/14857#issuecomment-785717474
  cy.log(`Added event listener 'click' to listen & trigger the page load event`)
    .window()
    .document()
    .then((doc) => {
      doc.addEventListener('click', () => {
        setTimeout(() => {
          doc.location.reload();
        }, 3000);
      });
    });
  cy.contains('Enabled').trigger('mouseover');
  cy.contains('Downloads')
    .trigger('mouseover')
    .next('ul.ui-menu')
    .then(($thirdSubMenu) => {
      cy.wrap($thirdSubMenu).invoke('show');
      cy.wrap($thirdSubMenu).contains('PDF').click();
    });
  cy.log('Verify downloaded PDF file existance')
    .readFile(path.join(downloadsFolder, 'menu.pdf'))
    .should('exist');
});
