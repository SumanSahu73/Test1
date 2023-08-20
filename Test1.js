// <reference types="Cypress" />

 

 

// Framework ==> fixtures and copncept of this.data

describe('My First Test Framework', function(){

 
/*
    before(function(){

        // runs once before all tests in the block

        cy.fixture('examples').then(function(data){

            this.user=data;

        })

    })
*/
 

it('My Framework Test case', function(){

    

    cy.visit('https://rahulshettyacademy.com/angularpractice/');

    cy.get('input[name="name"]:nth-child(2)').type("Suman")

    cy.get('select').select("Female");
    cy.wait(2000)
    //cy.get('h4>input[class*="ng-touched"]').should('have.value',"Suman");

       

    })

})      