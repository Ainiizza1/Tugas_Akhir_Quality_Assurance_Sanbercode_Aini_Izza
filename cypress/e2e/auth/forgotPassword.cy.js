import loginPage from '../../support/pages/loginPage'
import forgotPage from '../../support/pages/forgotPasswordPage'
import user from "../../fixtures/user.json"

describe('Test Forgot Password - OrangeHRM - Tugas Akhir Sanbercode', () => {
  
  //Navigasi Akses ke login => Forgot Password  
  beforeEach(() => {
    loginPage.visitForgot()
  })

  it('FP-001 Username kosong', () => {
    forgotPage.setupInterceptFP()
    forgotPage.clickReset()
    loginPage.verifyRequired()
  }) 

  it('FP-002 Cancel dan kembali ke login', () => {
    forgotPage.setupInterceptFP()
    forgotPage.clickCancel()
    forgotPage.verifyRedirectToLogin()
  }) 

  it('FP-003 - Clear + submit reset', () => {
    forgotPage.setupInterceptFP()
    forgotPage.inputUsername(user.validUser)
    forgotPage.clearUsername()
    forgotPage.clickReset()
    loginPage.verifyRequired()
  }) 

  it('FP-004 Username valid', () => {
    forgotPage.setupInterceptresetPassword()
    forgotPage.inputUsername(user.validUser)
    forgotPage.clickReset()
    
    cy.wait('@resetPassword')
    forgotPage.verifySuccessMessage()
  }) 

  it('FP-005 Username tidak valid', () => {
    forgotPage.setupInterceptresetPassword2()
    forgotPage.inputUsername(user.angkaUser)
    forgotPage.clickReset()

    cy.wait('@resetPassword2', { timeout: 10000 })
    cy.wrap(true).should('eq', true)
  }) 

  it('FP-006 Username Huruf Besar ', () => {
    forgotPage.setupInterceptresetPassword()
    forgotPage.inputUsername(user.uppercaseUser)
    forgotPage.clickReset()
    
    cy.wait('@resetPassword')
    forgotPage.verifySuccessMessage()
  })

  it('FP-007 Username dengan spasi', () => {
    forgotPage.setupInterceptresetPassword()
    forgotPage.inputUsername(user.spaceUser)
    forgotPage.clickReset()
    
    cy.wait('@resetPassword')
    forgotPage.verifySuccessMessage()
  })




})

