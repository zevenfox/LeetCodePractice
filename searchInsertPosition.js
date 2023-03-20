//https://leetcode.com/problems/search-insert-position/
// 35. Search Insert Position
// Easy
// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

var searchInsert = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] == target){
            return i;
        }
    }
    nums.push(target);
    console.log(nums);
    nums.sort(compareNumbers);
    console.log(nums);
    return nums.indexOf(target);
};
function compareNumbers(a, b) {
    return a - b;
}

console.log(searchInsert([3,5,7,9,10], 8));