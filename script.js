const collapseButtonRight = document.querySelector(".collapse-button-right");
const collapseButtonLeft = document.querySelector(".collapse-button-left");
let leftIsOpen = true;
let rightIsOpen = true;

const leftContainer = document.querySelector(".left-container");
const rightContainer = document.querySelector(".right-container");
const centerContainer = document.querySelector(".center-container");

collapseButtonLeft.addEventListener("click", ()=> {
  leftContainer.classList.toggle("collapsed");
  if (leftIsOpen) {
    collapseButtonLeft.innerHTML = `<i class="fa-solid fa-angles-right"></i>`;
  } else {
    collapseButtonLeft.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;
  }
  leftIsOpen = !leftIsOpen;
})

collapseButtonRight.addEventListener("click", ()=> {
  rightContainer.classList.toggle("collapsed");
  if (rightIsOpen) {
    collapseButtonRight.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;
  } else {
    collapseButtonRight.innerHTML = `<i class="fa-solid fa-angles-right"></i>`;
  }
  rightIsOpen = !rightIsOpen;
})

function resizeCenter() {
  centerContainer.style.width = "80%";
}