var randomNumber1 = Math.floor(6 * Math.random()) + 1;
var randomNumber2 = Math.floor(6 * Math.random()) + 1;
//Left Image
var leftImage = document.querySelector(".img1");
leftImage.setAttribute("src", "images/dice" + randomNumber1 + ".png");
//Right Image
var rightImage = document.querySelector(".img2");
rightImage.setAttribute("src", "images/dice" + randomNumber2 + ".png");
//Winning Title
var h1Elem = document.querySelector("h1");
if (randomNumber2 > randomNumber1) {
    h1Elem.innerText = "Swiss wins";
}
else {
    h1Elem.innerText = "North Korea Wins";
}
