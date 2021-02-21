export function acceptCookies() {
  return "//button[@onclick='acceptCookies()']";
}
export function PostcodeTextBox() {
    return "//input[@name='submitData.shippingAddress.zipCode']";
  }
  export function HuisnummerTextBox() {
    return "//input[@name='submitData.shippingAddress.number']";
  }
  export function ToevoegingTextBox() {
    return "//input[@name='submitData.shippingAddress.addition']";
  }
  export function BerekenJeMaandbedragButton() {
    return "//button[@class='Base-sc-11hu4bh-0-button Pressable-xp7e18-0 kjUHle']";
  }
  export function WatTypeWoningPageHeader() {
    return "//h2[text()='In welk type woning woon je?']";
  }
  export function TussenwoningTile() {
    return "//div[@class='SwitchBase__StyledSwitchBaseButton-sc-1xmvua5-4 cyvsHK ab-house-2']";
  }
  export function TussenwoningVolgendeStapButton() {
    return "//button[@class='Base-sc-11hu4bh-0-button Pressable-xp7e18-0 kjUHle ab-house-button-next-step']";
  }
  export function MetHoeveelMensenWoonjeHeader() {
    return "//h2[text()='Met hoeveel mensen woon je hier?']";
  }
  export function MensenWoonDrieTitle() {
    return "//div[@class='SwitchBase__StyledSwitchBaseButton-sc-1xmvua5-4 cyvsHK ab-resident-3']";
  }
  export function MensenWoonVolfgendeStapButton() {
    return "//button[@class='Base-sc-11hu4bh-0-button Pressable-xp7e18-0 kjUHle ab-resident-button-next-step']";
  }
  export function WatHebJeNodigHeader() {
    return "//h2[text()='Wat heb je nodig?']";
  }
  export function StroomEnGasTileButton() {
    return "//div[@class='SwitchBase__StyledSwitchBaseButton-sc-1xmvua5-4 cyvsHK ab-with-gas']";
  }
  export function BekijkAanbodButton() {
    return "//button[@class='Base-sc-11hu4bh-0-button Pressable-xp7e18-0 kjUHle ab-view-offer-button']";
  }
  export function WekJeZelfEnergieOpHeader() {
    return "//h2[text()='Wek je zelf energie op?']";
  }
  export function WekJeZelfEnergieOpNeeTitleButton() {
    return "//div[@class='SwitchBase__StyledSwitchBaseButton-sc-1xmvua5-4 cyvsHK']";
  }
  export function WekJeZelfEnergieOpVolgendeStapButton() {
    return "//button[@class='Pressable-module__button Pressable-module__button-primary Pressable-module__button-end']";
  }
  export function DrieJaarPrijszekerCardHeader() {
    return "//div[@class='optionBlock-info-title'][text()='3 jaar prijszeker']";
  }
  export function EenJaarCardHeader() {
    return "//div[@class='optionBlock-info-title'][text()='1 jaar']";
  }
  export function VariableCardHeader() {
    return "//div[@class='optionBlock-info-title'][text()='Variabel']";
  }






  //==================================================================CSS Selectors for comparing and selecting===================================================================
  export function ElectricityUsage() {
    return "//input[\\@id='priceParameters\\.basicEstimate']";
  }
  export function GasUsage() {
    return "//input[@id='priceParameters.gasEstimate']";
  }
  export function wijzigButton() {
    return "#e2e-edit-usage";
  }


  export function ElectricityUsageTextBox() {
    return ".EditKnownUsage > :nth-child(1) > .Flex-module__flex-column > .Input__Container-yt9vxy-3 > .Input__StyledInputWrapper-yt9vxy-0";
  }
  export function GasUsageTextBox() {
    return ".EditKnownUsage > :nth-child(2) > .Input__Container-yt9vxy-3 > .Input__StyledInputWrapper-yt9vxy-0";
  }
  export function OkButton() {
    return "//input[@id='priceParameters.gasEstimate']/../../../../../..//span[text()='Ok']";
  }