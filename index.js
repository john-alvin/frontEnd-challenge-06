"use strict";

const btn = document.querySelectorAll(".btn");
const inputBill = document.querySelector(".bills-box");
const numberOfPeople = document.querySelector(".number-people-box");
const reset = document.querySelector(".reset");
const displayTip = document.querySelector(".tip-person");
const displayTotal = document.querySelector(".tip-total");
const error = document.querySelectorAll(".error");
const custom = document.querySelector(".custom");

let zero = 0;

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    let bill = inputBill.value * 1;
    let people = numberOfPeople.value * 1;

    let tip = parseInt((btn[i].value / 100) * bill);
    let tipAmount = parseInt(tip / people);
    let total = bill + tipAmount;

    displayTip.textContent = tipAmount.toFixed(2);
    displayTotal.textContent = total.toFixed(2);

    for (let i = 0; i < error.length; i++) {
      if (people === 0 && bill === 0) {
        error[i].classList.remove("hidden");
        error[i].classList.remove("hidden-people");
        displayTip.textContent = `${zero.toFixed(2)}`;
        displayTotal.textContent = `${zero.toFixed(2)}`;
      } else if (bill === 0) {
        error[i].classList.remove("hidden");
        displayTip.textContent = `${zero.toFixed(2)}`;
        displayTotal.textContent = `${zero.toFixed(2)}`;
      } else if (people === 0) {
        error[i].classList.remove("hidden-people");
        displayTip.textContent = `${zero.toFixed(2)}`;
        displayTotal.textContent = `${zero.toFixed(2)}`;
      } else {
        error[i].classList.add("hidden");
        error[i].classList.add("hidden-people");
      }
    }
  });
}

custom.addEventListener("keydown", calcTotal);
inputBill.addEventListener("keydown", calcTotal);
numberOfPeople.addEventListener("keydown", calcTotal);

function calcTotal(e) {
  if (e.key === "Enter") {
    if (custom.value >= 0 && custom.value <= 100) {
      let percentage = custom.value / 100;
      let tip = inputBill.value * percentage;
      let eachPerson = tip / numberOfPeople.value;
      let totalPerson = parseInt(inputBill.value) + eachPerson;
      displayTip.textContent = eachPerson.toFixed(2);
      displayTotal.textContent = totalPerson.toFixed(2);
    }
  }
}

reset.addEventListener("click", () => {
  inputBill.value = "";
  numberOfPeople.value = "";
  custom.value = "";
  displayTip.textContent = `${zero.toFixed(2)}`;
  displayTotal.textContent = `${zero.toFixed(2)}`;
  for (let i = 0; i < error.length; i++) {
    error[i].classList.add("hidden");
    error[i].classList.add("hidden-people");
  }
});
