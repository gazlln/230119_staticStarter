//gafer dazzling
import "../shared/bubble.js";

//Model
import workShopExersice from "./workshopExersice.js";

//Set up
const modes = ["most", "secondMost", "thirdMost"];

var currentPageIndex = 0;

//Get ref to dynamic content
const guidanceOneElement = document.querySelector("#guidanceOneElement");
const guidanceTwoElement = document.querySelector("#guidanceTwoElement");
const guidanceThreeElement = document.querySelector("#guidanceThreeElement");
const guidanceFourElement = document.querySelector("#guidanceFourElement");
const variableGuidanceElement = document.querySelector(
  "#variableGuidanceElement"
);
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");
const tagLineElement = document.querySelector("#tagLineElement");

const textAreaTheValue = document.querySelector("#textArea-theValue");
const textAreaWhyImportant = document.querySelector("#textArea-whyImportant");
const textAreaIdeaOne = document.querySelector("#textArea-ideaOne");
const textAreaIdeaTwo = document.querySelector("#textArea-ideaTwo");
const textAreaIdeaThree = document.querySelector("#textArea-ideaThree");

//Listen for events
backButton.addEventListener("click", (e) => {
  loadPage(currentPageIndex - 1);
});

nextButton.addEventListener("click", (e) => {
  loadPage(currentPageIndex + 1);
});

//List for textarea changes
textAreaTheValue.addEventListener("input", function () {
  workShopExersice[modes[currentPageIndex]]["theValue"]["answer"] = this.value;
});

textAreaWhyImportant.addEventListener("input", function () {
  workShopExersice[modes[currentPageIndex]]["whyImportant"]["answer"] =
    this.value;
});

textAreaIdeaOne.addEventListener("input", function () {
  workShopExersice[modes[currentPageIndex]]["threeIdeas"]["answer1"] =
    this.value;
});
textAreaIdeaTwo.addEventListener("input", function () {
  workShopExersice[modes[currentPageIndex]]["threeIdeas"]["answer2"] =
    this.value;
});
textAreaIdeaThree.addEventListener("input", function () {
  workShopExersice[modes[currentPageIndex]]["threeIdeas"]["answer3"] =
    this.value;
});

//On page load set the default content
function initialisePage() {
  guidanceOneElement.innerHTML = workShopExersice.instructions;
  guidanceTwoElement.innerHTML = workShopExersice.most.instructions;
  guidanceThreeElement.innerHTML = workShopExersice.most.theValue.question;
  guidanceFourElement.innerHTML = workShopExersice.most.whyImportant.question;
}

//User has selected another page so change it!
function loadPage(pageIndex) {
  pageIndex =
    pageIndex < 0
      ? 0
      : pageIndex >= modes.length
      ? modes.length - 1
      : pageIndex;

  currentPageIndex = pageIndex;

  //Set the required variable question

  //Variable guidance
  variableGuidanceElement.innerHTML =
    workShopExersice[modes[pageIndex]]["instructions"];

  //Tag line at bottom of page
  tagLineElement.innerHTML = workShopExersice[modes[pageIndex]]["tagLine"];

  //The Value
  textAreaTheValue.value =
    workShopExersice[modes[pageIndex]]["theValue"]["answer"];

  //Why important
  textAreaWhyImportant.value =
    workShopExersice[modes[pageIndex]]["whyImportant"]["answer"];

  //Three ideas
  textAreaIdeaOne.value =
    workShopExersice[modes[pageIndex]]["threeIdeas"]["answer1"];

  textAreaIdeaTwo.value =
    workShopExersice[modes[pageIndex]]["threeIdeas"]["answer2"];

  textAreaIdeaThree.value =
    workShopExersice[modes[pageIndex]]["threeIdeas"]["answer3"];

  //Sort buttons out.
  if (pageIndex > 0) {
    backButton.classList.remove("opacity-0");
  } else {
    backButton.classList.add("opacity-0");
  }

  if (pageIndex < modes.length - 1) {
    nextButton.classList.remove("opacity-0");
  } else {
    nextButton.classList.add("opacity-0");
  }
}

initialisePage();
loadPage(currentPageIndex);
