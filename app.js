var userInput;
var userName;
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
generateError("An error occured", 500);
