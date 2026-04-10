// class LoginPage {
//     visit() {
//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     }

//     inputUsername(username) {
//         cy.get('[name="username"]').clear().type(username)
//     }

//     inputPassword(password) {
//         cy.get('[name="password"]').clear().type(password)
//     }

//     clickLogin() {
//         cy.get('button[type="submit"]').click()
//     }

//     verifySuccessLogin() {
//         cy.url().should('include', '/dashboard')
//     }

//     verifyError() {
//         cy.get('.oxd-alert-content-text')
//             .should('be.visible')
//             .and('contain', 'Invalid credentials')
//     }

//     setupInterceptLogin() {
//         cy.intercept('POST', '**/auth/validate').as('loginRequest')
//     }

//     setupInterceptemptyLogin() {
//         cy.intercept('POST', '**/auth/login').as('emptyLogin')
//     }

//     setupInterceptdenganSpasi() {
//         cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index').as('denganSpasi')
//     }

//     setupInterceptdenganRefresh() {
//         cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit').as('denganRefresh')
//     }

//     setupInterceptusernameAngka() {
//         cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('usernameAngka') 
//     }

//     setupInterceptusernameSalah() {
//         cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('usernameSalah') 
//     }

//     verifyRequired() {
//         cy.contains('Required').should('be.visible')
//     }

//     verifyEmptyField() {
//         cy.get('[name="username"]').should('have.value', "")
//         cy.get('[name="password"]').should('have.value', "")
//     }

//     verifyInvalidCredentials() {
//         cy.get('.oxd-alert-content-text')
//             .should('be.visible')
//             .and('contain', 'Invalid credentials')
//     }

//     clickLoginMultiple() {
//     cy.get('.oxd-button').then(($btn) => {
//         for (let i = 0; i < 5; i++) {
//         $btn.click()
//         }
//       })
//     }
    
// }

// export default new LoginPage()

class LoginPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
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
            .and('contain', 'Invalid credentials')
    }

    setupInterceptLogin() {
        cy.intercept('POST', '**/auth/validate').as('loginRequest')
    }

    setupInterceptemptyLogin() {
        cy.intercept('POST', '**/auth/login').as('emptyLogin')
    }

    setupInterceptdenganSpasi() {
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index').as('denganSpasi')
    }

    setupInterceptdenganRefresh() {
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit').as('denganRefresh')
    }

    setupInterceptusernameAngka() {
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('usernameAngka') 
    }

    setupInterceptusernameSalah() {
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('usernameSalah') 
    }

    verifyRequired() {
        cy.contains('Required').should('be.visible')
    }

    verifyEmptyField() {
        cy.get('[name="username"]').should('have.value', "")
        cy.get('[name="password"]').should('have.value', "")
    }

    verifyInvalidCredentials() {
        cy.get('.oxd-alert-content-text')
            .should('be.visible')
            .and('contain', 'Invalid credentials')
    }

    clickLoginMultiple() {
    cy.get('.oxd-button').then(($btn) => {
        for (let i = 0; i < 5; i++) {
        $btn.click()
        }
      })
    }
    
}

export default new LoginPage()