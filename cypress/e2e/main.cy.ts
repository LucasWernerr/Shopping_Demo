describe('Main Component', () => {
  it('login_success', () => {
    cy.visit('/login');
    cy.contains('Login')
    cy.get('#email').type('john@gmail.com')
    cy.get('#password').type('m38rmF$')
    cy.get('#loginUser').click()
    cy.contains('Produktkategorie')
    cy.contains('Warenkorb')

  })

  it('login_fail', () => {
    cy.visit('/login');
    cy.contains('Login')
    cy.get('#email').type('john@gmail.com')
    cy.get('#password').type('wrongPassword')
    cy.get('#loginUser').click()
    cy.contains('Login')

  })

  it('main_without_login', () => {
    cy.visit('/main');
    cy.url().should('include', '/login')
  })
})
