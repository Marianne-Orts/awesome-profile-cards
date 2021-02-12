"use strict";

function getUserData() {
  return {
    photo: photo,
    palette: parseInt(document.querySelector('.js-palette:checked').value),
    name: document.querySelector('.js-fullname').value,
    job: document.querySelector('.js-position').value,
    email: document.querySelector('.js-email').value,
    phone: document.querySelector('.js-phone').value,
    linkedin: document.querySelector('.js-linkedin').value,
    github: document.querySelector('.js-github').value
  };
}
function saveInLocalStorage() {
  const userDataInString = JSON.stringify(userData);
  localStorage.setItem("userData", userDataInString);
}
function getFromLocalStorage() {
  const userDataInString = localStorage.getItem("userData");
  if (userDataInString !== null) {
    const userData = JSON.parse(userDataInString);
    document.querySelector(".js-fullname").value = userData.name;
    document.querySelector(".js-position").value = userData.job;
    document.querySelector(".js-email").value = userData.email;
    document.querySelector(".js-phone").value = userData.phone;
    document.querySelector(".js-linkedin").value = userData.linkedin;
    document.querySelector(".js-github").value = userData.github;
    photo = userData.photo;
    const paletteElements = document.querySelectorAll(".js-palette");
    for (const paletteElement of paletteElements) {
      if (paletteElement.value === userData.palette) {
        paletteElement.checked = true;
      }
    }
    updateAllInputs();
    handlePalette();
    updatePhoto();
  } else {
    document.querySelector(".js-fullname").value = userData.name;
    document.querySelector(".js-position").value = userData.job;
    document.querySelector(".js-email").value = userData.email;
    document.querySelector(".js-phone").value = userData.phone;
    document.querySelector(".js-linkedin").value = userData.linkedin;
    document.querySelector(".js-github").value = userData.github;
    photo = userData.photo;
    const paletteElements = document.querySelectorAll(".js-palette");
    for (const paletteElement of paletteElements) {
      if (paletteElement.id === "paletteOne") {
        paletteElement.checked = true;
      } else {
        paletteElement.checked = false;
      }
    }
    updateAllInputs();
    handlePalette();
    updatePhoto();
  }
}
getFromLocalStorage();
