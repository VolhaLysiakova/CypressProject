const userUrl = Cypress.env('user')

export const createUser = (body, user) => {
    return cy.request({
        method: 'POST',
        url: `${userUrl}/api/users`,
        body: body
    })
}
