//Function return types and void
function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 10));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
