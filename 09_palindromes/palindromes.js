const palindromes = function (str) {
    let strArr = str.toLowerCase().split('');
    strArr = strArr.filter(
        (elem) => (elem.charCodeAt(0) >= 'a'.charCodeAt(0) && elem.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
        (elem.charCodeAt(0) >= '0'.charCodeAt(0) && elem.charCodeAt(0) <= '9'.charCodeAt(0))
    );
    let left = 0; let right = strArr.length -1;
    while (left < right) {
        if (strArr[left] !== strArr[right])
            return false;
        left++; right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
