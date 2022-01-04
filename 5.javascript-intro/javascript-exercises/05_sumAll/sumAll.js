const sumAll = function(a,  b) {
    if ( a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b) ) {
        return "ERROR";
    }
    let allA = a * (a + 1) / 2;
    let allB = b * (b + 1) / 2;
    return Math.abs(allB - allA) + Math.min(a, b);
};

// Do not edit below this line
module.exports = sumAll;
