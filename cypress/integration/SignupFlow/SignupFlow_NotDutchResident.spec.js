context('NegativeScenarios', function ()  {
    //Before each 'it' we will make sure we are on the correct web page
    before(  function(){
        //setting screen resolution to standard 1080p
      cy.visit('https://vandebron.nl')
    })
  
    describe('Signup Flow',  function ()  {
        it('Should show a message if the user is not a Dutch Resident', function () {
          cy.url().should('eq','https://vandebron.nl/')
          cy.xpath("//button[@onclick='acceptCookies()']").click()

       //Fill form
        cy.xpath("//input[@name='submitData.shippingAddress.zipCode']").scrollIntoView().type('7441').should('have.value','7441')
        cy.xpath("//input[@name='submitData.shippingAddress.number']").scrollIntoView().type('0604718950').should('have.value','0604718950')
        cy.xpath("//input[@name='submitData.shippingAddress.addition']").scrollIntoView().type('G').should('have.value','G')
        //submit form
        cy.xpath("//button[@class='Base-sc-11hu4bh-0-button Pressable-xp7e18-0 kjUHle']").click()

        //Validation
        cy.xpath("//h2[text()='Waar woon je?']").should('contain','Waar woon je?')
        cy.xpath("//p[text()='Vul je postcode en huisnummer in voor een aanbod op maat.']").should('contain','Vul je postcode en huisnummer in voor een aanbod op maat.')
        });

       
      })

})