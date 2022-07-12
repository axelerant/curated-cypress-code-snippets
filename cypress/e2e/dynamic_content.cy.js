// Reference: https://stackoverflow.com/questions/61196857/storing-an-array-of-elements-using-cypress

it('Validate dynamic content', () => {
  let dynamicImgSrcAttrFirstVisit = [];
  let dynamicTrimContentFirstVisit = [];
  cy.visit('/dynamic_content');
  cy.log(`Store all the dynamic images' src attributes at first visit`);
  cy.get('.large-2 img').then(($imgFirstVisit) => {
    dynamicImgSrcAttrFirstVisit = Array.from($imgFirstVisit, (img) => img.src);
  });
  cy.log(`Store all the dynamic contents at first visit`);
  cy.get('.large-2 + .large-10').then(($contentFirstVisit) => {
    dynamicTrimContentFirstVisit = Array.from($contentFirstVisit, (element) =>
      element.innerText.trim(),
    );
  });
  cy.log('Refresh the page');
  cy.reload();
  cy.log(
    `Store all the dynamic images' src attributes at second visit and compare with first`,
  );
  cy.get('.large-2 img').then(($imgSecondVisit) => {
    const dynamicImgSrcAttrSecondVisit = Array.from(
      $imgSecondVisit,
      (img) => img.src,
    );
    expect(dynamicImgSrcAttrSecondVisit).not.to.deep.eq(
      dynamicImgSrcAttrFirstVisit,
    );
  });
  cy.log(
    `Store all the dynamic contents at second visit and compare with first`,
  );
  cy.get('.large-2 + .large-10').then(($contentSecondVisit) => {
    const dynamicTrimContentSecondVisit = Array.from(
      $contentSecondVisit,
      (element) => element.innerText.trim(),
    );
    expect(dynamicTrimContentFirstVisit).not.to.deep.eq(
      dynamicTrimContentSecondVisit,
    );
  });
});
