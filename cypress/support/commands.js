

export const selectorsList ={
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton:"[type='submit']",
    logoutButton:"[href='/web/index.php/auth/logout']",
    myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
    genericFild:".oxd-input--active",
    genericPlaceHolder:"[placeholder='yyyy-dd-mm']",
    genericTab:"[tabindex='0']",
    submitButton:"[type='submit']",
}

Cypress.Commands.add('login', (
    
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),

) =>{

    const login = () => {
        cy.visit('/web/index.php/auth/login')
        cy.get(selectorsList.usernameField).type(user)
        cy.get(selectorsList.passwordField).type(password)
        cy.get(selectorsList.loginButton).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
    }
    login()
})

Cypress.Commands.add('logout', () =>{
    const logout = () => {

        cy.get('.oxd-userdropdown-tab').click()
        cy.get(selectorsList.logoutButton).click()
    }

    logout()
} )

Cypress.Commands.add('myInfo', () => {
    const myInfo = () => {

        cy.get(selectorsList.myInfoButton).click()
        cy.get("[name='firstName']").clear().type("VanessaTeste")
        cy.get("[name='middleName']").clear().type("Teste")
        cy.get("[name='lastName']").clear().type("Testando")
        cy.get(selectorsList.genericFild).eq(3).clear().type("Emp Id")
        cy.get(selectorsList.genericFild).eq(4).clear().type("Test Company")
        cy.get(selectorsList.genericFild).eq(5).clear().type("123456")
        cy.get(selectorsList.genericPlaceHolder).eq(0).clear().type("2023-09-09").click()
        cy.get(selectorsList.genericTab).eq(0).type("Brazilian")
        cy.get(selectorsList.genericTab).eq(1).type("Married")
        cy.get(selectorsList.genericPlaceHolder).eq(1).clear().type("1990-13-11").click()
        cy.get(".oxd-radio-input--active").eq(1).click()
        cy.get(selectorsList.submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')

        
    }
    myInfo()
    
})