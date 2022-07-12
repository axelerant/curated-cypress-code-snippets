// You may refer this https://github.com/kamranayub/cypress-browser-permissions which replaced the deprecated method
// example: force Mumbai geolocation

const latitude = 19.075984;
const longitude = 72.877656;
it('Validate GeoLocation', () => {
  cy.log('Customize Geo-Location in Chrome Browser');
  cy.visit('/geolocation');
  cy.log('Mocking Geolocation');
  cy.window().then(($window) => {
    cy.stub($window.navigator.geolocation, 'getCurrentPosition').callsFake(
      (callback) => {
        return callback({ coords: { latitude, longitude } });
      },
    );
  });
  cy.contains('Where am I?').click().should('be.visible');
  cy.contains(latitude).should('be.visible');
  cy.contains(longitude).should('be.visible');
});
