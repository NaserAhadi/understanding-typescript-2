// function return number
function add(n1: number, n2: number) {
  return n1 + n2;
}

// void => function return nothing so its type is void
function printResult(num: number) {
  console.log("result: " + num);
}

printResult(add(5, 3));

let variableWithFunctionType: Function;
// it's ok
variableWithFunctionType = add;

// get error because 'number' is not assignable to 'Function'
// variableWithFunctionType = 5;

// get undefined because printResult take one number parameter and return nothing
variableWithFunctionType = printResult;
console.log(variableWithFunctionType(9, 9));

// function type: combineValue has a function type which take two number parameter and return number
let combineValue: (a: number, b: number) => number;

combineValue = add;
// get error: 'void' is not assignable to type 'number'
// combineValue = printResult;

// get error: 'number' is not assignable to '(a: number, b: number) => number'
// combineValue = 5;

console.log(combineValue(8, 8));

// callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
