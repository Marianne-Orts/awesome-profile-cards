"use strict";
// const fr = new FileReader();
// const uploadBtn = document.querySelector('.js__profile-trigger');
// const fileField = document.querySelector('.js__profile-upload-btn');
// const profileImage = document.querySelector('.js__profile-image');
// const profilePreview = document.querySelector('.js__profile-preview');

const inputsTextConfig = [
  {
    inputClass: ".js-fullname",
    cardClass: ".js-fullnamePreview",
    defaultValue: "Nombre Apellidos",
    cardPrefix: "",
    cardElementAttribute: "innerHTML",
    propertyName: "name",
  },
  {
    inputClass: ".js-position",
    cardClass: ".js-positionPreview",
    defaultValue: "Front-end developer",
    cardPrefix: "",
    cardElementAttribute: "innerHTML",
    propertyName: "job",
  },
  {
    inputClass: ".js-email",
    cardClass: ".js-emailPreview",
    defaultValue: "",
    cardPrefix: "mailto:",
    cardElementAttribute: "href",
    propertyName: "email",
  },
  {
    inputClass: ".js-phone",
    cardClass: ".js-phonePreview",
    defaultValue: "",
    cardPrefix: "tel:",
    cardElementAttribute: "href",
    propertyName: "phone",
  },
  {
    inputClass: ".js-linkedin",
    cardClass: ".js-linkedinPreview",
    defaultValue: "",
    cardPrefix: "https://www.linkedin.com/in/",
    cardElementAttribute: "href",
    propertyName: "linkedin",
  },
  {
    inputClass: ".js-github",
    cardClass: ".js-githubPreview",
    defaultValue: "",
    cardPrefix: "https://www.github.com/",
    cardElementAttribute: "href",
    propertyName: "github",
  },
];

const userData = {
  photo: "",
  palette: "",
  name: "",
  job: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
};

//-------------FUNCION-----------------

function updateAllInputs() {
  // recorro los 6 inputs del array inputsTextConfig
  for (const inputText of inputsTextConfig) {
    // por cada objeto del array inputsTextConfig hago:

    // obtengo el elemento input, el origen
    const inputElement = document.querySelector(inputText.inputClass);

    // obtengo el elemento de la card, el destino
    const cardElement = document.querySelector(inputText.cardClass);

    // obtengo el valor del input
    let newValue = inputElement.value;

    userData[inputText.propertyName] = newValue; // guarda los datos de form , paleta y foto en el array

    // compruebo si tengo que usar el innerHTML
    if (inputText.cardElementAttribute === "innerHTML") {
      // compruebo si está vacío
      if (inputElement.value === "") {
        newValue = inputText.defaultValue;
      } else {
        newValue = inputElement.value;
      }

      // actualizo la tarjeta
      cardElement.innerHTML = newValue;
    }

    //href, es decir si es el email, phone, linkedin o gihtub
    else if (inputText.cardElementAttribute === "href") {
      // compruebo si está vacío
      if (inputElement.value === "") {
        newValue = "#";
      } else {
        // limpio prefijo
        newValue = newValue.replace(inputText.cardPrefix, "");

        // vuelvo a añadir el prefijo https://www.linkedin.com/in/
        newValue = inputText.cardPrefix + newValue;
      }
      // actualizo la tarjeta
      cardElement.href = newValue;
    }
    console.log("-------------------------------------------------");
  }
  saveInLocalStorage();
}

//array + listener
const inputTextElements = document.querySelectorAll(".js-input-text");
for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener("keyup", updateAllInputs);
}

// updateAllInputs();
