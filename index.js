"use strict";

const btn = document.querySelectorAll(".btn");
const inputBill = document.querySelector(".bills-box");
const numberOfPeople = document.querySelector(".number-people-box");
const reset = document.querySelector(".reset");
const displayTip = document.querySelector(".tip-person");
const displayTotal = document.querySelector(".tip-total");
const error = document.querySelectorAll(".error");
const custom = document.querySelector(".custom");

custom.addEventListener("keydown", calcTotal);
inputBill.addEventListener("keydown", calcTotal);
numberOfPeople.addEventListener("keydown", calcTotal);

function calcTotal(e) {
  if (e.key === "Enter") {
    let percentage = custom.value / 100;
    let tip = inputBill.value * percentage;
    let eachPerson = tip / numberOfPeople.value;
    let totalPerson = parseInt(inputBill.value) + eachPerson;
    displayTip.textContent = eachPerson.toFixed(2);
    displayTotal.textContent = totalPerson.toFixed(2);
  }
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    let bill = inputBill.value * 1;
    let people = numberOfPeople.value * 1;

    // tip percentage for the bill
    let tip = parseFloat((btn[i].value / 100) * bill);

    let tipAmount = parseFloat(tip / people);

    for (let i = 0; i < error.length; i++) {
      if (people === 0 && bill === 0) {
        error[i].classList.remove("hidden");
        error[i].classList.remove("hidden-people");
      } else if (bill === 0) {
        error[i].classList.remove("hidden");
      } else if (people === 0) {
        error[i].classList.remove("hidden-people");
      } else {
        error[i].classList.add("hidden");
        error[i].classList.add("hidden-people");
      }
    }

    /*
    // tip amount per person
    let tipAmount = tip / parseInt(numberOfPeople);

    // total bill for each person
    let totalForPerson = parseInt(inputBill) + tip;

    displayTip.textContent = tipAmount.toFixed(2);
    displayTotal.textContent = totalForPerson;

    if (numberOfPeople.value.people === 0) {
      console.log("zero");
    } else {
      console.log("not zero");
    }
    */
  });
}
