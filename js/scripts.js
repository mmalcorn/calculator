var bmi = function(weight, height) {
  return weight/ height;
};

var height = parseInt(prompt("Enter your height in inches:"));
var weight = parseInt(prompt("Enter your weight in pounds:"));

var result = bmi(height, weight);
alert(result);
