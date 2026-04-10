class ForgotPasswordPage {
    clickForgotPassword() {
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
    }

    inputUsername(username) {
        cy.get('[name="username"]').clear().type(username)
    }

    clickReset() {
        cy.get('button[type="submit"]').click()
    }

    clickCancel() {
        cy.get('.oxd-button--ghost').click()
    }

    verifyResetSuccess() {
        cy.url().should('include', 'requestPasswordResetCode')
    }

    verifyRedirectToLogin() {
        cy.url().should("include", "auth/login")
    }

    verifySuccessMessage() {
        cy.contains('Reset Password link sent successfully').should('be.visible')
    }

    clearUsername() {
        cy.get('[name="username"]').clear()
    }

    setupInterceptFP() {
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode').as('FPRequest')
    }    

    setupInterceptresetPassword() {
        cy.intercept('POST', '**/requestPasswordResetCode').as('resetPassword')
    }

    setupInterceptresetPassword2() {
        cy.intercept('**/sendPasswordReset*').as('resetPassword2')
    }



    
}


export default new ForgotPasswordPage()