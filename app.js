//Unknown, Never types
//Unknown
var userInput;
var userName;
userInput = "sofi";
userInput = 5;
if (typeof userInput === 'string') {
    userName = userInput;
}
//Never - Never produces a value
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occured', 500);
console.log(result);
