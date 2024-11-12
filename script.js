'use strict'

const buttonAdd = document.querySelector('#add');
const buttonSubtract = document.querySelector('#subtract');
const buttonEquals = document.querySelector('#equals');
///
const numberButtons = document.querySelectorAll('div.test > button.number')
const symbolButtons = document.querySelectorAll('.symbol')
////
const operationArrayDisplay = document.querySelector('.input');
const sumTextDisplay = document.querySelector('.sum')

let sum = [];
let operationArray = [];
let newNumber = [];
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

function checkOperator() {
    symbolButtons.forEach((button) => {
        button.addEventListener('click', function() {
            if (button.value === '=') {
                console.log(operationArray);
                return operationArray;
            }
        operatorVar = button.value;
        operationArray.push(operatorVar);
        let concat = operationArray.join("");
        console.log(concat);
        operationArrayDisplay.textContent = concat;
        })
    })
};

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


numberButtons.forEach((number) => {
    number.addEventListener('click', function() {
        let newNumber = Number(number.value);
        console.log(newNumber);
        if (operationArray.length) {
            operationArray.push(newNumber)
        } 
        operationArray.push(newNumber);
        // operationArray.concat(newNumber)
        operationArrayDisplay.textContent = newNumber;
        operationArrayDisplay.textContent = operationArray;
        return operationArray.join;
    })
})


checkOperator();
operate();