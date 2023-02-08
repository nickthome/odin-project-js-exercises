const reverseString = function(str) {

    output = ''
    original = str.split('')
    
    for (let char=1; char <= original.length; char++)
        output += original[original.length - char]
    return output;
    };

// Do not edit below this line
module.exports = reverseString;
