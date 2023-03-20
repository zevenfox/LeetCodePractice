// Description: You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
function climbStairs(number) {
    let lst = [1,1]
    // there is no way to reach 0th step
    // there is only one way to reach 1st step lst = [1]
    // there is only two ways to reach 2nd step lst = [1,1]
    // there is only three ways to reach 3rd step lst = [1,1,2] 2 + 1 = 3
    // there is only five ways to reach 4th step lst = [1,1,2,3] 3 + 2 = 5
    for (i = 2; i<=number; i++){
    // i<=number because we want to reach the number step
        lst.push(lst[i-1] + lst[i-2])
    }
    console.log(lst)
    return lst[number]
}

console.log(climbStairs(4)) // Output: 5
console.log(climbStairs(6)) // Output: 8



// function fibonacci(number){
//     let lst = [0,1]
//     for (i=2;i<number;i++){
//         lst.push(lst[i-1]+lst[i-2])
//     }
//     return lst[number-1]
// }
// console.log(fibonacci(10))