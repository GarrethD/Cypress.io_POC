import * as SignupPageObjects from '../../../src/PageObjects/SignupPO'
import * as EnvironmentURL from '../../../src/Configs/EnvUrls.json'
import * as NavigateToPersoonlikeAanbodPageShortcut from './ReusableFlows/NavigateToJouwPersoonlijkeAanbodPageShortcuts'
before(function () {
   cy.visit(EnvironmentURL.ProdURL)
   cy.url().should('eq', EnvironmentURL.ProdURL)
   /*This method incapsulates a bunch of actions taken tyo gat to a the 'Jouw persoonlijke aanbod' page.
    //From here we can just call the navigate method to get to the page and then worry about the rest of the tests going forward.
    we can add shortcut methods like login, logout navigation etc.
    */
   NavigateToPersoonlikeAanbodPageShortcut.NavigateToJouwPersoonlijkeAanbodPage()

})


describe('Feature - Jouw persoonlijke aanbod - “wizig” button functionality', function () {
   it('User is on the best Deal Page', function () {
      cy.get(SignupPageObjects.wijzigButton()).contains('wijzig').click()
   });


   it('User changes "Elektriciteit" and "Gas" option', function () {


      //Extract text of Elektriciteit and Gas Before editing the textfields
      cy.get(SignupPageObjects.ElectricityUsage()).then(($DefaultElecUsage) => {

         const DefaultElectUsageText = $DefaultElecUsage.text()
         DefaultElectUsageText.replace(/^\s+|\s+$/g, '')
         //  $DefaultElecUsage.text(($el => expect($el.text().trim())))

         cy.get(SignupPageObjects.GasUsage()).then(($DefaultGasUsage) => {

            const DefaultGasUsageText = $DefaultGasUsage.text()
            DefaultGasUsageText.replace(/^\s+|\s+$/g, '')
            // $DefaultGasUsage.text(($el => expect($el.text().trim())))


            cy.get(SignupPageObjects.wijzigButton()).click

            //Change the value and submit
            cy.xpath(SignupPageObjects.ElectricityUsage()).type('3000')
            cy.xpath(SignupPageObjects.GasUsage()).type('1500')

            cy.get(SignupPageObjects.OkButton()).should('contain','Ok').click()




            //Extract text of Elektriciteit and Gas After editing the textfields
            cy.get(SignupPageObjects.ElectricityUsage()).then(($EditedElecUsage) => {

               const EditedElectUsageText = $EditedElecUsage.text()
               EditedElectUsageText.replace(/^\s+|\s+$/g, '')
               //  $EditedElecUsage.text(($el => expect($el.text().trim())))

               cy.get(SignupPageObjects.GasUsage()).then(($EditedGasUsage) => {

                  const EditedGasUsageText = $EditedGasUsage.text()
                  EditedGasUsageText.replace(/^\s+|\s+$/g, '')
                  // $EditedGasUsage.text(($el => expect($el.text().trim())))

                  expect(DefaultElectUsageText).not.to.eq(EditedElectUsageText)
                  expect(DefaultGasUsageText).not.to.eq(EditedGasUsageText)


               });

            })
         })
      })
   })
})
