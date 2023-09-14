const collapseButtonRight = document.querySelector(".collapse-button-right");
const collapseButtonLeft = document.querySelector(".collapse-button-left");
let leftIsOpen = true;
let rightIsOpen = true;

const leftContainer = document.querySelector(".left-container");
const rightContainer = document.querySelector(".right-container");
const centerContainer = document.querySelector(".center-container");

collapseButtonLeft.addEventListener("click", ()=> {
  leftContainer.classList.toggle("collapsed");
})

collapseButtonRight.addEventListener("click", ()=> {
  rightContainer.classList.toggle("collapsed");
})

function resizeCenter() {
  centerContainer.style.width = "80%";
}