// Reference to the yield file content and verify it: https://docs.cypress.io/api/commands/readfile#Existence

const path = require('path');
const downloadsFolder = Cypress.config('downloadsFolder');
it('Verify file download test for dynamic file', () => {
  cy.visit('/download');
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
  cy.log('Create downloads folder').exec('mkdir cypress/downloads', {
    log: true,
    failOnNonZeroExit: false, // Not to fail if the command exits with a non-zero code
  });
  cy.log(
    'Added this defensive code to avoid test failure when executing the tests in interactive mode',
  ).exec('rm cypress/downloads/*', {
    log: true,
    failOnNonZeroExit: false,
  });
  cy.log(
    `Verify the file presence based on the count logic in the 'downloads' directory by comparing before file download vs after file download`,
  )
    .task('dynamicFiledownload', 'cypress/downloads')
    .then((before) => {
      cy.contains('.txt').click();
      cy.task('dynamicFiledownload', 'cypress/downloads').then((after) => {
        expect(after.length).to.be.eq(before.length + 1);
        const downloadedFileName = after.filter(
          (file) => !before.includes(file),
        )[0];
        expect(downloadedFileName).includes('.txt');
      });
    });
});
