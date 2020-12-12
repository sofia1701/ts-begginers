//Function return types and void

function add(num1: number, num2: number) {
  return num1 + num2
}

function printResult(num: number) {
  console.log("Result: " + num)
}

printResult(add(5,10))

//Function types

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8,8))