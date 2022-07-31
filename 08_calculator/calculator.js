const add = function(num1, num2) {
	let result = 0;
  result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	let result = 0;
  result = num1 - num2;
  return result;
};

const sum = function(array) {
	let result = 0;
  for(let i = 0; i < array.length; i++){
    result += array[i];
  }

  return result;
};

const multiply = function(nums) {
  let result = 1;
  
  for(let i = 0; i < nums.length; i++){
    result *= nums[i];
  }

  return result;
};

const power = function(num1, power) {
	let result = 1;

  for(let i = 0; i < power; i++){
    result *= num1
  }

  return result;
};

const factorial = function(num1) {
	let result = 1;

  for(let i = 1; i <= num1; i++){
    result *= i;
  }

  return result;
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
