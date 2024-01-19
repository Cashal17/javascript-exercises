const reverseString = function(str) {
    let strArr = str.split('');
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        let temp = strArr[left];
        strArr[left] = strArr[right];
        strArr[right] = temp;
        left++; right--;
    }
    return strArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
