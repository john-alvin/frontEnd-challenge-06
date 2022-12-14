"use strict";

const btn = document.querySelectorAll(".btn");
const inputBill = document.querySelector(".bills-box");
const numberOfPeople = document.querySelector(".number-people-box");
const reset = document.querySelector(".reset");
const displayTip = document.querySelector(".tip-money");
const displayTotal = document.querySelector(".total-tip");
const error = document.querySelectorAll(".error");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    // tip percentage for the bill
    let tip = (btn[i].value / 100) * inputBill.value;

    // tip amount per person
    let tipAmount = tip / numberOfPeople.value;

    // total bill for each person
    let totalForPerson = parseInt(inputBill.value) + tip;

    if (isNaN(tipAmount) && isNaN(totalForPerson)) {
      for (let i = 0; i < error.length; i++) {
        error[i].classList.remove("hidden");
      }
    } else {
      displayTip.textContent = tipAmount.toFixed(2);
      displayTotal.textContent = totalForPerson;
    }
  });
}
