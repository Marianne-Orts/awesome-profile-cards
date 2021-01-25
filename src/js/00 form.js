'use strict';

// acceso input nombre

const fullnameElement = document.querySelector('.js-fullname');
const fullnamePreviewElement = document.querySelector('.js-fullnamePreview');
const positionElement = document.querySelector('.js-position');
const positionPreviewElement = document.querySelector('.js-positionPreview');
const emailElement = document.querySelector('.js-email');
const emailPreviewElement = document.querySelector('.js-emailPreview');
const phoneElement = document.querySelector('.js-phone');
const phonePreviewElement = document.querySelector('.js-phonePreview');
const linkedinElement = document.querySelector('.js-linkedin');
const linkedinPreviewElement = document.querySelector('.js-linkedinPreview');
const githubElement = document.querySelector('.js-github');
const githubPreviewElement = document.querySelector('.js-githubPreview');


// fullname
function handleFullname(event) {
  const fullnameValue = event.target.value;

  if (fullnameValue === '') {
    fullnamePreviewElement.innerHTML = 'Nombre Apellido';
  } else {
    fullnamePreviewElement.innerHTML = fullnameValue;
  }

}

fullnameElement.addEventListener('keyup', handleFullname);

// position
function handlePosition(event) {
  const positionValue = event.target.value;

  if (positionValue === '') {
    positionPreviewElement.innerHTML = 'Front-end developer';
  } else {
    positionPreviewElement.innerHTML = positionValue;
  }

}

positionElement.addEventListener('keyup', handlePosition);

// email
function handleEmail(event) {
  const emailValue = event.target.value;

  if (emailValue === '') {
    console.log('Ask Iván');
    // emailPreviewElement.innerHTML = 'Front-end developer';
  } else {
    console.log(emailPreviewElement);
    emailPreviewElement.href = `mailto: ${emailValue}`;
  }

}

emailElement.addEventListener('keyup', handleEmail);

// phone
function handlePhone(event) {
  const phoneValue = event.target.value;

  if (phoneValue === '') {
    console.log('Ask Iván');
    // phonePreviewElement.innerHTML = 'Front-end developer';
  } else {
    console.log(phonePreviewElement);
    phonePreviewElement.href = `tel: ${phoneValue}`;
  }

}

phoneElement.addEventListener('keyup', handlePhone);

// linkedin
function handleLinkedin(event) {
  const linkedinValue = event.target.value;

  if (linkedinValue === '') {
    console.log('Ask Iván');
    // linkedinPreviewElement.innerHTML = 'Front-end developer';
  } else {
    console.log(linkedinPreviewElement);
    linkedinPreviewElement.href = linkedinValue;
  }

}

linkedinElement.addEventListener('keyup', handleLinkedin);

// github
function handleGithub(event) {
  const githubValue = event.target.value;

  if (githubValue === '') {
    console.log('Ask Iván');
    // githubPreviewElement.innerHTML = 'Front-end developer';
  } else {
    console.log(githubPreviewElement);
    githubPreviewElement.href = githubValue;
  }

}

githubElement.addEventListener('keyup', handleGithub);