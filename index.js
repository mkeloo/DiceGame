// Image 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);



// Image 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

// Winning Conditions
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins"
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "🏳️ Draw! 🏳️"
} else {
    document.querySelector("h1").innerHTML = "Play 2 Wins 🚩"
}