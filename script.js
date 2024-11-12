'use strict'

const buttons = document.querySelectorAll('div > button') /// all buttons >> extract value
///// arrays and displays
let operationArray = [];
const operationArrayDisplay = document.querySelector('.input');
let sum = [];
const sumTextDisplay = document.querySelector('.sum')
///
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
            if (button.classList.contains('number')) {
                newNumber.push(button.value);
                operationArrayDisplay.textContent = Number(newNumber.join(""));
            } else if (button.classList.contains('symbol')) {
                operatorVar = button.value;
                console.log(newNumber, operatorVar)
                operationArray = [...newNumber, operatorVar];
                newNumber = [];
                console.log(operationArray)
            } else if (newNumber && operatorVar) {
                secondNumber.push(button.value);
                operationArrayDisplay.textContent = Number(secondNumber.join(""));
                console.log(newNumber, operatorVar)
            } else if (button.classList.contains('equals')) {
                console.log("equals");
                // need to concat numbers and convert to string before this
                operate(newNumber, secondNumber); // not yet but further down with parameters
            }
            
        })
    })
}
// function checkOperator() {
//     symbolButtons.forEach((button) => {
//         button.addEventListener('click', function() {
//             if (button.value === '=') {
//                 console.log(operationArray);
//                 return operationArray;
//             }
//         operatorVar = button.value;
//         operationArray.push(operatorVar);
//         let concat = operationArray.join("");
//         console.log(concat);
//         operationArrayDisplay.textContent = concat;
//         })
//     })
// };




// numberButtons.forEach((number) => {
//     number.addEventListener('click', function() {
//         let newNumber = Number(number.value);
//         console.log(newNumber);
//         if (operationArray.length) {
//             operationArray.push(newNumber)
//         } 
//         operationArray.push(newNumber);
//         // operationArray.concat(newNumber)
//         operationArrayDisplay.textContent = newNumber;
//         operationArrayDisplay.textContent = operationArray;
//         return operationArray.join;
//     })
// })


checkButton();
operate();