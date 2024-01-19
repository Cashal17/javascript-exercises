const repeatString = function(word, count) {
    let finStr = "";
    if (count < 0) return 'ERROR';
    for (let i = count; i > 0; i--) {
        finStr += word;
    }   
    return finStr;
};

// Do not edit below this line
module.exports = repeatString;
