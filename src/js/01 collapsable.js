"use strict";
//solo afecta a diseña pq al efectar a legend solo afecta al primer hijo.
// const legendDesignElement = document.querySelector(".legend__design");
// const legendRellenaElement = document.querySelector(".legend__rellena");
// const legendComparteElement = document.querySelector(".legend__comparte");
// const collapsableElement = document.querySelector(".collapsable");

// function handleCollapsable() {

//   collapsableElement.classList.toggle("collapsable--on");

// }

// legendDesignElement.addEventListener("click", handleCollapsable);
// legendRellenaElement.addEventListener("click", handleCollapsable);
// legendComparteElement.addEventListener("click", handleCollapsable);

const legendElements = document.querySelectorAll(".legend");
// const collapsableElements = document.querySelectorAll('.collapsable');
/* console.log(legendElements[0].parentElement); */

function handleCollapsable(event) {
  const collapsableElement = event.currentTarget.closest(".collapsable");
  collapsableElement.classList.toggle("collapsable--on");
}
for (const legendElement of legendElements) {
  legendElement.addEventListener("click", handleCollapsable);
}
