class SearchGoogleResults{
    getProductByDocId(googleId){
        return cy.get(`a[href="/product/${googleId}"]`);
    }
    getProductByH2(h2){
        return cy.get(`h2:contains(${h2})`)
    }
}

export default new SearchGoogleResults()