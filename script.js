'use strict'

const buttonAdd = document.querySelector('#add');
const buttonSubtract = document.querySelector('#subtract');
///
const numberButtons = document.querySelectorAll('div.test > button.number')
const symbolButtons = document.querySelectorAll('.symbol')
////
const inputTextDisplay = document.querySelector('.input');
const sumTextDisplay = document.querySelector('.sum')
let input = [];
let sum = 0;
// array of numbers from nodelist buttons?

function add(number1, number2) {
    // sum = number1;
    // input = number2;
    // return sum += input;
    return number1 + number2; 

}

function subtract() {
    

}

function multiply() {

}

function divide() { 

}



numberButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (input.length <= 7){
        let val = e.target.textContent;
        console.log(val);
        input.push(val); // push returns length of array
        // console.log(input);
        inputTextDisplay.textContent = input.join("");
        
        }
        return input;
    })
})

symbolButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        let symbolVal = e.target.textContent;
        console.log(symbolVal);
        button.style.color = 'red';

        if (symbolVal === '+') {
            inputTextDisplay.textContent += "+ ";
        }
    })
})
