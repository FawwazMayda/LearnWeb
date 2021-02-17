function nextNumber(): number {
  let next = Math.floor(Math.random() * buttonColor.length);
  //console.log(next);
  return next;
}

let buttonColor = ["red", "green", "blue", "yellow"];
let gamePattern: Array<string> = []
let userClickedPattern: Array<string> = []
let level: number = 0
let keyboardPressCount: number = 0

//next Level()
function nextSequence() {
  //choose random color
  let randomNumber = nextNumber()
  let randomColor = buttonColor[randomNumber]
  gamePattern.push(randomColor)
  console.log(`Game Pattern: ${gamePattern}`)

  //Level Up
  level += 1
  $("h1").text(`Level ${level}`)

  //tell user what button and the sounds
  animateForButton(randomColor)
  soundForButton(randomColor)

  //Clear user pattern
  userClickedPattern = []
  keyboardPressCount = 0
}

//check level
function checkAnswer(keyboardCount: number) {
  for (var i = 0; i < keyboardCount; i++) {
    if (userClickedPattern[i] != gamePattern[i]) {
      //game over
      soundForButton("wrong")
      restartGame()
      break
    }
  }
  if (keyboardCount == level) {
    setTimeout(nextSequence, 1000)
  }
}

//restart Game/game over
function restartGame() {
  //give a little animation
  //Setup the variable
  level = 0
  $("h1").text("Press any key to Start")
  userClickedPattern = []
  gamePattern = []
  let duration = 1000
  $("body").animate({ opacity: 0.0 }, duration)
  setTimeout(() => {
    $("body").animate({ opacity: 1.0 }, duration)
  }, duration)
}


//box animation and sounds
let duration = 300
function animateForButton(buttonTarget: string) {
  $(`#${buttonTarget}`).addClass("pressed")
  setTimeout(() => {
    $(`#${buttonTarget}`).removeClass("pressed")
  }, duration)
}

function soundForButton(buttonTarget: string) {
  var audio = new Audio(`./sounds/${buttonTarget}.mp3`);
  audio.play()
}

//log the clicked pattern

$(".btn").on("click", (event) => {
  let pressedButtonId = event.target.id
  userClickedPattern.push(pressedButtonId)
  keyboardPressCount += 1

  soundForButton(pressedButtonId)
  animateForButton(pressedButtonId)
  console.log(`User clicked pattern: ${userClickedPattern}`)
  checkAnswer(keyboardPressCount)
})

//add on keyboard press

$("body").keypress((event) => {
  if (level == 0) {
    nextSequence()
  }
})