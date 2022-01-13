const palindromes = function (word) {
    let reversedWord = "";
    const forbiddenChars = " .!,?"
    for (let c of forbiddenChars) {
        word = word.replaceAll(c, "");
    }
    word = word.toLowerCase();

    for (let l of word) {
        reversedWord = l.concat(reversedWord);
    }
    return word == reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
