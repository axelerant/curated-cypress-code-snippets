it('Validate login page with UI approach', () => {
  cy.visit('/login');
  cy.get('#username').type('tomsmith');
  cy.get('#password')
    .type('SuperSecretPassword!')
    .get('.fa')
    .click()
    .get('h2')
    .should('have.text', ' Secure Area');
});
it('Validate login page with API approach', () => {
  cy.visit('/login');
  cy.request({
    method: 'POST',
    url: '/authenticate', // BaseUrl is prepend to URL
    form: true, // Indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
    body: {
      username: 'tomsmith',
      password: 'SuperSecretPassword!',
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
  cy.visit('/secure');
  cy.contains('Secure Area').should('be.visible');
  cy.contains('.button', 'Logout').should('be.visible');
});
