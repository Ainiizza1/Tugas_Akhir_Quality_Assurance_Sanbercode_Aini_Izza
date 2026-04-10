class DirectoryPage {
    openDirectoryMenu() {
        cy.contains('Directory').click()
    }

    searchByName(name) {
        cy.get('input[placeholder="Type for hints..."]').type(name)
    }

    clickSearch() {
        cy.contains('[type="submit"]').click()
    }

    verifyResult() {
        cy.get('.oxd-table-card').should('exist')
    }

    verifySuccessDirectory() {
        cy.url().should('include', 'directory')
    }
}

export default new DirectoryPage()
