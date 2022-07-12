it('Validate basic auth', () => {
  cy.log(
    'Handle basic authentication with the credentials in the URL like this https://username:password@www.example.com/',
  );
  cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
  cy.contains('Congratulations! You must have the proper credentials.').should(
    'be.visible',
  );
});
