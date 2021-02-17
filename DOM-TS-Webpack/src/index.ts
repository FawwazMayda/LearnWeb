import {title} from "./msg"
import './style.css'
console.log(title)
let h1Elem = document.createElement("h1")
let imgElem = document.createElement("img")
h1Elem.innerText = title
imgElem.src = "https://i.pinimg.com/originals/f1/b7/7a/f1b77afa7a136a0bd8c48d23bd88212b.png"
document.body.appendChild(imgElem)
document.body.appendChild(h1Elem)