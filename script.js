let numbers = []
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
function writeNumbers () {
    if (this.id === 'del') return
    if (this.id === 'equal') return
    const screen = document.querySelector('.screen')
	screen.textContent += this.textContent;
}
function writeOperator () {
    const screen = document.querySelector('.screen')
	screen.textContent += this.textContent;
    operator = this.textContent
}
function clearDisplay () {
    const screen = document.querySelector('.screen')
	screen.textContent = ''
    numbers = []
}
function deleteLastChar () {
    const screen = document.querySelector('.screen')
    screen.textContent = screen.textContent.slice(0, -1)
}
function setFirstNumber () {
    const screenText = document.querySelector('.screen ').textContent
    numbers.push(+screenText)
    operator = this.textContent
}
function setNextNumber () {
    const screen = document.querySelector('.screen ')
    console.log(screen.textContent)
    numbers.push(           // push only the 2nd number to array
        +screen.textContent
        .replace(
            `${numbers[0]}${operator}`
            , ''))
    console.log(numbers)
    numbers[0] = operate(numbers[0], numbers[1])
    numbers.pop()
    screen.textContent = numbers[0]
}
function operate (firstNumber, secondNumber) {
    const screen = document.querySelector('.screen')
    if (operator === '+') return add(firstNumber, secondNumber)
    if (operator === '-') screen.textContent = subtract(firstNumber, secondNumber)
    if (operator === 'x') screen.textContent = multiply(firstNumber, secondNumber)
    if (operator === '/') screen.textContent = divide(firstNumber, secondNumber)
    if (operator === '^') screen.textContent = power(firstNumber, secondNumber)
}

const operators = document.querySelectorAll('.operator')
operators.forEach((operator) => operator.addEventListener('click', () => {
    if (!numbers[0]) {
        setFirstNumber()
        return
    }
    setNextNumber()
}))

const operatorPad = document.querySelectorAll('.operator');
operatorPad.forEach((operator) => operator.addEventListener('click', writeOperator))

const numPad = document.querySelectorAll('.number');
numPad.forEach((number) => number.addEventListener('click', writeNumbers))

const ac = document.querySelector('#ac')
ac.addEventListener('click', clearDisplay)

const del = document.querySelector('#del')
del.addEventListener('click', deleteLastChar)

const equal = document.querySelector('#equal')
equal.addEventListener('click', () => {
    setNextNumber()
})