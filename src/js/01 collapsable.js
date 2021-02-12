"use strict";

const legendElements = document.querySelectorAll(".legend");

function handleCollapsable(event) {
  const collapsableElement = event.currentTarget.closest(".collapsable");
  collapsableElement.classList.toggle("collapsable--on");
}
for (const legendElement of legendElements) {
  legendElement.addEventListener("click", handleCollapsable);
}
