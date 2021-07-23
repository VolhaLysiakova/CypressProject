import Chance from 'chance'
import SearchGoogleResults from "../../page-objects/searchGoogleResults"
import SearchGooglePage from "../../page-objects/searchGooglePage"

describe('Tests for google', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        //returning false here prevents Cypress from
        //failing the test
        return false
    })

    before(() => {
        cy.fixture('googleProduct').then(data => {
            cy.wrap(data).as('productData')
        })

        //function interceptGoogle() {
        //   cy.intercept('/us/searchSuggest*')
        //      .as("searchCall")
        //}

        //interceptGoogle()
    })

    it('Google Search', () => {
        cy.get('@productData').then((productData) => {

            cy.log("GIVEN user at main page")
            SearchGooglePage.open()

            cy.log("WHEN User performs search by name")
            SearchGooglePage.performSearch(productData.name)

            cy.log("THEN Check that the product is displayed on the page")
            SearchGoogleResults.getProductByDocId(productData.url)
            SearchGoogleResults.getProductByName(productData.h)
        })
    })
})


