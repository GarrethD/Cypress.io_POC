import * as SignupPageObjects from '../../../src/PageObjects/SignupPO'
import * as SignupDetails from '../../fixtures/UserSignUpDetails.json'

before(function () {
   cy.NavigateAndValidateURL();
   cy.AcceptCookies();
})
describe('Feature - Jouw persoonlijke aanbod - “wizig” button functionality', function () {

   it('User is on the best Deal Page', function () {
      /*This method incapsulates a bunch of actions taken to get to the 'Jouw persoonlijke aanbod' page.
  //From here we can just call the navigate method to get to the page and then worry about the rest of the tests going forward.
  we can add shortcut methods like login, logout navigation etc.
  */
 cy.IsAResident('1011bx','1','G');
      cy.NavigateToOfferPage();
   })
   it('User had default values generated based on consumption', function () {

      cy.get(SignupPageObjects.ElectricityUsage()).should('contain','2850')
      cy.get(SignupPageObjects.GasUsage()).should('contain','1200')
      cy.get(SignupPageObjects.wijzigButton()).click();

   })
      it('User changes "Elektriciteit" and "Gas" usage amount', function () {
         //Change the value and submit
         cy.get(SignupPageObjects.ElectricityUsageTextBox()).clear().type('3000');
         cy.get(SignupPageObjects.GasUsageTextBox()).clear().type('1500');
         //submit new changes
         cy.get(SignupPageObjects.OkButton()).should('contain', 'Ok').click();
         cy.get(SignupPageObjects.ElectricityUsage()).should('contain','3000');
         cy.get(SignupPageObjects.GasUsage()).should('contain','1500');
         //Extract text of Elektriciteit and Gas After editing the textfields
      })
      it('User does not need "Gas"', function () {
         //Change the value and submit
         cy.get(SignupPageObjects.wijzigButton()).click();
         
         cy.get(SignupPageObjects.GasCheckbox()).first().uncheck({force: true});
         cy.get(SignupPageObjects.GasUsageTextBox()).should('not.exist');
         cy.get(SignupPageObjects.GasCheckbox()).first().check({force: true});
         cy.get(SignupPageObjects.GasUsageTextBox()).should('be.visible');
           //submit new changes
           cy.get(SignupPageObjects.OkButton()).should('contain', 'Ok').click();
         //Extract text of Elektriciteit and Gas After editing the textfields
      })
      it('User has dubbele meter', function () {
         //Change the value and submit
         cy.get(SignupPageObjects.wijzigButton()).click();
         cy.get(SignupPageObjects.ToggleDubbeleMeter()).click();
         cy.get(SignupPageObjects.SecondElektriciteitTextbox()).should('be.visible');
         cy.get(SignupPageObjects.ToggleDubbeleMeter()).click();
         cy.get(SignupPageObjects.SecondElektriciteitTextbox()).should('not.exist');
           //submit new changes
           cy.get(SignupPageObjects.OkButton()).should('contain', 'Ok').click();
         //Extract text of Elektriciteit and Gas After editing the textfields
      })
      it('User has Zonnepanelen', function () {
         //TODO add field edit validation

         //Change the value and submit
         cy.get(SignupPageObjects.wijzigButton()).click();
         cy.get(SignupPageObjects.solarPanelCheckbox()).check({force: true},'solar-panels');
         cy.get(SignupPageObjects.ZonnepanelenPowerTextbox()).should('be.visible');
         cy.get(SignupPageObjects.OkButton()).should('contain', 'Ok').click();
      })

      it('User can change the "type of woning" selections using the Verbruik wijzigen link', function () {
         //Change the value and submit
         cy.get(SignupPageObjects.wijzigButton()).click();
         cy.get(SignupPageObjects.VebruikWijzigenLink()).click();

         cy.get(SignupPageObjects.AppartmentButton()).click();
         cy.get(SignupPageObjects.TypeWoningText()).should('contain','Appartement')

         cy.get(SignupPageObjects.Tussenwoning()).click();
         cy.get(SignupPageObjects.TypeWoningText()).should('contain','Tussenwoning')

         cy.get(SignupPageObjects.Hoekwoning()).click();
         cy.get(SignupPageObjects.TypeWoningText()).should('contain','Hoekwoning')

         cy.get(SignupPageObjects.TweeOnderEenKap()).click();
         cy.get(SignupPageObjects.TypeWoningText()).should('contain','2-onder-1-kap')

         cy.get(SignupPageObjects.Vrijstaand()).click();
         cy.get(SignupPageObjects.TypeWoningText()).should('contain','Vrijstaand')

         cy.get(SignupPageObjects.OkButton()).should('contain', 'Ok').click();
      })
      it('User can change the "Aantal bewoners" selections using the Verbruik wijzigen link', function () {
         //Change the value and submit
         cy.get(SignupPageObjects.wijzigButton()).click();
         cy.get(SignupPageObjects.VebruikWijzigenLink()).click();

         cy.get(SignupPageObjects.AantalBewoners1()).click();
         cy.get(SignupPageObjects.AantalBewonersText()).should('contain','1')

         cy.get(SignupPageObjects.AantalBewoners2()).click();
         cy.get(SignupPageObjects.AantalBewonersText()).should('contain','2')

         cy.get(SignupPageObjects.AantalBewoners3()).click();
         cy.get(SignupPageObjects.AantalBewonersText()).should('contain','3')

         cy.get(SignupPageObjects.AantalBewoners4()).click();
         cy.get(SignupPageObjects.AantalBewonersText()).should('contain','4')

         cy.get(SignupPageObjects.AantalBewoners5()).click();
         cy.get(SignupPageObjects.AantalBewonersText()).should('contain','5')

         cy.get(SignupPageObjects.OkButton()).should('contain', 'Ok').click();

      })
      it('User can change the "Soort" selections using the Verbruik wijzigen link', function () {
         //Change the value and submit
         cy.get(SignupPageObjects.wijzigButton()).click();
         cy.get(SignupPageObjects.VebruikWijzigenLink()).click();

         cy.get(SignupPageObjects.stroom()).click();
         cy.get(SignupPageObjects.SoortText()).should('contain','Stroom')

         cy.get(SignupPageObjects.GasEnStroom()).click();
         cy.get(SignupPageObjects.SoortText()).should('contain','Stroom en Gas')

         cy.get(SignupPageObjects.OkButton()).should('contain', 'Ok').click();

      })
      it('User can click on the tooltip', function () {
         //Change the value and submit
         cy.get(SignupPageObjects.wijzigButton()).click();
         cy.get(SignupPageObjects.VebruikWijzigenLink()).click();
         cy.get(SignupPageObjects.ZonnepanelenToolTip()).click({force:true})
         cy.get(SignupPageObjects.ZonnepanelenToolTipText()).should('have.text',SignupDetails.TooltipMessage)

         cy.get(SignupPageObjects.OkButton()).should('contain', 'Ok').click();

      })

      it('Boundry test to see if "Gebaseerd op je vebruik" updates after "wijzigen" has been used', function () {
         //Change the value and submit

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

         //Validate that the "Jouw persoonlijke aanbod" page updates 
         cy.get(SignupPageObjects.ElectricityUsage()).should('contain','3450')
         
         //once to confirm the actions of the Doe een schatting selection
         cy.get(SignupPageObjects.wijzigButton()).click();
      //once to confirm the actions of the wijzig selections
         cy.get(SignupPageObjects.wijzigButton()).click();
      })
     
   })

