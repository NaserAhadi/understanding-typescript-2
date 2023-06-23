"use strict";
let userInput;
let userName;
userInput = 5;
userName = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, codeError: code };
}
console.log(555);
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("clicked");
});
//# sourceMappingURL=app.js.map