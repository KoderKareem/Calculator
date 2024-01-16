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

function operate(firstNum, operator, secondNum) {
  switch(operator){
    case '+':
        return firstNum + secondNum;
    case '-':
        return firstNum - secondNum;
    case '*':
        return firstNum * secondNum;
    case '/':
        return firstNum /   secondNum;
        
    default: 
    return 'Invalid Operator'
  }

  // return divide(firstNum, secondNum);
}
console.log(operate(2, '-', 5));
console.log(operate(2, '*', 5));
console.log(operate(2, '/', 5));
console.log(operate(2, '+', 5));

// update the content of zero
let zero = document.querySelector('#zero')
zero.addEventListener('click', updateZero)

function updateZero(e){
    if(firstNum == null){
        firstNum = zero.textContent;
        console.log(firstNum)
    } else if(secondNum == null){
        secondNum = zero.textContent
        console.log('I am second')

    }
}

 // update the content of one
let one = document.querySelector('#one')
one.addEventListener('click', updateOne)

function updateOne(e){
    if(firstNum == null){
        firstNum = one.textContent;
        console.log(firstNum)
    } else if(secondNum == null){
        secondNum = one.textContent
        console.log('I am second')

    }
}

 // update the content of two
let two = document.querySelector('#two')
two.addEventListener('click', updateTwo)

function updateTwo(e){
    if(firstNum == null){
        firstNum = two.textContent;
        console.log(firstNum)
    } else if(secondNum == null){
        secondNum = two.textContent
        console.log('I am second')

    }

}


     // update the content of operator
     let addition = document.querySelector('#addition')
     addition.addEventListener('click', updateOperator)
function updateOperator(e){
    operators = addition.textContent
    console.log(operators)
}