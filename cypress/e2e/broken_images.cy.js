it('Check broken and non broken images in the page', () => {
  cy.visit('/broken_images');
  cy.get('.example > img').each((img) => {
    cy.wrap(img)
      .invoke('attr', 'src')
      .then((imgSrc) => {
        if (imgSrc.includes('asdf') || imgSrc.includes('hjkl')) {
          cy.log(`Logic to validate broken image whose 'src' is: /${imgSrc}`);
          expect(img[0].naturalWidth).to.be.eql(0);
          expect(img[0].naturalHeight).to.be.eql(0);
          cy.request({
            url: imgSrc,
            failOnStatusCode: false,
          }).then((response) => {
            expect(response.status).to.eq(404);
          });
        } else {
          cy.log(
            `Logic to validate non broken image whose 'src' is: /${imgSrc}`,
          );
          expect(img[0].naturalWidth).to.be.greaterThan(0);
          expect(img[0].naturalHeight).to.be.greaterThan(0);
          cy.request(imgSrc).then((response) => {
            expect(response.status).to.eq(200);
          });
        }
      });
  });
});


