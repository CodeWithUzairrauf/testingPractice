let a = Number(prompt("Enter a number"));
let symbols = prompt("Add an operator: + - / *");
let b = Number(prompt("Enter another number"));

function operators() {
  if (symbols === "+") {
    return a + b;
  }
  if (symbols === "-") {
    return a - b;
  }
  if (symbols === "/") {
    return a / b;
  }
  if (symbols === "*") {
    return a * b;
  }else{
  return "Invalid operator";
  }
}

console.log("Result: " + operators());