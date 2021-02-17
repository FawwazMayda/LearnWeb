"use strict";
function handleSound(key) {
    buttonAnimation(key);
    switch (key) {
        case "w":
            console.log("w");
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "s":
            console.log("s");
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "a":
            console.log("a");
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            console.log("d");
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            console.log("j");
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            console.log("k");
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            console.log("l");
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
    }
}
function handleClick() {
    var thisElem = this;
    handleSound(thisElem.innerHTML);
}
function handleKeyPressed(e) {
    console.log(e.key);
    handleSound(e.key);
}
function buttonAnimation(keyTriggered) {
    var activeButton = document.querySelector("." + keyTriggered);
    activeButton === null || activeButton === void 0 ? void 0 : activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton === null || activeButton === void 0 ? void 0 : activeButton.classList.remove("pressed");
    }, 2000);
}
function add(a, b) {
    var c = 0;
    if (a >= 0) {
        for (var i = 1; i <= a; i++) {
            c += 1;
        }
    }
    else {
        for (var i = 1; i <= -a; i++) {
            c -= 1;
        }
    }
    if (b >= 0) {
        for (var i = 1; i <= b; i++) {
            c += 1;
        }
    }
    else {
        for (var i = 1; i <= -b; i++) {
            c -= 1;
        }
    }
    return c;
}
function mul(a, b) {
    var c = 0;
    for (var i = 1; i <= b; i++) {
        c = add(c, a);
    }
    return c;
}
function subs(a, b) {
    return add(a, -b);
}
function divide(a, b) {
    return a / b;
}
function operator(a, b, op) {
    return op(a, b);
}
var buttonList = document.querySelectorAll("button");
buttonList.forEach(function (btn) {
    btn.addEventListener("click", handleClick);
});
document.addEventListener("keyup", handleKeyPressed);
console.log(operator(6, 3, add));
console.log(operator(-2, 4, add));
console.log(operator(3, 7, subs));
console.log(operator(4, 5, mul));
