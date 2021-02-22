import * as SignupPageObjects from '../../src/PageObjects/SignupPO'
import * as EnvironmentURL from '../../src/Configs/EnvUrls.json'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('NavigateToOfferPage', () => {
  scrollBehavior:false
  //Validate new page
  cy.get(SignupPageObjects.WatTypeWoningPageHeader()).should('contain', 'In welk type woning woon je?');
  //action

  cy.get(SignupPageObjects.TussenwoningTile()).click();
  cy.get(SignupPageObjects.TussenwoningVolgendeStapButton()).click();

  //Validate new page
  cy.get(SignupPageObjects.MetHoeveelMensenWoonjeHeader()).should('contain', 'Met hoeveel mensen woon je hier?');
  //action
  cy.get(SignupPageObjects.MensenWoonDrieTitle()).click();
  cy.get(SignupPageObjects.MensenWoonVolfgendeStapButton()).click();

  //Validate new page
  cy.get(SignupPageObjects.WatHebJeNodigHeader()).should('contain', 'Wat heb je nodig?');
  //action
  cy.get(SignupPageObjects.StroomEnGasTileButton()).click();
  cy.get(SignupPageObjects.BekijkAanbodButton()).click();

  //Validate new page
  cy.get(SignupPageObjects.WekJeZelfEnergieOpHeader()).should('contain', 'Wek je zelf energie op?');
  //action
  cy.get(SignupPageObjects.WekJeZelfEnergieOpNeeTitleButton()).click();
  cy.get(SignupPageObjects.WekJeZelfEnergieOpVolgendeStapButton()).click();
})


Cypress.Commands.add('IsAResident', (PostCode, HuisNummer, Toevoeging) => {
  //Positive testcase to get to 'Jouw persoonlijke aanbod'
  //Fill form
  scrollBehavior:false
  cy.get(SignupPageObjects.PostcodeTextBox()).type(PostCode).should('have.value', PostCode);
  cy.scrollTo('center')
  cy.get(SignupPageObjects.HuisnummerTextBox()).type(HuisNummer).should('have.value',HuisNummer);
  cy.scrollTo('center')
  cy.get(SignupPageObjects.ToevoegingTextBox()).type(Toevoeging).should('have.value', Toevoeging);
  cy.scrollTo('center')
  cy.get(SignupPageObjects.BerekenJeMaandbedragButton()).click();
})

Cypress.Commands.add('AcceptCookies', () => {
  scrollBehavior:false
  cy.get(SignupPageObjects.acceptCookies()).click();
})

Cypress.Commands.add('NavigateAndValidateURL', () => {
  scrollBehavior:false
  cy.visit(EnvironmentURL.ProdURL);
  cy.url().should('eq', EnvironmentURL.ProdURL);

})
