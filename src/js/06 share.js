"use strict";

const createBtn = document.querySelector(".js-create-btn");
const cardResultElement = document.querySelector(".js-card-result");
const hiddenElement = document.querySelector(".js-hidden-div");
const twitterBtnElement = document.querySelector(".js-twitter");
function handleCreateBtn(ev) {
  ev.preventDefault();
  hiddenElement.classList.remove("comparte__nav2--hidden");
  console.log("Mis datos", getUserData());
  const url = "https://profileawesome.herokuapp.com/card";
  const data = getUserData();
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(handleData);
  disableBtn();
}
createBtn.addEventListener("click", handleCreateBtn);
function disableBtn() {
  createBtn.disabled = true;
}

function handleData(data){
  if (data.success === true) {
    cardResultElement.innerHTML = data.cardURL;
    cardResultElement.href = data.cardURL;
    twitterBtnElement.href = `https://twitter.com/intent/tweet?text=Mi%20nueva%20tarjeta%20${data.cardURL}`;
  } else {
    cardResultElement.innerHTML = data.error;
  }
}
