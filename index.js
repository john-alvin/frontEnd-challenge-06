"use strict";

const btn = document.querySelectorAll(".btn");
const inputBill = document.querySelector(".bills-box");
const numberOfPeople = document.querySelector(".number-people-box");
const reset = document.querySelector(".reset");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    console.log((btn[i].value * 100) / 100);
  });
}
