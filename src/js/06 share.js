"use strict";

const createBtn = document.querySelector(".js-create-btn");
const cardResultElement = document.querySelector(".js-card-result");
const hiddenElement = document.querySelector(".js-hidden-div");
const twitterBtnElement = document.querySelector(".js-twitter");
function handleCreateBtn(ev) {
  ev.preventDefault();
  const url = "https://awesome-profile-cards.herokuapp.com/card";
  const data = getUserData();
  hiddenElement.classList.remove("comparte__nav2--hidden");
  if (data.name === "") {
    cardResultElement.innerHTML = "Introduce tu nombre";
  } else if (data.job === "") {
    cardResultElement.innerHTML = "Introduce tu puesto";
  } else if (data.photo === "") {
    cardResultElement.innerHTML = "Adjunta tu foto";
  } else if (data.email === "") {
    cardResultElement.innerHTML = "Introduce tu email";
  } else if (data.linkedin === "") {
    cardResultElement.innerHTML = "Introduce el enlace de tu linkedin";
  } else if (data.github === "") {
    cardResultElement.innerHTML = "Introduce tu usuario de github";
  } else {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(handleData)
      .then(disableBtn);
  }
}
createBtn.addEventListener("click", handleCreateBtn);
function disableBtn() {
  createBtn.disabled = true;
}

function handleData(data) {
  if (data.success === true) {
    cardResultElement.innerHTML = data.cardURL;
    cardResultElement.href = data.cardURL;
    twitterBtnElement.href = `https://twitter.com/intent/tweet?text=Mi%20nueva%20tarjeta%20${data.cardURL}`;
  } else {
    cardResultElement.innerHTML = data.error;
  }
}
