import loginPage from '../../support/pages/loginPage'

describe('Login Test - OrangeHRM', () => {

    beforeEach(() => {
        loginPage.visit()
    })

    it('TC01 - Login valid', () => {
        cy.intercept('POST', '**/auth/validate').as('loginRequest')

        loginPage.inputUsername('Admin')
        loginPage.inputPassword('admin123')
        loginPage.clickLogin()

        cy.wait('@loginRequest')
        loginPage.verifySuccessLogin()
    })

    it('TC02 - Password salah', () => {
        loginPage.inputUsername('Admin')
        loginPage.inputPassword('salah123')
        loginPage.clickLogin()

        loginPage.verifyError()
    })

    it('TC03 - Username kosong', () => {
        loginPage.inputPassword('admin123')
        loginPage.clickLogin()

        loginPage.verifyError()
    })

    it('TC04 - Password kosong', () => {
        loginPage.inputUsername('Admin')
        loginPage.clickLogin()

        loginPage.verifyError()
    })

    it('TC05 - Login huruf besar semua', () => {
        loginPage.inputUsername('ADMIN')
        loginPage.inputPassword('ADMIN123')
        loginPage.clickLogin()

        loginPage.verifyError()
    })

    it('TC01 - Login valid dari fixture', () => {
        cy.fixture('user').then((data) => {
            loginPage.inputUsername(data.validUser.username)
            loginPage.inputPassword(data.validUser.password)
        })

        loginPage.clickLogin()
        loginPage.verifySuccessLogin()
    })

    it('TC02 - Login invalid dari fixture', () => {
        cy.fixture('user').then((data) => {
            loginPage.inputUsername(data.invalidUser.username)
            loginPage.inputPassword(data.invalidUser.password)
        })

        loginPage.clickLogin()
        loginPage.verifyError()
    })
})