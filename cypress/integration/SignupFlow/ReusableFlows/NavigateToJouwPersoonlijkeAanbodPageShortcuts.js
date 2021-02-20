import * as SignupPageObjects from '../../../../src/PageObjects/SignupPO'
import * as EnvironmentURL from '../../../../src/Configs/EnvUrls.json'

export function NavigateToJouwPersoonlijkeAanbodPage() {
    
    cy.xpath(SignupPageObjects.acceptCookies()).click()
    //Positive testcase to get to 'Jouw persoonlijke aanbod'
    //Fill form
    cy.xpath(SignupPageObjects.PostcodeTextBox()).scrollIntoView().type('1011bx').should('have.value','1011bx')
    cy.xpath(SignupPageObjects.HuisnummerTextBox()).scrollIntoView().type('1').should('have.value','1')
    cy.xpath(SignupPageObjects.ToevoegingTextBox()).scrollIntoView().type('G').should('have.value','G')
    //submit form 
    cy.xpath(SignupPageObjects.BerekenJeMaandbedragButton()).click()
      //Validate new page
      cy.xpath(SignupPageObjects.WatTypeWoningPageHeader()).should('contain','In welk type woning woon je?')
      //action
      cy.xpath(SignupPageObjects.TussenwoningTile()).click()
      cy.xpath(SignupPageObjects.TussenwoningVolgendeStapButton()).click()

         //Validate new page
    cy.xpath(SignupPageObjects.MetHoeveelMensenWoonjeHeader()).should('contain','Met hoeveel mensen woon je hier?')
    //action
    cy.xpath(SignupPageObjects.MensenWoonDrieTitle()).click()
    cy.xpath(SignupPageObjects.MensenWoonVolfgendeStapButton()).click()

       //Validate new page
       cy.xpath(SignupPageObjects.WatHebJeNodigHeader()).should('contain','Wat heb je nodig?')
       //action
       cy.xpath(SignupPageObjects.StroomEnGasTileButton()).click()
       cy.xpath(SignupPageObjects.BekijkAanbodButton()).click()

         //Validate new page
    cy.xpath(SignupPageObjects.WekJeZelfEnergieOpHeader()).should('contain','Wek je zelf energie op?')
    //action
    cy.xpath(SignupPageObjects.WekJeZelfEnergieOpNeeTitleButton()).click()
    cy.xpath(SignupPageObjects.WekJeZelfEnergieOpVolgendeStapButton()).click()

    
  }