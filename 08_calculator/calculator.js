const add = function(num1, num2) {

    let sum; 
    sum = num1 + num2;
    return sum
  }
  

const subtract = function(num1, num2) {
  let difference;

  difference = num1 - num2;
  return difference

};

const sum = function(args) {
  if (args.length  == 0) {
    let sum = 0; 
    return sum
  }
  else{
    let total = 0; 
    for(index = 0; index < args.length; index++){
      total += args[index];  
    }
    return total 
    
  }
  
  

	
};

const multiply = function(args) {

  let multiplication = 1; 

  for (index = 0; index < args.length; index++ ){
    multiplication *= args[index];
  }
  return multiplication
};

const power = function(num, power) {
  
  let result; 
  result = num ** power;
  return result
	
};

const factorial = function(args) {

  let result = 1; 

  for (index = args; index > 0; index--){

    result *= index; 
  }
  return result

	
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
