//Function return types and void
function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 10));
//Callbacks
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 10, function (result) {
    console.log(result);
});
//Function types
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
