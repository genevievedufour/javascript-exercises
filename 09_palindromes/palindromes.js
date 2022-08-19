const palindromes = function (word) {
let regex = /\W/g;
// .!?,

    let isPalindrome = word.toLowerCase().replace(regex, "");

    return isPalindrome.split("").reverse().join("") == isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
