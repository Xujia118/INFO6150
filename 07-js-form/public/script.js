"use strict";

(function () {
  // Set dropmenu
  const buttonElement = document.querySelector(".nav-menu-button");
  const dropMenuElement = document.querySelector(".header-menu");

  buttonElement.addEventListener("click", function () {
    dropMenuElement.classList.toggle("open");
  });

  // Listen to submit event, required in all fields
  const formElement = document.querySelector(".register");

  // Validate Name
  const nameElement = document.querySelector("#form-name");
  const nameRequiredReminder = document.querySelector("#name-required");

  nameElement.addEventListener("input", (event) => {
    const name = event.target.value;
    if (name) {
      nameRequiredReminder.classList.add("off");
    } else {
      nameRequiredReminder.classList.remove("off");
    }
  });

  formElement.addEventListener("submit", (event) => {
    const name = nameElement.value;
    if (name === "") {
      nameRequiredReminder.classList.remove("off");
      event.preventDefault();
    } else {
      nameRequiredReminder.classList.add("off");
    }
  });

  // Validate Email
  const emailInput = document.querySelector("#form-email");
  const emailRequiredReminder = document.querySelector("#email-required");

  formElement.addEventListener("submit", (event) => {
    const email = emailInput.value;
    if (email === "") {
      emailRequiredReminder.innerText = "Please enter your email";
      event.preventDefault();
    } else {
      emailRequiredReminder.innerText = "";
    }
  });

  // Validate ConfirmEmail
  const confirmEmailInput = document.querySelector("#confirm-email");
  const confirmEmailReminder = document.querySelector(
    "#confirm-email-required"
  );

  formElement.addEventListener("submit", (event) => {
    const email = emailInput.value;
    const confirmEmail = confirmEmailInput.value;

    if (email != confirmEmail) {
      confirmEmailReminder.innerText = "Emails must match";
      event.preventDefault();
    } else {
      confirmEmailReminder.innerText = "";
    }
  });
})();
