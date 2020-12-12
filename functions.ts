//Function return types and void

function add(num1: number, num2: number) {
  return num1 + num2
}

function printResult(num: number) {
  console.log("Result: " + num)
}

printResult(add(5,10))

//Callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

addAndHandle(10, 10, (result) => {
  console.log(result)
})

//Function types

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8,8))