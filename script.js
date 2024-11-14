'use strict'
 // idea: .find to filter out operator?
// idea: map button values to array of objects
const numbers = [
    { zero: 'zero', value: 0},
    { one: 'one', value: 1},
    { two: 'two', value: 2},
    { three: 'three', value: 3},
    { four: 'four', value: 4},
    { five: 'five', value: 5},
    { six: 'six', value: 6},
    { seven: 'seven', value: 7},
    { eight: 'eight', value: 8},
    { nine: 'nine', value: 9},
]
// .includes to check for operator

const buttons = document.querySelectorAll('div > button') /// all buttons >> extract value
///// arrays and displays
let operationArray = [];
let joinedOperation = [];
const operationArrayDisplay = document.querySelector('.input');
let sum = [];
const sumTextDisplay = document.querySelector('.sum')
///
// let newNumber = [];
let operatorVar = '';
let secondNumber = [];

// array of numbers from nodelist buttons?

function add(number1, number2) {
    return number1 + number2; 
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2; 
}

function operate(number1, number2){
    if (operatorVar === '+') {
        return add(number1, number2)
    } else if (operatorVar === '-') {
        return subtract(number1, number2)
    } else if (operatorVar === '*') {
        return multiply(number1, number2)
    } else if (operatorVar === '/') {
       return divide(number1, number2)
    }
    
}

function checkButton() {
    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            if (button.classList.contains('number') && joinedOperation <= 7) {
                operationArray.push(button.value);
                joinedOperation = Number(operationArray.join(""));
                console.log("first")
                operationArrayDisplay.textContent = joinedOperation;
            } else if (button.classList.contains('symbol')) {
                console.log(button.value);
                operationArray = [];
                operatorVar = button.value;
                // operationArrayDisplay.textContent = `${joinedOperation + operatorVar}`;
            } else if (button.classList.contains('number') && joinedOperation) {
                operationArray.push(button.value);
                secondNumber = Number(operationArray.join(""));
                console.log("second")
                // operationArray = [];
                operationArrayDisplay.textContent = secondNumber;
            } 
            })
           
        })

}

checkButton();
operate();