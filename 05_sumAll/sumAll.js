const sumAll = function(small, large) {
    
//condition check if inputs are not integers
    if (small > large) [small, large] = [large, small];

    if (small < 0 || large < 0) 
        return "ERROR";

    if (!Number.isInteger(small) || !Number.isInteger(large)) return "ERROR";

// Runs loop for total sum
    let finalSum = 0;
    for (let i = small; i <= large; i++) {
       finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
