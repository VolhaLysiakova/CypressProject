import SearchResultsPage from './searchResultsPage'

class MainPage {
    open(){
        cy.visit(`${Cypress.env('shopUrl')}`);
    }

    get searchInput(){
        return cy.get('input[id="j-search"]');
    }

    performSearch(productToSearch){
        this.searchInput.type(`${productToSearch}{enter}`);
    }
}

export default new MainPage()