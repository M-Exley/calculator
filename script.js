'use strict'

const buttonAdd = document.querySelector('#add');
const buttonSubtract = document.querySelector('#subtract');
///
const numberButtons = document.querySelectorAll('div.test > button.number')
const symbolButtons = document.querySelectorAll('.symbol')
////
const inputTextDisplay = document.querySelector('.input');
let input = [];
let total = 0;
// array of numbers from nodelist buttons?

function add(number1, number2) {
    sum + 1;
    return sum += number; 

}

function subtract() {
    

}

function multiply() {

}

function divide() { 

}



console.log(numberButtons)
numberButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        // let val = e.target.textContent;
        let newVal = Number(input.push(val));
        console.log(newVal.join(""));
        inputTextDisplay.textContent = input;
        return input;
    })
})

symbolButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        let val = e.target.textContent;
        console.log(`Function: ${val}`)
        
    })
})