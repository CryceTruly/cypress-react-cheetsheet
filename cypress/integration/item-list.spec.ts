describe('ListItems',()=>{
    beforeEach(()=>{
        cy.seedDataAndVisit();
    });

    it('properly displays completed items',()=>{
        cy.get('.todo-list li')
        .filter('.completed')
        .should('have.length',1)
        .and('contain','eggs')
        .find('.toggle')
        .should('be.checked')
    });


    it('should count the number of remaining items correctly',()=>{
        cy.get('.todo-count')
        .should('contain',3)
    })



    it.only('should remove a todo',()=>{

        cy.route({
            url:"api/todos/1",
            method:"DELETE",
            status:200,
            response:{}
        })

        cy.get('.todo-list li')
        .as('list')

        cy.get('@list')
        .first()
        .find('.destroy')
        .invoke('show')
        .click()


        cy.get('@list')
        .should('have.length',3)
        .should('not.contain','trash')
       

      

    });
})