/*
*   Your task is to create a calculator. You can create
*   your calculator using any of the DOM manipulation
*   techniques we learned throughout the semester. Use
*   javascript's eval function to perform the calculation.
*   If an error occurs, show ERROR on the calculator
*   'screen'.
*
*   Example of using eval: var result = eval('10+4*2');
*
*   Requirements:
*     - Buttons for every digit 0-9
*     - Buttons for +, -, /, *
*     - Button to backspace or clear <-
*     - Button to execute calculation =
*     - Calculator 'screen' should update as buttons
*       are pressed including numbers, operations, etc
*     - Result should show on calculator 'screen'
*     - Upon submitting and showing result, calculator
*       should reset on next button click, starting new
*       calculation
*     - If an error occurs, for example inputting ---6,
*       calculator 'screen' should output 'ERROR'
*     - Calculator 'screen' should fit at least 10
*       characters
*     - At least 12 CSS styles
*
*   Submit your JS file, HTML file, and optional CSS/jquery
*   file. Refer to images in Sakai for guidance.
*/

function printSymbol(e) {
let result = document.getElementById('result');	
let object = e.target;
result.textContent = result.textContent +  object.textContent;
}

function clear(e) {
document.getElementById('result').textContent = '';
}

let result = document.getElementById('result');
let clearBtn = document.getElementById('clear');
let equalBtn = document.getElementById('equal');
let backBtn = document.getElementById('backspace');

let number = document.getElementsByClassName('number');

for (let i = 0; i <  number.length; i++)
	number[i].addEventListener('click', printSymbol);

clearBtn.addEventListener('click', clear);

equalBtn.addEventListener('click', e => result.textContent = eval(result.textContent));


