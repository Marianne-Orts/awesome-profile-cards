"use strict";
//solo afecta a diseña pq al efectar a legend solo afecta al primer hijo.
const legendDesignElement = document.querySelector(".legend__design");
const legendRellenaElement = document.querySelector(".legend__rellena");
const legendComparteElement = document.querySelector(".legend__comparte");
const collapsableElement = document.querySelector(".collapsable");

function handleCollapsable() {
  collapsableElement.classList.toggle("collapsable--on");
}

legendDesignElement.addEventListener("click", handleCollapsable);
legendRellenaElement.addEventListener("click", handleCollapsable);
legendComparteElement.addEventListener("click", handleCollapsable);
