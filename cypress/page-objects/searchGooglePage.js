class SearchGooglePage {

    open() {
        cy.visit(`${Cypress.env('googleUrl')}/collection/accessories_wall`);
    }

    get searchIcon() {
        return cy.get('.header-search-icon');
    }

    get searchInput() {
        return cy.get('input[aria-label="Search Google Store"]');
    }

    performSearch(productToSearch) {
        this.searchIcon.click();
        this.searchInput.type(`${productToSearch}{enter}`);
        cy.wait('@searchCall');
    }
}

export default new SearchGooglePage()