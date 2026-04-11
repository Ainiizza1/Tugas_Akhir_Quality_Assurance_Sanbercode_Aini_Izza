import loginPage from '../../support/pages/loginPage'
import directoryPage from '../../support/pages/directoryPage'
import user from "../../fixtures/user.json"


describe('OrangeHRM - Directory Feature', () => {

    beforeEach(() => {
        directoryPage.visitDirectory()
    })

    it('DT-001 Verifikasi halaman direktori', () => {
        directoryPage.verifySuccessDirectory()
        directoryPage.verifyVisible()
    }) 

    it('DT-002 Verifikasi tombol search', () => {
        directoryPage.clickSearch()
        cy.wait('@directoryPage')
    })

    it('DT-003 Verifikasi tombol Reset', () => {
        directoryPage.clickReset()
        cy.wait('@directoryPage')
    })

    it('DT-004 Verifikasi tampil directory card', () => {
        directoryPage.clickDirectorycard()
    })

    it('DT-005 Verifikasi job title filter', () => {
        directoryPage.verifyJobtitlefilter()
        directoryPage.clickSearch()

        cy.wait('@directoryPage')
    })

    it('DT-006 Verifikasi location Filter', () => {
        directoryPage.verifyLocationfilter()
        directoryPage.clickSearch()

        cy.wait('@directoryPage')
    })  

    it('DT-007 Verifikasi beberapa filter', () => {
        directoryPage.verify2filter()
        directoryPage.clickSearch()

        cy.wait('@directoryPage')
    }) 

    it('DT-008 Verifikasi employee card', () => {
        directoryPage.clickEmployeecard()
    }) 

    it('DT-009 Pencarian tidak valid (kosong)', () => {
        directoryPage.clickSearch()

        cy.wait('@directoryPage')
    })



    
})