'use strict';

const inputsTextConfig = [
    {
        inputClass: '.js-fullname',
        cardClass: '.js-fullnamePreview',
        defaultValue: 'Nombre Apellidos',
        cardPrefix: '',
        cardElementAttribute: 'innerHTML'
    },
    {
        inputClass: '.js-position',
        cardClass: '.js-positionPreview',
        defaultValue: 'Front-end developer',
        cardPrefix: '',
        cardElementAttribute: 'innerHTML'
      },
    {
        inputClass: '.js-email',
        cardClass: '.js-emailPreview',
        defaultValue: '',
        cardPrefix: 'mailto:',
        cardElementAttribute: 'href'
    },
    {
        inputClass: '.js-phone',
        cardClass: '.js-phonePreview',
        defaultValue: '',
        cardPrefix: 'tel:',
        cardElementAttribute: 'href'
    },
    {
        inputClass: '.js-linkedin',
        cardClass: '.js-linkedinPreview',
        defaultValue: '',
        cardPrefix: 'https://www.linkedin.com/in/',
        cardElementAttribute: 'href'
    }, 
    {
        inputClass: '.js-github',
        cardClass: '.js-githubPreview',
        defaultValue: '',
        cardPrefix: 'https://www.github.com/',
        cardElementAttribute: 'href'
    } 
  ];

//-------------FUNCION-----------------

function updateAllInputs() {
    // recorro los 6 inputs del array inputsTextConfig
for (const inputText of inputsTextConfig) {
      // por cada objeto del array inputsTextConfig hago:
      console.log(
        'Empiezo una nueva iteración del for con la configuración del elemento:',
        inputText
       );
  
       // obtengo el elemento input, el origen
       const inputElement = document.querySelector(inputText.inputClass);
       console.log('Elemento del formulario:', inputText.inputClass, inputElement);
  
       // obtengo el elemento de la card, el destino
       const cardElement = document.querySelector(inputText.cardClass);
       console.log('Elemento del la tarjeta:', inputText.cardClass, cardElement);
  
       // obtengo el valor del input
       let newValue = inputElement.value;
  
       // compruebo si tengo que usar el innerHTML
    if (inputText.cardElementAttribute === 'innerHTML') {

        // compruebo si está vacío
        if (inputElement.value === '') {
          newValue = inputText.defaultValue;
        } else {
          newValue = inputElement.value;
        }
        console.log('Valor por defecto:', inputText.defaultValue);
        console.log('Nuevo valor a poner en la tarjeta:', newValue);

        // actualizo la tarjeta
        cardElement.innerHTML = newValue;
      }

      //href, es decir si es el email, phone, linkedin o gihtub
      else if (inputText.cardElementAttribute === 'href') {

        // compruebo si está vacío
        if (inputElement.value === '') {
          newValue = '#';
        } else {

          // limpio prefijo
          newValue = newValue.replace(inputText.cardPrefix, '');

          // vuelvo a añadir el prefijo https://www.linkedin.com/in/
          newValue = inputText.cardPrefix + newValue;
        }
        console.log('Valor del prefijo:', inputText.cardPrefix);
        console.log('Nuevo valor a poner en la tarjeta:', newValue);

        // actualizo la tarjeta
        cardElement.href = newValue;
      }
      console.log('-------------------------------------------------');
    }
  }

//array + listener
const inputTextElements = document.querySelectorAll('.js-input-text');
for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener('keyup', updateAllInputs);
}

/* updateAllInputs();   *