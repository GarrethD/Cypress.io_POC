import * as SignupPageObjects from '../../../src/PageObjects/SignupPO'
before(function () {
    cy.NavigateAndValidateURL();
    cy.AcceptCookies();
 
 })
describe('Feature - [Extra] Validate Price updates after Vebruik wijzigen has been used', function () {
   
it('User is on the best Deal Page', function () {
   //Reusable methods to cut out mundain repetitive code writing 
    cy.IsAResident('1011bx','1','G');
    cy.NavigateToOfferPage();
 })
 it('[Boundry Test For price update Validation]-"Vebruik wijzigen" updates the 1 year , 3 year or variable Prices.', function () {
    
    //Extract data before  changing everything
    cy.get(SignupPageObjects.EeenJaarPriceText()).should('contain','146,14')
    cy.get(SignupPageObjects.DrieJaarPriceText()).should('contain','142,98')
    cy.get(SignupPageObjects.VariabelPriceText()).should('contain','137,76')
    debugger
    cy.get(SignupPageObjects.wijzigButton()).click();
    cy.get(SignupPageObjects.VebruikWijzigenLink()).click();

    cy.get(SignupPageObjects.Vrijstaand()).click();
    cy.get(SignupPageObjects.TypeWoningText()).should('contain','Vrijstaand')

    cy.get(SignupPageObjects.AantalBewoners2()).click();
    cy.get(SignupPageObjects.AantalBewonersText()).should('contain','2')

    cy.get(SignupPageObjects.stroom()).click();
    cy.get(SignupPageObjects.SoortText()).should('contain','Stroom')

    cy.get(SignupPageObjects.solarPanelCheckbox()).check({force: true},'solar-panels');
    cy.get(SignupPageObjects.ZonnepanelenPowerTextbox()).should('be.visible');
    
    cy.get(SignupPageObjects.OkButton()).should('contain', 'Ok').click();

    cy.get(SignupPageObjects.EeenJaarPriceText()).should('contain','19,38')
    cy.get(SignupPageObjects.DrieJaarPriceText()).should('contain','17,91')
    cy.get(SignupPageObjects.VariabelPriceText()).should('contain','17,06')
 })
})