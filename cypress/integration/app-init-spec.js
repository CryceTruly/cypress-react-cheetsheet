
describe('App Initialization',()=>{



it('loads data on page load',()=>{
    cy.seedDataAndVisit() 
    cy.get('.todo-list li')
    .should('have.length',4)
});

it('display-an error on display failure',()=>{
cy.server();
cy.route({method:'GET',url:'/api/todos',status:500,response:{}
})

cy.visit('/'); 

cy.get('.todo-list li').
should('not.exist')
cy.get('.error')
.should('be.visible')
})


})