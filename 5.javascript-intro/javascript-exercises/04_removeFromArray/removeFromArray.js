const removeFromArray = function() {
    let arr = arguments[0];
    let stuffToRemove = extractArguments(arguments)
    for (let thing of stuffToRemove) {
        arr = arr.filter((x) => x !== thing);
    }
    return arr;
};

function extractArguments(args) {
    let stuff = [];
    for (let i = 1; i < args.length; i++) {
        stuff.push(args[i]);
    }
    return stuff;
}

// Do not edit below this line
module.exports = removeFromArray;
