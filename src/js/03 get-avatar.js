"use strict";

const fr = new FileReader();
const uploadBtn = document.querySelector(".js__profile-trigger");
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");
let photo = "";
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  photo = fr.result;
  updatePhoto();
}
function updatePhoto() {
  const currentPhoto =
    //photo || "//localhost:3000/assets/images/image-default.jpg";
    photo ||
    "http://beta.adalab.es/Project-promo-l-module-2-team-8/assets/images/image-default.jpg";
  profilePreview.style.backgroundImage = `url(${currentPhoto})`;
  profileImage.style.backgroundImage = `url(${currentPhoto})`;
  userData.photo = photo;
  saveInLocalStorage();
}
function fakeFileClick() {
  fileField.click();
}
uploadBtn.addEventListener("click", fakeFileClick);
fileField.addEventListener("change", getImage);
