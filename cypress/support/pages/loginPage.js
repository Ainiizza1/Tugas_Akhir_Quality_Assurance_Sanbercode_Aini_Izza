class LoginPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }

    inputUsername(username) {
        cy.get('[name="username"]').clear().type(username)
    }

    inputPassword(password) {
        cy.get('[name="password"]').clear().type(password)
    }

    clickLogin() {
        cy.get('button[type="submit"]').click()
    }

    verifySuccessLogin() {
        cy.url().should('include', '/dashboard')
    }

    verifyError() {
        cy.get('.oxd-alert-content-text')
            .should('be.visible')
    }
}

export default new LoginPage()