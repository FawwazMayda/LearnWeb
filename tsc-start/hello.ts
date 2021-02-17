const msg: String = "CountryBalls"
function toCapitalCase(word: String) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}
console.log(`Len: ${msg.length}`)
for(let i=0;i<msg.length;i++) {
    console.log(`${i} => ${msg[i]}`)
}
console.log(msg.slice(0,10))
console.log(msg.slice(4,6))
console.log(`Uppercase: ${msg.toUpperCase()}`)
console.log(`Locale Lowercase: ${msg.toLocaleLowerCase()}`)
console.log(`Capital Case: ${toCapitalCase(msg)}`)