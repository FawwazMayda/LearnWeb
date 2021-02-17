"use strict";
// basic Jquery
$("h1").click(function () {
    console.log("h1 clicked");
    $("h1").fadeOut();
    setTimeout(function () {
        $("h1").fadeIn();
    }, 1000);
});
$("h2").click(function () {
    console.log("h2 clicked");
    $("h2").hide();
    setTimeout(function () {
        $("h2").show();
    }, 1000);
});
$("#frame").click(function () {
    console.log("frame clicked");
});
$("#frame").css("color", "orange");
$("p").text("new text in P");
//add Image
var imgElem = document.createElement("img");
$("body").append(imgElem);
$("img").attr("src", "https://i.ytimg.com/vi/5MJPBogBTPE/maxresdefault.jpg");
//add Button
function onClickButton(p) {
    $("img").css("width", p + "px");
    $("img").css("height", p + "px");
}
var pixel = [400, 500, 800, 1000];
pixel.forEach(function (p) {
    var buttonElem = document.createElement("button");
    buttonElem.id = p + "p";
    buttonElem.innerText = p + "p";
    buttonElem.addEventListener("click", function () {
        console.log("Should be " + p + " pixel");
        onClickButton(p);
    });
    $("img").before(buttonElem);
});
$("img").before("<br>");
//Change text in DIV
var tempText = "";
$("body").keypress(function (event) {
    tempText += event.key;
    $("#target-text").text(tempText);
});
