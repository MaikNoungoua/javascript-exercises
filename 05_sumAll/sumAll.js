const sumAll = function( firstNumber, secondNumber) {

    let sum = 0;
    if (secondNumber < firstNumber){
        for (i = secondNumber; i < firstNumber + 1; i++){

            sum += i;
        }
        return sum
    }
    else if (firstNumber < 0 || secondNumber < 0)
    {
        return "ERROR"
    }
    else if (typeof(firstNumber) != 'number' || typeof(secondNumber) != 'number'){
        return "ERROR"
    }

    else {
    for (i = firstNumber; i < secondNumber + 1; i++){

        sum += i;
    }
    return sum
}
};

// Do not edit below this line
module.exports = sumAll;
