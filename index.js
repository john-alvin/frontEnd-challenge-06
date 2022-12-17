"use strict";

const btn = document.querySelectorAll(".btn");
const inputBill = document.querySelector(".bills-box");
const numberOfPeople = document.querySelector(".number-people-box");
const reset = document.querySelector(".reset");
const displayTip = document.querySelector(".tip-person");
const displayTotal = document.querySelector(".tip-total");
const error = document.querySelectorAll(".error");

let value = {
  people: 0,
  bill: 200,
};
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    // tip percentage for the bill
    let tip = parseFloat((btn[i].value / 100) * inputBill.value);
    let tipAmount = parseFloat(tip / parseInt(numberOfPeople.value));

    console.log(typeof inputBill.value);

    for (let i = 0; i < error.length; i++) {
      if (tip === 0) {
        error[i].classList.remove("hidden");
      } else {
        error[i].classList.add("hidden");
        console.log(tip);
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
