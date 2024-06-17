const repeatString= function (string, num) {
    // This condition is added to test if the number of loops is less than 0
    if ( num < 0) {
        return "ERROR";
    }
    // This is where the "meat" of the function is, it can run w/o the earlier condition
    // myString = ""; is added b/c we will trick the cpu to add to a blank string i.e. 
    let myString = "";
        for (let i = 0; i < num; i++) {
            myString += string;
            console.log(myString);
        }
        return myString;
    }

// Do not edit below this line
module.exports = repeatString;
