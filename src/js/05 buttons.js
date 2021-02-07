"use strict";

function handleResetBtn() {
  resetUserData();
  console.log("estoy funcionando");
  resetLocalStorage();
  getFromLocalStorage();
}
function resetUserData() {
  (userData.photo = ""),
    (userData.palette = ""),
    (userData.name = ""),
    (userData.job = ""),
    (userData.email = ""),
    (userData.phone = ""),
    (userData.linkedin = ""),
    (userData.github = ""),
    //updateAllInputs();
    console.log("hola");
}

function resetLocalStorage() {
  localStorage.removeItem("userData");
}

const resetBtnElement = document.querySelector(".js-btn-reset");
resetBtnElement.addEventListener("click", handleResetBtn);
