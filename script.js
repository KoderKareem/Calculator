function add(firstNum, secondNum) {
  return firstNum + secondNum;
}
function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

let firstNum = "";
let operator = "";
let secondNum = "";
let currentDiv = document.createElement("div");
let displayContent = document.querySelector("#displayContent");

// Number buttons
let numbers = document.querySelectorAll("#number");
numbers.forEach((number) => {
  number.addEventListener("click", updateNumber);
});

function updateNumber(e) {
  currentNum = e.target.textContent;
  currentDiv.textContent += currentNum;
  displayContent.appendChild(currentDiv);
}
let body = document.querySelector("body");

// body.forEach((number) => {
body.addEventListener("keydown", (ev) => {
  switch (ev.key) {
    case "1":
      currentNum = ev.key;
      currentDiv.textContent += currentNum;
      displayContent.appendChild(currentDiv);
      break;
    case "2":
      currentNum = ev.key;
      currentDiv.textContent += currentNum;
      displayContent.appendChild(currentDiv);
      break;
    case "3":
      currentNum = ev.key;
      currentDiv.textContent += currentNum;
      displayContent.appendChild(currentDiv);
      break;
    case "4":
      currentNum = ev.key;
      currentDiv.textContent += currentNum;
      displayContent.appendChild(currentDiv);
      break;
    case "5":
      currentNum = ev.key;
      currentDiv.textContent += currentNum;
      displayContent.appendChild(currentDiv);
      break;
    case "6":
      currentNum = ev.key;
      currentDiv.textContent += currentNum;
      displayContent.appendChild(currentDiv);
      break;
    case "7":
      currentNum = ev.key;
      currentDiv.textContent += currentNum;
      displayContent.appendChild(currentDiv);
      break;
    case "8":
      currentNum = ev.key;
      currentDiv.textContent += currentNum;
      displayContent.appendChild(currentDiv);
      break;
    case "9":
      currentNum = ev.key;
      currentDiv.textContent += currentNum;
      displayContent.appendChild(currentDiv);
      break;
    case "0":
      currentNum = ev.key;
      currentDiv.textContent += currentNum;
      displayContent.appendChild(currentDiv);
      break;
    default:
      break;
  }
});
// });111
// function updateNumberKeyBoard(ev){

// }
// Operator buttons
const operators = document.querySelectorAll("#operator");
operators.forEach((op) => {
  op.addEventListener("click", handleOperator);
});

function handleOperator(e) {
  if (firstNum === "") {
    // If no firstNum, set it to the current display content
    firstNum = currentDiv.textContent;
    operator = e.target.textContent;
    // currentDiv.textContent = operator;

    // Reset the currentDiv for the second number
    currentDiv.textContent = "";
  } else {
    // If firstNum is already set, perform the previous operation and update operator
    secondNum = currentDiv.textContent;
    performOperation();
    operator = e.target.textContent;
    currentDiv.textContent = operator;
    displayContent.appendChild(currentDiv);

    // Reset the currentDiv for the new second number
    currentDiv.textContent = "";
  }
}

// Equal button
const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", performOperation);

function performOperation() {
  if (firstNum !== "" && operator !== "" && currentDiv.textContent !== "") {
    secondNum = currentDiv.textContent;
    let result = operate(parseFloat(firstNum), operator, parseFloat(secondNum));
    currentDiv.textContent = `= ${result}`;
    displayContent.appendChild(currentDiv);
    // Reset variables for the next operation
    firstNum = result.toString();
    operator = "";
    secondNum = "";
  }
}

// BackSpace button
let backSpace = document.querySelector("#backSpace");
backSpace.addEventListener("click", () => {
  currentDiv.textContent = currentDiv.textContent.slice(0, -1);
});
// Clear button
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearDisplay);

function clearDisplay() {
  currentDiv.textContent = "";
  displayContent.innerHTML = "";
  firstNum = "";
  operator = "";
  secondNum = "";
}

// operate function
function operate(firstNum, operator, secondNum) {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
    default:
      return "Invalid Operator";
  }
}
