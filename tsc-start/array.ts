var guestList = ["CountryBall","CountryBos","countryball","countryBox"]
var newGuess = guestList.map((value,index,arr) => {
    console.log(arr)
    console.log(`${index} => ${value}`)
    if (value.includes("ball") || value.includes("Ball")) {
        return value
    }
})

console.log(guestList)
console.log(newGuess)