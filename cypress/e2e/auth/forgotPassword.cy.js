import loginPage from '../../support/pages/loginPage'
import forgotPage from '../../support/pages/forgotPasswordPage'

describe('Forgot Password Test', () => {

    beforeEach(() => {
        loginPage.visit()
        forgotPage.clickForgotPassword()
    })

    it('TC01 - Reset password valid', () => {
        cy.intercept('POST', '**/auth/requestPasswordResetCode').as('reset')

        forgotPage.inputUsername('Admin')
        forgotPage.clickReset()

        cy.wait('@reset')
        forgotPage.verifyResetSuccess()
    })

    it('TC02 - Username kosong', () => {
        forgotPage.clickReset()

        cy.get('.oxd-input-field-error').should('exist')
    })
})