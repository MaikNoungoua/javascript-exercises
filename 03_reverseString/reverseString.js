const reverseString = function(string) {
    let splitArray = string.split("");
    let reversedArray = splitArray.reverse("");
    let joinArray = splitArray.join("");

    return joinArray

};

// Do not edit below this line
module.exports = reverseString;
