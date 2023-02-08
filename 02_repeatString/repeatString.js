const repeatString = function(str, times) {
    if (times < 0)
        return "ERROR";
    else
        output = '';
        i = 0;

        for (let i = 0; i < times; i++)
            output = output + str;
        
        return output;
};

// Do not edit below this line
module.exports = repeatString;
