"use strict";
const paletteElements = document.querySelectorAll(".js-palette");
const cardElement = document.querySelector(".js-card");

function handlePalette() {
  cardElement.classList.remove("palette01", "palette02", "palette03");
  const checkedPalette = document.querySelector(".js-palette:checked");
  const checkedPaletteValue = checkedPalette.value;
  cardElement.classList.add("palette" + checkedPaletteValue);
  userData.palette = checkedPaletteValue;
  saveInLocalStorage();
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener("click", handlePalette);
}
