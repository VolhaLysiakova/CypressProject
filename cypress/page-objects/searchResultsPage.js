class SearchResultsPage {

    getProductByDocId(docId) {
        return cy.get(`a[href="https://www.21vek.by/${docId}"]`);
    }
}

export default new SearchResultsPage()