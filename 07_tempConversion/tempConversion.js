const convertToCelsius = function(fahren) {
  return Math.round((5.0/9) * (fahren-32) * 10)/10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius * (9.0/5)) + 32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
