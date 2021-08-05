import Chance from 'chance'
import {createUser} from "../../../cypress/service/constFunctions";


describe('Tests for reqres', () => {

    it('Positive: Create user', () => {
        cy.fixture('user').then(user => {
            createUser(user)
        })
    })

    let testingData = [
        {
            description: "Max values",
            requestData: {
                name: Chance().string({length: 100}),
                job: Chance().string({length: 100})
            }
        },
        {
            description: "Min values",
            requestData: {
                name: Chance().string({length: 1}),
                job: Chance().string({length: 1})
            }
        }
    ]

    testingData.forEach(({description, requestData}) => {
        it(`Positive: Create user ${description}`, () => {
            createUser(requestData)
        })
    })

    it('Negative: POST request - login unsuccessful', () => {
        cy.request({
            method: 'POST', url: '/api/login', failOnStatusCode: false, body:
                {
                    "email": "peter@klaven"
                }
        }).then(response => {
            expect(response.status).to.eq(400)
        })

    })
})