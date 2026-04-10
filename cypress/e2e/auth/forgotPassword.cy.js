import loginPage from '../../support/pages/loginPage'
import forgotPage from '../../support/pages/forgotPasswordPage'
import user from "../../fixtures/user.json"

describe('Test Forgot Password - OrangeHRM - Tugas Akhir Sanbercode', () => {
  
  //Navigasi Akses ke login => Forgot Password  
  beforeEach(() => {
    loginPage.visit()
    forgotPage.clickForgotPassword()
  })

  it('FP-001 - Username kosong', () => {
    forgotPage.setupInterceptFP()
    forgotPage.clickReset()
    loginPage.verifyRequired()
  }) //OK

  it('FP-002 - Cancel dan kembali ke login', () => {
    forgotPage.setupInterceptFP()
    forgotPage.clickCancel()
    forgotPage.verifyRedirectToLogin()
  }) //OK

  it('FP-003 - Clear + submit reset', () => {
    forgotPage.setupInterceptFP()
    forgotPage.inputUsername(user.validUser)
    forgotPage.clearUsername()
    forgotPage.clickReset()
    loginPage.verifyRequired()
  }) //OK

//   it('FP-003 - Input username valid', () => {
//     forgotPage.setupInterceptFP()
//     forgotPage.inputUsername(user.validUser)
//     forgotPage.clickReset()
//     loginPage.verifyRequired()
//   })

})

