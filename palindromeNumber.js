/**
 * @param {number} x
 * @return {boolean}
 */

// wrong because
// 1. The inner loop is not necessary because you only need to compare characters from the opposite ends of the string.
// 2.The loop conditions are incorrect. 
// You should be incrementing i and decrementing j on each iteration, not looping through the entire length of the string in each iteration.

var isPalindrome = function(x) {
    let str = x.toString();
    for (let i = 0; i < str.length ; i++) {
        for (let j = str.length-1 ; j >= 0 ; j--){
            //for มันอยู่ในfor code ไล่จากบนลงล่าง พอยังไม่หลุดจากcondition inner for มันก็ไม่ไปต่อเช่น 121 i = index ที่ 0 j = index ที่ 2 และ 2 ยังไม่ >= 0 มันเลยไล่ j ต่อ เป็น index ที่ 1, 0
            if (str[i] != str[j]){
                return false;
            }
        }
    }
    return true;
}

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


//for loop
var isPalindrome = function(x) {
    let str = x.toString();
    for (let i = 0; i < str.length / 2; i++) {
        // str.length - i - 1 เพื่อเอาไว้ดูตัวตรงกลางที่เป็นเลขคี่
        let j = str.length - i - 1;
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}