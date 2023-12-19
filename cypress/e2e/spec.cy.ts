describe('Login Component', () => {
  it('login_card', () => {
    cy.visit('/login');
    cy.contains('Login')
    cy.contains('E-Mail')
    cy.contains('Passwort')

  })
})

