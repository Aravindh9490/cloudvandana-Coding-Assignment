let display = document.getElementById("display");
let currentOperand = "";
let displayNum="";
let firstOperand = null;

let operator = null;

function appendToDisplay(value) {
  currentOperand += value;
  displayNum=currentOperand
  display.value = currentOperand;
}

function clearDisplay() {
  currentOperand = '';
  firstOperand = null;
  
  operator = null;
  display.value = '';
}

function operate(op) {
  if (firstOperand === null) {
    firstOperand = parseFloat(currentOperand);
    currentOperand = currentOperand + op;
    operator = op;
    display.value=currentOperand
  } else if (currentOperand !== '') {
    firstOperand = calculate();
    currentOperand =currentOperand + op;
    operator = op;
    display.value=currentOperand
  }
}

function calculate() {
 
  result=eval(display.value)
  display.value = result;
  currentOperand = result.toString();
  firstOperand = null;
  operator = null;
  return result;
}