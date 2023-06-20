let userInput: unknown;
let userName: string;

userInput = 5;
userName = "Max";
// error: Type 'unknown' is not assignable to type 'string'.
// userName = userInput;

// extra assertion to assign unknown into string
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, codeError: code };
}

generateError("An error occured", 500);

// if log the function we see it never return anything
// const result = generateError("An error occured", 500);
// console.log(result);
