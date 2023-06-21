"use strict";
// function return number
function add(n1, n2) {
    return n1 + n2;
}
// void => function return nothing so its type is void
function printResult(num) {
    console.log("result: " + num);
}
printResult(add(5, 3));
let variableWithFunctionType;
// it's ok
variableWithFunctionType = add;
// get error because 'number' is not assignable to 'Function'
// variableWithFunctionType = 5;
// get undefined because printResult take one number parameter and return nothing
variableWithFunctionType = printResult;
console.log(variableWithFunctionType(9, 9));
// function type: combineValue has a function type which take two number parameter and return number
let combineValue;
combineValue = add;
// get error: 'void' is not assignable to type 'number'
// combineValue = printResult;
// get error: 'number' is not assignable to '(a: number, b: number) => number'
// combineValue = 5;
console.log(combineValue(8, 8));
// callback function
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
