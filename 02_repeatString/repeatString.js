const repeatString = function(stringToRepeat, recurrence) {
    let array = [];

    if (recurrence == "-1"){
        return 'ERROR';
        }
    else
        for (i = 0; i < recurrence; i++) {
            array.push(stringToRepeat);
        }
        let text = array.join("");
        return text

};

// Do not edit below this line
module.exports = repeatString;
