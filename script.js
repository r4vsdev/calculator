let displayVar = '';
let screen = document.querySelector('.screen')


const add = function(a, b) {
	return a+b;
};
const subtract = function(a, b) {
	return a-b;
};
const multiply = function(a, b) {
    //   return array.reduce( (total, current) => total * current, 1 );
    return a * b
};
const divide = function(a, b) {
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
function operate (string) {
    if (operator === '+') return add(a, b)
    if (operator === '-') return subtract(a, b)
    if (operator === '*') return multiply(a, b)
    if (operator === '/') return divide(a, b)
    if (operator === '^') return power(a, b)
}
function writeOnScreen () {
    const pressedButton = this.textContent;
	screen.textContent += pressedButton;
}
function clearDisplay () {
	// displayVar = '';
	screen.textContent = '';
	// console.log('display cleared', displayVar)
}

const btn = document.querySelectorAll('.btn');
btn.forEach((button) => button.addEventListener('click', writeOnScreen))

const ac = document.querySelector('#ac')
ac.addEventListener('click', clearDisplay)

const equal = document.querySelector('#equal')
// equal.addEventListener('click', operate(displayVar))