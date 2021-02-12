"use strict";

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
  for (const inputText of inputsTextConfig) {
    const inputElement = document.querySelector(inputText.inputClass);

    const cardElement = document.querySelector(inputText.cardClass);

    let newValue = inputElement.value;

    userData[inputText.propertyName] = newValue;

    if (inputText.cardElementAttribute === "innerHTML") {
      if (inputElement.value === "") {
        newValue = inputText.defaultValue;
      } else {
        newValue = inputElement.value;
      }

      cardElement.innerHTML = newValue;
    } else if (inputText.cardElementAttribute === "href") {
      if (inputElement.value === "") {
        newValue = "#";
      } else {
        newValue = newValue.replace(inputText.cardPrefix, "");

        newValue = inputText.cardPrefix + newValue;
      }

      cardElement.href = newValue;
    }
  }
  saveInLocalStorage();
}

const inputTextElements = document.querySelectorAll(".js-input-text");
for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener("keyup", updateAllInputs);
}
