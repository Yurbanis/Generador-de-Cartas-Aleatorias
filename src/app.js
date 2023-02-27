let cards = ["♦", "♥", "♠", "♣"];
let numbers = ["2", "3", "4", "5"];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  setInterval(displayCard, 1000);
};

function displayCard() {
  let singleCards = cards[Math.floor(Math.random() * cards.length)];
  let singleNumbers = numbers[Math.floor(Math.random() * numbers.length)];

  document.getElementById("imagen1").innerHTML = singleCards;
  document.getElementById("text").innerHTML = singleNumbers;
  document.getElementById("imagen2").innerHTML = singleCards;
}
