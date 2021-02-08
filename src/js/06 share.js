"use strict";

const createBtn = document.querySelector(".js-create-btn");
const cardResultElement = document.querySelector(".js-card-result");
const hiddenElement = document.querySelector(".js-hidden-div");
// twitter
const twitterBtnElement = document.querySelector(".js-twitter");
function handleCreateBtn(ev) {
  ev.preventDefault();
  hiddenElement.classList.remove("comparte__nav2--hidden");
  console.log("Mis datos", getUserData());
  const url =
    "https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/";
  const data = getUserData();
  // de momento lo dejamos aquí para comprobar hasta que el servidor funciona => cuando funciona el servidor la consatnte tendra que tener el enlace que devuelve el servidor
  const urlTweet = "https://www.wikipedia.org";
  twitterBtnElement.href = `https://twitter.com/intent/tweet?text=Mirad%20mi%20nueva%20tarjeta%20${urlTweet}`;
  
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Server response:", data);
      if (data.success === true) {
        cardResultElement.innerHTML = data.cardURL;
        cardResultElement.href = data.cardURL;
        // aqui el código final de twitter - adap[tar si queremos algún texto personalizado]
        // twitterBtnElement.href = `https://twitter.com/intent/tweet?text=${data.cardURL}`;
      } else {
        cardResultElement.innerHTML = data.error;
      }
    });
}
/*
function handleCreateBtn(ev) {
  ev.preventDefault();
  console.log('Mis datos', getUserData());

  const url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
  const data = getUserData();

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log('Server response:', data);
      if (data.success === true) {
        cardResultElement.innerHTML = data.cardURL;
      } else {
        cardResultElement.innerHTML = data.error;
      }
    });
}
*/
createBtn.addEventListener("click", handleCreateBtn);
