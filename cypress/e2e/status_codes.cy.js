const status_codes = [200, 301, 404, 500];
it('Validate all status codes', () => {
  cy.visit('/status_codes');
  status_codes.forEach((status_code) => {
    // To not to fail the test, on response codes other than 2xx and 3xx then pass failOnStatusCode: false
    cy.request({
      url: `/status_codes/${status_code}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(status_code);
      expect(response.body).to.include(`a ${status_code} status code`);
    });
  });
});
