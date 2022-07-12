it('Validate forgot password with API approach', () => {
  cy.request({
    method: 'POST',
    url: '/forgot_password', // BaseUrl is prepend to URL
    form: true, // Indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
    body: {
      email: 'test@mail.com',
    },
  }).then((response) => {
    expect(response.status).to.eq(200); // Expect to fail as currently application throws 500 error
  });
});

it('Validate forgot password with UI approach', () => {
  cy.visit('/forgot_password');
  cy.log('Clear textbox and type')
    .get('#email')
    .type('{selectall}{backspace}test@mail.com');
  cy.contains('Retrieve password').click();
  cy.contains('#content', `Your e-mail's been sent!`, {
    timeout: 10000,
  }).should('be.visible'); // Expect to fail as currently application throws 500 error
});
