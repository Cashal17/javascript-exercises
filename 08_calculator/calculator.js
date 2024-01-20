const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0); 
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr);
};

const power = function(num, exp) {
	if (exp === 0)
    return 1;
  let ans = num;
  for (let i = 1; i < exp; i++) 
    ans *= num;
  return ans;
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
  let ans = num;
  for (let i = num-1; i > 0; i--) {
    ans *= i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
