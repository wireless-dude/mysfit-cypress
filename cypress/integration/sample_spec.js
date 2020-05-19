/// <reference types="Cypress"/>

describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')
    })

    it.only('Visits the Querying section of Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
        .contains('Querying').scrollIntoView()
        .get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click()
        
    })
})