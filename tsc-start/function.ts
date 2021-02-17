let z = 100

function add(x,y) {
    return x+y;
}

let addToZ = function(x,y) {
    return add(x,y) + z
}

let getMilk: (bottles: number) => void = function (n: number) {  
        console.log("leaveHouse");
        console.log("moveRight");
        console.log("moveRight");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveRight");
        console.log("moveRight");
        console.log(`Bought ${n} of milk`)
        console.log("moveLeft");
        console.log("moveLeft");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveLeft");
        console.log("moveLeft");
        console.log("enterHouse");
}

console.log(add(10,20))
console.log(addToZ(10,20))
getMilk(90)
