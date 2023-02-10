/**
 * @param {number} x
 * @return {boolean}
 */

// wrong because
// 1. The inner loop is not necessary because you only need to compare characters from the opposite ends of the string.
// 2.The loop conditions are incorrect. 
// You should be incrementing i and decrementing j on each iteration, not looping through the entire length of the string in each iteration.

// var isPalindrome = function(x) {
//     let str = x.toString();
//     for (let i = 0; i < str.length ; i++) {
        //you can not do this because return true is not in for loop condition
        // so i will always be 1
//         for (let j = str.length-1 ; j >= 0 ; j--){
//             if (str[i] != str[j]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }

var isPalindrome = function(x) {
    let str = x.toString();
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}



