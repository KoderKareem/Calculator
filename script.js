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

let firstNum;
let operators;
let secondNum;
let nextValue
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

  // return divide(firstNum, secondNum);
}
// console.log(operate(2, "-", 5));
// console.log(operate(2, "*", 5));
// console.log(operate(2, "/", 5));
// console.log(operate(2, "+", 5));
let displayContent = document.querySelector("#displayContent");
let currentNumber = "";
// let currentNumber2 = "";
let currentDiv = document.createElement("div");
// let currentDiv2 = document.createElement("div");
// update the content of zero
let zero = document.querySelector("#zero");
zero.addEventListener("click", updateZero);

function updateZero(e) {
  currentNumber += zero.textContent;
  currentDiv.textContent = currentNumber;
  displayContent.appendChild(currentDiv);
}

// update the content of one
let one = document.querySelector("#one");
one.addEventListener("click", updateOne);

function updateOne(e) {
  currentNumber += one.textContent;
  currentDiv.textContent = currentNumber;
  displayContent.appendChild(currentDiv);
}

// update the content of two
let two = document.querySelector("#two");
two.addEventListener("click", updateTwo);

function updateTwo(e) {
  currentNumber += two.textContent;
  currentDiv.textContent = currentNumber;
  displayContent.appendChild(currentDiv);
}

// update the content of three
let three = document.querySelector("#three");
three.addEventListener("click", updateThree);

function updateThree(e) {
  currentNumber += three.textContent;
  currentDiv.textContent = currentNumber;
  displayContent.appendChild(currentDiv);
}

// update the content of three
let four = document.querySelector("#four");
four.addEventListener("click", updateFour);

function updateFour(e) {
  currentNumber += four.textContent;
  currentDiv.textContent = currentNumber;
  displayContent.appendChild(currentDiv);
}

// update the content of five
let five = document.querySelector("#five");
five.addEventListener("click", updateFive);

function updateFive(e) {
  currentNumber += five.textContent;
  currentDiv.textContent = currentNumber;
  displayContent.appendChild(currentDiv);
}

// update the content of six
let six = document.querySelector("#six");
six.addEventListener("click", updateSix);

function updateSix(e) {
  currentNumber += six.textContent;
  currentDiv.textContent = currentNumber;
  displayContent.appendChild(currentDiv);
}

// update the content of seven
let seven = document.querySelector("#seven");
seven.addEventListener("click", updateSeven);

function updateSeven(e) {
  currentNumber += seven.textContent;
  currentDiv.textContent = currentNumber;
  displayContent.appendChild(currentDiv);
}

// update the content of eight
let eight = document.querySelector("#eight");
eight.addEventListener("click", updateEight);

function updateEight(e) {
  currentNumber += eight.textContent;
  currentDiv.textContent = currentNumber;
  displayContent.appendChild(currentDiv);
}

// update the content of nine
let nine = document.querySelector("#nine");
nine.addEventListener("click", updateNine);

function updateNine(e) {
  currentNumber += nine.textContent;
  currentDiv.textContent = currentNumber;
  displayContent.appendChild(currentDiv);
}
// Store to first Number when an operator button is clicked
let addBtn = document
  .querySelector("#addition")
  addBtn.addEventListener("click", storeToFirstNum);

let subBtn = document
  .querySelector("#subtraction")
  .addEventListener("click", storeToFirstNum);

let divideBtn = document
  .querySelector("#division")
  .addEventListener("click", storeToFirstNum);

let multiplyBtn = document
  .querySelector("#multiplication")
  .addEventListener("click", storeToFirstNum);

function storeToFirstNum() {
  firstNum = currentDiv.textContent;
  currentDiv.textContent = "";
  currentNumber = "";
}


// addBtn.querySelector('click', addTofirst)

function addTofirst(e) {
  
  firstNum = currentDiv.textContent;
  currentDiv.textContent = "";
  currentNumber = "";
  let convertFirstNum = parseInt(firstNum);
  let convertSecondNum = parseInt(secondNum);
  let result = operate(convertFirstNum, '+', convertSecondNum)
  currentDiv.textContent = `= ${result}`
  displayContent.appendChild(currentDiv);
    
  // Update firstNum for subsequent operations
  // firstNum = result;

 
  console.log(result);
  
}

