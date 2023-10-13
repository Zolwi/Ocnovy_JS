function convertCelsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

var celsius = 25;
var fahrenheit = convertCelsiusToFahrenheit(celsius);
console.log(fahrenheit + "F " + celsius + "C");