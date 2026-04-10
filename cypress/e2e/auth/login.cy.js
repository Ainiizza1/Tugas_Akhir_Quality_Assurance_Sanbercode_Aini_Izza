import loginPage from '../../support/pages/loginPage'
import user from "../../fixtures/user.json"

describe('Login Test - OrangeHRM - Tugas Akhir Sanbercode', () => {

    beforeEach(() => {
        loginPage.visit()
    })

    it('TC-001 Login valid', () => {
        loginPage.setupInterceptLogin()
        loginPage.inputUsername(user.validUser)
        loginPage.inputPassword(user.validPass)
        loginPage.clickLogin()

        cy.wait('@loginRequest')
        loginPage.verifySuccessLogin()
    })

    it('TC-002 Login tanpa username dan password', () => {
        loginPage.setupInterceptemptyLogin()
        loginPage.clickLogin()
        
        cy.get('@emptyLogin.all').should('have.length', 0)
        loginPage.verifyRequired()
    }) 

    it('TC-003 Login dengan username huruf besar', () => {
        loginPage.setupInterceptLogin()
        loginPage.inputUsername(user.uppercaseUser)
        loginPage.inputPassword(user.validPass)
        loginPage.clickLogin()

        cy.wait('@loginRequest')
        loginPage.verifySuccessLogin()
    }) 

    it('TC-004 Login dengan password huruf besar', () => {
        loginPage.setupInterceptLogin()
        loginPage.inputUsername(user.validUser)
        loginPage.inputPassword(user.uppercasePass)
        loginPage.clickLogin()

        cy.wait('@loginRequest')
        loginPage.verifyInvalidCredentials()
    }) 
  
    it('TC-005 Login dengan spasi setelah username', () => {
        loginPage.setupInterceptdenganSpasi()
        loginPage.inputUsername(user.spaceUser)
        loginPage.inputPassword(user.validPass)
        loginPage.clickLogin()

        cy.wait('@denganSpasi').its('response.statusCode').should('eq',200)
        loginPage.verifySuccessLogin()
    }) 

    it('TC-006 Refresh halaman saat login', () => {
        loginPage.setupInterceptdenganRefresh()
        loginPage.inputUsername(user.validUser)
        loginPage.inputPassword(user.validPass)
                
        cy.reload()
        loginPage.verifyEmptyField()
    }) 

    it('TC-007 Login dengan username mengandung angka', () => {
        loginPage.setupInterceptusernameAngka()
        loginPage.inputUsername(user.angkaUser)
        loginPage.inputPassword(user.validPass)

        loginPage.clickLogin()
        cy.wait('@usernameAngka').its('response.statusCode').should('eq',200)
        loginPage.verifyInvalidCredentials()
    }) 

    it('TC-008 Login dengan username salah', () => {
        loginPage.setupInterceptusernameSalah()
        loginPage.inputUsername(user.sUser)
        loginPage.inputPassword(user.validPass)
        loginPage.clickLogin()

        cy.wait('@usernameSalah').its('response.statusCode').should('eq',304)
        loginPage.verifyInvalidCredentials()
    })

    it('TC-009 Login dengan username kosong', () => {
        loginPage.setupInterceptusernameAngka()
        loginPage.inputPassword(user.validPass)
        loginPage.clickLogin()
        loginPage.verifyRequired()
    }) 

    it('TC-010 Login dengan Password kosong', () => {
        loginPage.setupInterceptusernameAngka()
        loginPage.inputUsername(user.validUser)
        loginPage.clickLogin()
        loginPage.verifyRequired()
    }) 

    it('TC-011 Klik login berkali-kali', () => {
        loginPage.setupInterceptdenganRefresh()
        loginPage.inputUsername(user.validUser)
        loginPage.inputPassword(user.validPass)
        loginPage.clickLoginMultiple(5)
        loginPage.verifySuccessLogin()
    }) 

})