"use strict";
function nextNumber() {
    var next = Math.floor(Math.random() * buttonColor.length);
    //console.log(next);
    return next;
}
var buttonColor = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var keyboardPressCount = 0;
//next Level()
function nextSequence() {
    //choose random color
    var randomNumber = nextNumber();
    var randomColor = buttonColor[randomNumber];
    gamePattern.push(randomColor);
    console.log("Game Pattern: " + gamePattern);
    //Level Up
    level += 1;
    $("h1").text("Level " + level);
    //tell user what button and the sounds
    animateForButton(randomColor);
    soundForButton(randomColor);
    //Clear user pattern
    userClickedPattern = [];
    keyboardPressCount = 0;
}
//check level
function checkAnswer(keyboardCount) {
    for (var i = 0; i < keyboardCount; i++) {
        if (userClickedPattern[i] != gamePattern[i]) {
            //game over
            soundForButton("wrong");
            restartGame();
            break;
        }
    }
    if (keyboardCount == level) {
        setTimeout(nextSequence, 1000);
    }
}
//restart Game/game over
function restartGame() {
    //give a little animation
    //Setup the variable
    level = 0;
    $("h1").text("Press any key to Start");
    userClickedPattern = [];
    gamePattern = [];
    var duration = 1000;
    $("body").animate({ opacity: 0.0 }, duration);
    setTimeout(function () {
        $("body").animate({ opacity: 1.0 }, duration);
    }, duration);
}
//box animation and sounds
var duration = 300;
function animateForButton(buttonTarget) {
    $("#" + buttonTarget).addClass("pressed");
    setTimeout(function () {
        $("#" + buttonTarget).removeClass("pressed");
    }, duration);
}
function soundForButton(buttonTarget) {
    var audio = new Audio("./sounds/" + buttonTarget + ".mp3");
    audio.play();
}
//log the clicked pattern
$(".btn").on("click", function (event) {
    var pressedButtonId = event.target.id;
    userClickedPattern.push(pressedButtonId);
    keyboardPressCount += 1;
    soundForButton(pressedButtonId);
    animateForButton(pressedButtonId);
    console.log("User clicked pattern: " + userClickedPattern);
    checkAnswer(keyboardPressCount);
});
//add on keyboard press
$("body").keypress(function (event) {
    if (level == 0) {
        nextSequence();
    }
});
