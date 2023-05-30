// function return number
function add(n1: number, n2: number) {
  return n1 + n2;
}

// void => function return nothing so its type is void
function printResult(num: number) {
  console.log("result: " + num);
}

printResult(add(5, 3));
