var containsDuplicate = function(nums) {
    seen = [];
    for (i = 0; i < nums.length; i++) {
        if (seen.includes(nums[i])) {
            return true;
        }
        seen.push(nums[i]);
    }
    return false;
};

//or by sort  O(n log n)
var containsDuplicate = function(nums) {
    nums.sort();
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true;
        }
    }
    return false;
};

//or by hash map  O(n)
var containsDuplicate = function(nums) {
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) {
            return true;
        }
        seen[nums[i]] = true;
    }
    return false;
};