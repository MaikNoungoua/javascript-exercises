const convertToCelsius = function(args) {
  let tempInCelsuis, roundedOutput;
  const denominator = 9;
  let numerator = (5*args) - 160;
  tempInCelsuis = numerator / denominator; 
  roundedOutput = Math.round(tempInCelsuis * 10) / 10;
  return roundedOutput
};

const convertToFahrenheit = function(args) {
  let tempinFahrenheit, roundedOutput;
  const denominator = 5; 
  const toAdd = 32;
  let numerator = 9 * args; 
  tempinFahrenheit = (numerator/denominator) + toAdd;
  roundedOutput = Math.round(tempinFahrenheit * 10) / 10;
  return roundedOutput
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
