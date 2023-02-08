const removeFromArray = function(input, ...args) {
    const output = [];
    input.forEach((item) => {
        if (!args.includes(item))
            output.push(item)
    }
    )

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
