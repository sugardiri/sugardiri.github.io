// A leap year is a year containing one additional day added to keep the calendar year synchronized with the astronomical or seasonal year. Because seasons and astronomical events do not repeat in a whole number of days, calendars that have the same number of days in each year drift over time with respect to the event that the year is supposed to track. By inserting an additional day or month into the year, the drift can be corrected. A year that is not a leap year is called a common year.

// Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial (years divisible by 100) years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the year 2000 is.

// Write a function named isLeapYear with a single parameter named year, that returns true if the year input is a leap year, and false if the year input is a common year.

// For Example:

//  When isLeapYear(2000) is called, it should return the value true. 

const isLeapYear = function(year){

    check for leap year
    if(year % 4 === 0 && year % 100 !== 0){
        console.log("if statement")
        return true;
    } else if(year % 400 === 0){
        console.log("else if statement")
        return true;
    }

return false
}

let output =isLeapYear(2004)

console.log(output)

//function is LeapYear (year){
    //if(year % 400 === 0){
        //return true
    //} else if(year % 4 === 0 && year % 100 === 0){
        //return false
    //}else if(year % 4 === 0){
        //return true
    //}
//}

//let output = isLeapYear(2000)
//console.log(output)