const removeFromArray = function(arr, ...args) {
    let finArr = [];
    arr.forEach(element => {
        if (!args.includes(element))
            finArr.push(element);
    });
    return finArr;
};

// Do not edit below this line
module.exports = removeFromArray;
