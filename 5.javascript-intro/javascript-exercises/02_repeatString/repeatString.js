const repeatString = function(string, n) {
    if (n < 0) {
        return "ERROR";
    }
    let result = "";
    while (n > 0) {
        result += string;
        n--;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
