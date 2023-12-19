describe('LoginComponent.cy.ts', () => {
  it('has the correct title', () => {
    cy.visit('/login2')
    cy.title().should('eq', 'My Angular App');
  });
})
