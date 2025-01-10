/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let simbols = ["♣", "♦", "♥", "♠"];
let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

function generateCard() {
  let randomSimbolIndex = Math.floor(Math.random() * simbols.length);
  let randomNumberIndex = Math.floor(Math.random() * numbers.length);
  document.querySelector("#cardSimbolTop").innerHTML =
    simbols[randomSimbolIndex];
  document.querySelector("#cardSimbolBottom").innerHTML =
    simbols[randomSimbolIndex];
  document.querySelector("#cardNumber").innerHTML = numbers[randomNumberIndex];
  let simbolColor =
    simbols[randomSimbolIndex] == "♦" || simbols[randomSimbolIndex] == "♥"
      ? "text-danger"
      : "text-dark";
  document.querySelector("#cardSimbolTop").className = simbolColor;
  document.querySelector("#cardSimbolBottom").className = simbolColor;
}
window.onload = function() {
  generateCard();
  document
    .querySelector("#shuffleCard")
    .addEventListener("click", generateCard);
};
