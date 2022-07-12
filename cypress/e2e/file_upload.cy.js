// Add "test.txt" to your project root directory - exampleProject/text.txt

const filePath = 'test.txt';
beforeEach(() => {
  cy.visit('/upload');
});
it('Upload file', () => {
  cy.get('#file-upload')
    .selectFile(filePath)
    .get('#file-submit')
    .click()
    .get('#uploaded-files')
    .contains(filePath)
    .should('be.visible');
});
it('Drag and drop file', () => {
  cy.get('#drag-drop-upload')
    .selectFile(filePath, { action: 'drag-drop' })
    .contains(filePath)
    .should('be.visible');
});
