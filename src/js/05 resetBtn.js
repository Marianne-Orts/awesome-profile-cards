"use strict";

function handleResetBtn() {
  resetUserData();
  resetLocalStorage();
  getFromLocalStorage();
  hiddenElement.classList.add("comparte__nav2--hidden");
}
function resetUserData() {
  (userData.photo = ""),
    (userData.palette = ""),
    (userData.name = ""),
    (userData.job = ""),
    (userData.email = ""),
    (userData.phone = ""),
    (userData.linkedin = ""),
    (userData.github = "")
}

function resetLocalStorage() {
  localStorage.removeItem("userData");
}

const resetBtnElement = document.querySelector(".js-btn-reset");
resetBtnElement.addEventListener("click", handleResetBtn);
