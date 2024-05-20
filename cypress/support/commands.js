

Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),

) =>{

    const login = () => {
        cy.visit('/web/index.php/auth/login')
        cy.get("[name='username']").type(user)
        cy.get("[name='password']").type(password)
        cy.get("[type='submit']").click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
    }
    login()
})

Cypress.Commands.add('logout', () =>{
    const logout = () => {

        cy.get('.oxd-userdropdown-tab').click()
        cy.get("[href='/web/index.php/auth/logout']").click()
    }

    logout()
} )