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
