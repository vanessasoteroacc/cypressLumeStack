Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Orange HRM Tests', () => {
    beforeEach (() =>{
        cy.login()
    } )

    it('Logout sucessfuly' , ()=>{
        cy.logout()
        cy.url().should('equal', `${Cypress.config('baseUrl')}/web/index.php/auth/login`)
    })
})
   