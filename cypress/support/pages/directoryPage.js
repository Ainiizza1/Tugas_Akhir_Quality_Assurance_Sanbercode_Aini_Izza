class DirectoryPage {
    openDirectoryMenu() {
        cy.contains('Directory').click()
    }

    searchByName(name) {
        cy.get('input[placeholder="Type for hints..."]').type(name)
    }

    clickSearch() {
        cy.contains('Search').click()
    }

    verifyResult() {
        cy.get('.oxd-table-card').should('exist')
    }
}

export default new DirectoryPage()