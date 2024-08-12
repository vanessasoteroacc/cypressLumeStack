

describe('Orange HRM Tests', () => {
    beforeEach (() =>{
        cy.login()
    } )

    it('User Info' , ()=>{
        cy.myInfo()
        
    })
})
   
  