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
function operate (operator, a, b) {
    if (operator === '+') return add(a, b)
    if (operator === '-') return subtract(a, b)
    if (operator === '*') return multiply(a, b)
    if (operator === '/') return divide(a, b)
    if (operator === '^') return power(a, b)
}