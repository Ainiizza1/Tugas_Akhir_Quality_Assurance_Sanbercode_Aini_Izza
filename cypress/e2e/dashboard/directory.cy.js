import loginPage from '../../support/pages/loginPage'
import directoryPage from '../../support/pages/directoryPage'

describe('Directory Menu Test', () => {

    beforeEach(() => {
        loginPage.visit()

        cy.intercept('POST', '**/auth/validate').as('loginRequest')

        loginPage.inputUsername('Admin')
        loginPage.inputPassword('admin123')
        loginPage.clickLogin()

        cy.wait('@loginRequest')
    })

    it('TC01 - Buka menu directory', () => {
        directoryPage.openDirectoryMenu()
        cy.url().should('include', 'directory')
    })

    it('TC02 - Search nama valid', () => {
        directoryPage.openDirectoryMenu()

        directoryPage.searchByName('Linda')
        directoryPage.clickSearch()

        directoryPage.verifyResult()
    })

    it('TC03 - Search kosong', () => {
        directoryPage.openDirectoryMenu()

        directoryPage.clickSearch()

        cy.get('.oxd-table').should('exist')
    })
})