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
        cy.fixture('googleProduct').then(data =>{
            cy.wrap(data).as('productData')
        })
    })

   it('Google Search', () => {
       cy.get('@productData').then((productData) =>{
            SearchGooglePage.interceptGoogle()

            cy.log("GIVEN user at main page")
            SearchGooglePage.open()

            cy.log("WHEN User performs search by name")
            SearchGooglePage.performSearch(productData.name)
            cy.wait('@searchCall');
            cy.wait(Cypress.env("waitTimeout"))

            SearchGoogleResults.getProductByDocId(productData.url)
            SearchGoogleResults.getProductByH2(productData.h)
       })
   })
})


