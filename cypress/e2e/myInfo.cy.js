

describe('Orange HRM Tests', () => {
    beforeEach (() =>{
        cy.login()
    } )

    it.only('User Info' , ()=>{
        cy.myInfo()
        
    })
})
   
  