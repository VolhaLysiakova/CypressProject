class SearchGoogleResults {
    getProductByDocId(googleId) {
        return cy.get(`a[href="/product/${googleId}"]`);
    }
    getProductByName(h2) {
        return cy.get(`h2:contains(${h2})`)
    }
}

export default new SearchGoogleResults()