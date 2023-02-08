// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length-1 ; i >= 0 ; i--){
        if(digits[i] + 1 == 10){
            digits[i] = 0
            if (i==0){
                digits.unshift(1)
                return digits;
            }
            // else{
            //     digits[i-1] == (digits[i-1]+1)
            // }
        }
        else{
            digits[i]++;
            return digits
        }
    }

};