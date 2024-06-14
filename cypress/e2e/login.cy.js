

describe('Orange HRM Tests', () => {
  it('Login Success', () => {
    
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    
    cy.login(user, password)

  })
}) 