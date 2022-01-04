const ftoc = function(fahrenheit) {
  return roundDecimal((fahrenheit - 32) / 1.8);
};

const ctof = function(celsius) {
  return roundDecimal(celsius * 1.8 + 32);
};

function roundDecimal(n) {
  return Math.round(n * 10) / 10
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
