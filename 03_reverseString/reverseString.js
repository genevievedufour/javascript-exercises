const reverseString = function(string) {
    let result = "";

    let charArray = Array.from(string);
    let charArrayResult = new Array(charArray.length);

    for(let i = charArray.length-1; i >= 0; i--) {
        charArrayResult.push(charArray[i]);
    }

    result = charArrayResult.join('');

    return result;
};

// Do not edit below this line
module.exports = reverseString;