//store number to second number
let equal = document.querySelector("#equal");

equal.addEventListener("click", storeToSecondNum);

function storeToSecondNum(e) {
  secondNum = currentDiv.textContent;
  currentDiv.textContent = "";
  currentNumber = "";
}

// clear button
const clear = document.querySelector("#clear");
clear.addEventListener("click", clearNumber);

function clearNumber() {
  currentDiv.remove(currentDiv);
  currentDiv.textContent = "";
  currentNumber = "";
}

// update the content of addition operator
let addition = document.querySelector("#addition");
addition.addEventListener("click", updateAddOperator);
function updateAddOperator(e) {
  operators = addition.textContent;

  console.log(operators);
}
// addition.addEventListener("click", AddOperator);
// function AddOperator(e) {
//   if (secondNum != null) {
//     let convertFirstNum = parseInt(firstNum);
//     let convertSecondNum = parseInt(secondNum);
//     newEqual.textContent = `${
//       "= " + operate(convertFirstNum, "+", convertSecondNum)
//     }`;
//     displayContent.appendChild(newEqual);
//     firstNum = newEqual.textContent;
//     let newAdd = document.createElement("div");
//     newAdd.textContent = operators;

//     console.log(operate(convertFirstNum, "+", convertSecondNum));
//   }
// }
// update the content of operator
let subtraction = document.querySelector("#subtraction");
subtraction.addEventListener("click", updateSubtractOperator);
function updateSubtractOperator(e) {
  operators = subtraction.textContent;

currentDiv.textContent = operators;
  displayContent.appendChild(currentDiv);
  console.log(operators);
}

let division = document.querySelector("#division");
division.addEventListener("click", updateDivisionOperator);
function updateDivisionOperator(e) {
  operators = division.textContent;
  currentDiv.textContent = operators;
  displayContent.appendChild(currentDiv)

  console.log(operators);
}

let multiplication = document.querySelector("#multiplication");
multiplication.addEventListener("click", updateMultiplicationOperator);
function updateMultiplicationOperator(e) {
  operators = multiplication.textContent;
  currentDiv.textContent = operators;
  displayContent.appendChild(currentDiv)
}

equal = document.querySelector("#equal");
equal.addEventListener("click", total);
let convertFirstNum = parseInt(firstNum);
let convertSecondNum = parseInt(secondNum);

function total(e) {
  if (operators === "+") {
    let convertFirstNum = parseInt(firstNum);
    let convertSecondNum = parseInt(secondNum);
    let result = operate(convertFirstNum, '+', convertSecondNum)
    currentDiv.textContent = `= ${result}`
    displayContent.appendChild(currentDiv);
console.log(result)
    firstNum = result
    
  } else if (operators === "-") {
    let convertFirstNum = parseInt(firstNum);
    let convertSecondNum = parseInt(secondNum);
    currentDiv.textContent = `${
      "= " + operate(convertFirstNum, "-", convertSecondNum)
    }`;
    displayContent.appendChild(currentDiv);
    // firstNum = newEqual.textContent
    console.log(operate(convertFirstNum, "-", convertSecondNum));
  } else if (operators === "*") {
    let convertFirstNum = parseInt(firstNum);
    let convertSecondNum = parseInt(secondNum);
    currentDiv.textContent = `${
      "= " + operate(convertFirstNum, "*", convertSecondNum)
    }`;
    displayContent.appendChild(currentDiv);
    // firstNum = newEqual.textContent
    console.log(operate(convertFirstNum, "*", convertSecondNum));
  } else if (operators === "/") {
    let convertFirstNum = parseInt(firstNum);
    let convertSecondNum = parseInt(secondNum);
    currentDiv.textContent = `${
      "= " + operate(convertFirstNum, "/", convertSecondNum)
    }`;
    displayContent.appendChild(currentDiv);
    // firstNum = newEqual.textContent
    console.log(operate(convertFirstNum, "/", convertSecondNum));
  } else {
    return Error;
  }
}

