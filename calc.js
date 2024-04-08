let number1 = "";
let number2 = "";
let operator = "";
let resultvalue = "";

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  if (b === 0) {
    console.log("invalid error");
    return "Error";
  }
  return a / b;
}
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return sum(a, b);
    case "-":
      return sub(a, b);
    case "*":
      return mul(a, b);
    case "/":
      return div(a, b);
    default:
      return "invalid input ";
  }
}

function cleardisplay() {
    resultvalue = "";
  document.getElementById("result").value = resultvalue;
}

function appendvalue(digit) {
    resultvalue += digit;
  document.getElementById("result").value = resultvalue;
}
function chooseOperator(selectedOperator) {
  if (operator !== "" && number2 === "") {
    operator = selectedOperator;
    return;
  }
  
   else {
    number1 = resultvalue;
    operator = selectedOperator;
    resultvalue = "";
  }
}
function calculate() {
  if (number1 !== "" && operator !== "" && resultvalue !== "") {
    number2 = parseFloat(resultvalue);
    const result = operate(
      operator,
      parseFloat(number1),
      parseFloat(number2)
    );
    resultvalue = result.toString();
    document.getElementById("result").value = resultvalue;
    number1 = "";
    operator = "";
    number2 = "";
  }
}

