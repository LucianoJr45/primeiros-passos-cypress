import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: '.--close',
    submitButton: "[type='submit']",
    genericCombobox: ".oxd-select-text--arrow"
    
  }



  it.only('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    

    
    // cy.get(selectorsList.genericField).eq(4).clear().type('empIdTest')
    // cy.get(selectorsList.genericField).eq(5).clear().type('driverIdTest1')
    // cy.get('.oxd-input-field-bottom-space').eq(4).clear().type('idTest')
    // cy.get(selectorsList.dateField).eq(0).clear().type('2025-08-10')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.genericCombobox).eq(0).click()
    // cy.contains('Brazilian').click()
    // cy.get(selectorsList.genericCombobox).eq(1).click()
    // cy.contains('Married').click()
    // cy.get(selectorsList.submitButton).eq(0).click()
    // cy.get('body').should('contain', 'Successfully Updated')
    // cy.get('.oxd-toast-close').click()
    

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})