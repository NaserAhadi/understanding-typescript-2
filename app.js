"use strict";
let userInput;
let userName;
userInput = 5;
userName = "Max";
// error: Type 'unknown' is not assignable to type 'string'.
// userName = userInput;
// extra assertion to assign unknown into string
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, codeError: code };
}
// generateError("An error occured", 500);
// if log the function we see it never return anything
// const result = generateError("An error occured", 500);
// console.log(result);
console.log(555);
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("clicked");
});
//# sourceMappingURL=app.js.map