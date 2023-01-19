//gafer dazzling
import "../shared/bubble.js";

//Model
import workShopExersice from "./workshopExersice.js";

//Set up
const guidanceOneElement = document.querySelector("#guidanceOneElement");
const guidanceTwoElement = document.querySelector("#guidanceTwoElement");
const guidanceThreeElement = document.querySelector("#guidanceThreeElement");
const guidanceFourElement = document.querySelector("#guidanceFourElement");
const variableGuidanceElement = document.querySelector(
  "#variableGuidanceElement"
);
const pageNumberElement = document.querySelector("#pageNumberElement");

//On page load set the default content
function initialisePage() {
  guidanceOneElement.innerHTML = workShopExersice.guidanceOne;
  guidanceTwoElement.innerHTML = workShopExersice.guidanceTwo;
  guidanceThreeElement.innerHTML = workShopExersice.guidanceThree;
  guidanceFourElement.innerHTML = workShopExersice.guidanceFour;
}

//User has selected another page so change it!
function loadPage(pageIndex) {
  variableGuidanceElement.innerHTML =
    workShopExersice.variableGuidance[pageIndex - 1].text;
  pageNumberElement.innerHTML = pageIndex;
}

initialisePage();
loadPage(1);
