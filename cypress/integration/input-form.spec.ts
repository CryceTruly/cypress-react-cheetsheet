describe('Form',()=>{
beforeEach(()=>{
    cy.seedDataAndVisit([]);
})


    it('focuses on page load',()=>{
        cy.focused().should('have.class','new-todo');
    });

    it('should acceptInput',()=>{
        const text='Hello';
        cy.get('[data-cy=input]')
        .type(text)
        .should('have.value',text)
    });


    context('Form Submission',()=>{
        it('adds a new todo on submit',()=>{
        const newText='buy eggs';
        cy.server();
        cy.route('POST','/api/todos',{
            name:'buy eggs',
            id:99,
            isCompleted:false
        });
        cy.get('[data-cy=input]')
                .type(newText)

                .type('{enter}')
                 .should('have.value','')
                 cy.get('[data-cy=listItem]')
                .should('have.length',1)
                .and('contain', newText)
                
                
        });



        it('should display an on failed submission',()=>{
            cy.server();
            cy.route({method:'POST',url:'/api/todos',response:{},status:500});

        cy.get('[data-cy=input]')
        .type('test')

        .type('{enter}')

        cy.get('.todo-list li')
        .should('not.exist')
        cy.get('.error').
        should('be.visible')


        


        })


            })


})