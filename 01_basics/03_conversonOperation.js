let score  = "33"

console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)          //NaN

// notes
// "33" => 33
// "33abc" => Nan (not a number)


let isLoggedIn = "pp"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// true => 1, false => 0
// 1 => true, 0 => false
// "Praveen" => true, "" => false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))