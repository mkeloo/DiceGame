// Random Numbers Generator
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Functions
function imageChange(img, randomNumber) {
    if (randomNumber === 1) {
        document.querySelector(img).src = "images/dice1.png";
    } else if (randomNumber === 2) {
        document.querySelector(img).src = "images/dice2.png";
    } else if (randomNumber === 3) {
        document.querySelector(img).src = "images/dice3.png";
    } else if (randomNumber === 4) {
        document.querySelector(img).src = "images/dice4.png";
    } else if (randomNumber === 5) {
        document.querySelector(img).src = "images/dice5.png";
    } else if (randomNumber === 6){
        document.querySelector(img).src = "images/dice6.png";
    }
}

// Function Call
imageChange(".img1", randomNumber1);
imageChange(".img2", randomNumber2);

// Winning Conditions
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Play 1 Wins"
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "🏳️ Draw! 🏳️"
} else {
    document.querySelector("h1").textContent = "Play 2 Wins 🚩"
}

// Website => https://mkeloo.github.io/DiceeGame/
