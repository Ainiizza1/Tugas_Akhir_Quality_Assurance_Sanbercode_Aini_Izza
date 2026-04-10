import loginPage from '../../support/pages/loginPage'
import directoryPage from '../../support/pages/directoryPage'
import user from "../../fixtures/user.json"

describe('Test Directory Menu - OrangeHRM - Tugas Akhir Sanbercode', () => {

    beforeEach(() => {
        loginPage.visit()
        loginPage.setupInterceptLogin()
        loginPage.inputUsername(user.validUser)
        loginPage.inputPassword(user.validPass)
        loginPage.clickLogin()
        cy.wait('@loginRequest')
    })

    it('DT-001 Login dan buka menu directory', () => {     
        directoryPage.openDirectoryMenu()
        directoryPage.verifySuccessDirectory()
    }) //OK

//  it('DIR-003 - Search employee valid', () => {
//     dashboardPage.clickDirectoryMenu()
//     cy.get('input[placeholder="Type for hints..."]').type('Admin')
//     cy.get('.oxd-form-actions button[type="submit"]').click()

//     cy.get('.oxd-table-body').should('be.visible')
//   })

    // it('TC03 - Search kosong', () => {
    //     directoryPage.openDirectoryMenu()

    //     directoryPage.clickSearch()

    //     cy.get('.oxd-table').should('exist')
    // })
})

