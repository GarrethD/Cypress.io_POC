import * as SignupPageObjects from '../../../src/PageObjects/SignupPO'
import * as EnvironmentURL from '../../../src/Configs/EnvUrls.json'
import * as NavigateToPersoonlikeAanbodPageShortcut from './ReusableFlows/NavigateToJouwPersoonlijkeAanbodPageShortcuts'
before(  function(){
   cy.visit(EnvironmentURL.ProdURL)
    cy.url().should('eq',EnvironmentURL.ProdURL)
     /*This method incapsulates a bunch of actions taken tyo gat to a the 'Jouw persoonlijke aanbod' page.
      //From here we can just call the navigate method to get to the page and then worry about the rest of the tests going forward.
      we can add shortcut methods like login, logout navigation etc.
      */
     NavigateToPersoonlikeAanbodPageShortcut.NavigateToJouwPersoonlijkeAanbodPage()
 
})


 describe('Feature - Jouw persoonlijke aanbod - “wizig” button functionality',  function ()  {
   it('User is on the best Deal Page', function () {
    
         /*
   Validate Jouw persoonlijke aanbod page has 3 options on it
   1. 3 jaar kontrak
   2. 1 jaar kontrak
   3. variable
   */
   cy.xpath(SignupPageObjects.EenJaarCardHeader())
   cy.xpath(SignupPageObjects.EenJaarCardHeader())
   cy.xpath(SignupPageObjects.VariableCardHeader())
});


it('User clicks on "wizig" button ', function () {
   
   const ball = cy.xpath(SignupPageObjects.ElectricityUsage()).debug()

});

 })
