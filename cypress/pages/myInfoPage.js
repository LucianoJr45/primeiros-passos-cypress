class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: '.--close',
            submitButton: "[type='submit']",
            genericCombobox: ".oxd-select-text--arrow"
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)

        
    }

    fillEmployeeDetails(employeeId, idTest, driverId, expiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(idTest)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverId)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()

    }

    fillStatus(nacionality, socialStatus) {
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.contains(nacionality).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.contains(socialStatus).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close').click()
    }
    

}

export default MyInfoPage