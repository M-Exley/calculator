'use strict'

const buttonAdd = document.querySelector('#add');
const buttonSubtract = document.querySelector('#subtract');
const buttonEquals = document.querySelector('#equals');
///
const numberButtons = document.querySelectorAll('div.test > button.number')
const symbolButtons = document.querySelectorAll('.symbol')
////
const inputTextDisplay = document.querySelector('.input');
const sumTextDisplay = document.querySelector('.sum')

let input = [];
let firstNumber = '';
let operatorVar = '';
let secondNumber = '';

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
        let symbolVal = button.value;
         console.log(symbolVal);   
         operatorVar = symbolVal;
         return operatorVar;
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
        let numberVal = Number(number.value);
        inputTextDisplay.textContent = numberVal;
        input.push(numberVal);
        return input.join("-");
    })
})


checkOperator();
operate();