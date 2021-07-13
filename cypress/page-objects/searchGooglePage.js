import SearchGoogleResults from './searchGoogleResults'

class SearchGooglePage {
    interceptGoogle(){
        cy.intercept('/us/searchSuggest*')
            .as("searchCall")
        //cy.intercept('/us/searchSuggest?hl=en-US&search_suggest=google pixel buds&xhr=1&authuser=null&_reqid=2045635&rt=j')
    }

    open(){
        cy.visit(`${Cypress.env('googleUrl')}/collection/accessories_wall?productType=Headphones&hl=en-US`);
    }

    get searchIcon(){
        return cy.get('.header-search-icon');
    }

    get searchInput(){
        return cy.get('input[aria-label="Search Google Store"]');
    }

    performSearch(productToSearch){
        this.searchIcon.click();
        this.searchInput.type(`${productToSearch}{enter}`);
    }
}

export default new SearchGooglePage()