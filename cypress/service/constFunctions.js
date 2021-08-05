const userUrl = Cypress.env('user')

export const createUser = (body, user) => {
    return cy.request({
        method: 'POST',
        url: `${userUrl}/api/users`,
        body: body
    }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('name', response.body.name)
        expect(response.body).to.have.property('job', response.body.job)
    })
}
