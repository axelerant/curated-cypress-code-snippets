const users = [
  {
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
  },
  {
    username: 'tomsmithfail',
    password: 'SuperSecretPasswordFail',
  },
];
it('Validate data driven login page with two users', () => {
  cy.visit('/login');
  cy.log('Checking for positive & negative user');
  users.forEach((user) => {
    cy.get('#username').type(user.username);
    cy.get('#password')
      .type(user.password)
      .get('.fa')
      .click()
      .should('be.visible');
    if (
      user.username == 'tomsmith' &&
      user.password == 'SuperSecretPassword!'
    ) {
      cy.get('h2').should('have.text', ' Secure Area');
      cy.contains('Logout').click();
    } else {
      cy.get('#flash').should('contain', 'Your username is invalid!');
    }
  });
});
