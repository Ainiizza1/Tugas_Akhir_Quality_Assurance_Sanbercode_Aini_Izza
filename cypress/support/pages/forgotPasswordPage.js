class ForgotPasswordPage {
    clickForgotPassword() {
        cy.contains('Forgot your password?').click()
    }

    inputUsername(username) {
        cy.get('[name="username"]').type(username)
    }

    clickReset() {
        cy.get('button[type="submit"]').click()
    }

    verifyResetSuccess() {
        cy.url().should('include', 'requestPasswordResetCode')
    }
}

export default new ForgotPasswordPage()