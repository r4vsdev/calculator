const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
  return array.reduce( (total, current) => total + current, 0 );
};

const multiply = function(array) {
  return array.reduce( (total, current) => total * current, 1 );
};

const power = function(x, n) {
  return Math.pow(x, n);

}; 

const factorial = function(n) {
  if (n === 0) return 1;
  return n * factorial( n - 1 );
};