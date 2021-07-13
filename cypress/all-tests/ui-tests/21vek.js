import Chance from 'chance'
import SearchResultsPage from "../../page-objects/searchResultsPage"
import MainPage from "../../page-objects/mainPage"

describe('Tests for 21vek', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Positive: Create user', () => {

        cy.fixture('product').then(product =>{

            cy.log("GIVEN user at main page")
            MainPage.open()

            cy.log("WHEN User performs search by name")
            MainPage.performSearch(product.name)

            SearchResultsPage.getProductByDocId(product.url).should(`exist`)
        })
    })
})