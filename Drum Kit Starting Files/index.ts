function handleSound(key: string) {
    buttonAnimation(key)
    switch (key) {
        case "w":
            console.log("w")
            var audio = new Audio("./sounds/crash.mp3")
            audio.play()
            break;
        case "s":
            console.log("s")
            var audio = new Audio("./sounds/kick-bass.mp3")
            audio.play()
            break;
        case "a":
            console.log("a")
            var audio = new Audio("./sounds/snare.mp3")
            audio.play()
            break;
        case "d":
            console.log("d")
            var audio = new Audio("./sounds/tom-1.mp3")
            audio.play()
            break
        case "j":
            console.log("j")
            var audio = new Audio("./sounds/tom-2.mp3")
            audio.play()
            break
        case "k":
            console.log("k")
            var audio = new Audio("./sounds/tom-3.mp3")
            audio.play()
            break
        case "l":
            console.log("l")
            var audio = new Audio("./sounds/tom-4.mp3")
            audio.play()
            break
    }
}

function handleClick(this: any) {
    var thisElem = this as HTMLElement
    handleSound(thisElem.innerHTML)
}

function handleKeyPressed(e: KeyboardEvent) {
    console.log(e.key)
    handleSound(e.key)
}

function buttonAnimation(keyTriggered: string) {
    var activeButton = document.querySelector(`.${keyTriggered}`)
    activeButton?.classList.add("pressed")
    setTimeout(() => {
        activeButton?.classList.remove("pressed")
    },2000)
}

function add(a: number, b: number): number {
    var c = 0;
    if (a >= 0) {
        for (var i = 1; i <= a; i++) {
            c += 1;
        }
    } else {
        for (var i = 1; i <= -a; i++) {
            c -= 1;
        }
    }

    if (b >= 0) {
        for (var i = 1; i <= b; i++) {
            c += 1;
        }
    } else {
        for (var i = 1; i <= -b; i++) {
            c -= 1;
        }
    }
    return c
}

function mul(a: number, b: number): number {
    var c = 0
    for (var i = 1; i <= b; i++) {
        c = add(c, a)
    }
    return c
}

function subs(a: number, b: number): number {
    return add(a, -b)
}

function divide(a: number, b: number): number {
    return a / b
}

function operator(a: number, b: number, op: (x: number, y: number) => number) {
    return op(a, b)
}

var buttonList = document.querySelectorAll("button")
buttonList.forEach((btn) => {
    btn.addEventListener("click", handleClick)
})

document.addEventListener("keyup", handleKeyPressed)

console.log(operator(6, 3, add))
console.log(operator(-2, 4, add))
console.log(operator(3, 7, subs))
console.log(operator(4, 5, mul))