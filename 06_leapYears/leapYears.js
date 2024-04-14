const leapYears = function(year) {

    if (year % 4 == 0 && year % 100 == 0 && year % 400 != 0 ){
        return false
    }
    else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0 ){
        return true  
    }  
    else if (year % 4 == 0){
        return true 
    }
    else {
        return false
    }


};

// Do not edit below this line
module.exports = leapYears;


/*To be consider a leap year we need: 

    - to be divisible by 4, so remainder of euclidian division is 0 
    - must no be divisible by 100*/