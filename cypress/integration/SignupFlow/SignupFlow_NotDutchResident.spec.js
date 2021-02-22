import * as SignupPageObjects from '../../../src/PageObjects/SignupPO'

before(function () {
  cy.NavigateAndValidateURL();
  cy.AcceptCookies();

})
    describe('Signup Flow',  function ()  {
      scrollBehavior:false
        it('Check if the user is a resident', function () {
       //Fill form
       cy.IsAResident('7441','6','GH');
       
        //Validation
        cy.get(SignupPageObjects.WaarWoonJe()).should('contain','Waar woon je?')
        cy.get(SignupPageObjects.VulJePostcodeEnHuisnummerInMessage()).should('contain','Vul je postcode en huisnummer in voor een aanbod op maat.')
        });

      })