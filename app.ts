//Unknown, Never types

//Unknown
let userInput: unknown;
let userName: string;

userInput = "sofi";
userInput = 5;

if(typeof userInput === 'string') {
  userName = userInput
}

//Never - Never produces a value
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
}

const result = generateError('An error occured', 500)
console.log(result)