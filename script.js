let firstNumber;
let secondNumber;
let operator;

const add = function(a, b) {
	return a + b
};
const subtract = function(a, b) {
	return a-b;
};
const multiply = function(a, b) {
    //   return array.reduce( (total, current) => total * current, 1 );
    return a * b
};
const divide = function(a, b) {
    if (b == 0) return 'ERROR'
    return a / b
}
const power = function(x, n) {
	return Math.pow(x, n);
};
const sum = function(array) {
    return array.reduce( (total, current) => total + current, 0 );
};
const factorial = function(n) {
	if (n === 0) return 1;
	return n * factorial( n - 1 );
};
function writeOnScreen () {
    if (this.id === 'del') return
    const screen = document.querySelector('.screen')
	screen.textContent += this.textContent;
}
function clearDisplay () {
    const screen = document.querySelector('.screen')
	screen.textContent = '';
}
function operate () {
    const screen = document.querySelector('.screen')
    if (operator === '+') screen.textContent += add(firstNumber, secondNumber)
    if (operator === '-') screen.textContent += subtract(firstNumber, secondNumber)
    if (operator === 'x') screen.textContent += multiply(firstNumber, secondNumber)
    if (operator === '/') screen.textContent += divide(firstNumber, secondNumber)
    if (operator === '^') screen.textContent += power(firstNumber, secondNumber)
}
function setFirstNumber () {
    const screenText = document.querySelector('.screen ').textContent
    firstNumber      = +screenText
    operator         = this.textContent
}
function setSecondNumber () {
    const screenText    = document.querySelector('.screen').textContent
    const index         = screenText.indexOf(operator)
    secondNumber        = +screenText.slice(index + 1, screenText.length - 1)
}
function deleteLastChar () {
    const screen = document.querySelector('.screen')
    screen.textContent = screen.textContent.slice(0, -1)
}

// main

// set first number
const operators = document.querySelectorAll('.operator')
operators.forEach(button => button.addEventListener('click', setFirstNumber))

// write numbers/operators on screen
const btn = document.querySelectorAll('.btn');
btn.forEach(button => button.addEventListener('click', writeOnScreen))

// clear display
const ac = document.querySelector('#ac')
ac.addEventListener('click', clearDisplay)

const equal = document.querySelector('#equal')
equal.addEventListener('click', () => {
    setSecondNumber()
    operate()
})

// del
const del = document.querySelector('#del')
del.addEventListener('click', deleteLastChar)