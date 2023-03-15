//not in Leetcode but it is a good question to practice
//also it's Mid level question
//You can see the question on waterLevel.png
var waterLevel = function(input){
    let water = new Array()
    for(let i = 0;i<input.length;i++){
        if(input[i] < input[i+1]){
            water.push(input[i])
            input.shift()
            i--
        }
        else{
            let tmp = input[i]
            input.shift()
            let max = Math.max(...input)
            let index = input.indexOf(max)
            i--
            // console.log(tmp + " " + max + " " + index)
            if(max <= tmp && input.length!==0){
                water.push(max)
                if(index > 0){
                    i = -1
                    // console.log("i = " + i)
                    while(index > 0){
                        water.push(max)
                        input.shift()
                        index--
                    }
                    // console.log("input = " + input)
                }
            }
            else if(max > tmp && input.length!==0){
                water.push(tmp)
                if(index > 0){
                    i = -1
                    while(index > 0){
                        if(input[0] > tmp){
                            break
                        }
                        water.push(tmp)
                        input.shift()
                        index--
                    }
                }
            }
        }
        // console.log(water)
    }
    // console.log(input)
    return water
}

// console.log(waterLevel([3, 6, 3, 4, 6, 2, 1, 4]))
// console.log(waterLevel([1, 2, 1, 2, 3, 1, 2]))
// console.log(waterLevel([1, 2, 3, 4]))
// console.log(waterLevel([3, 5, 4, 5, 2]))
// console.log(waterLevel([6, 5, 4, 1, 3, 2]))
// console.log(waterLevel([5, 3, 2, 1, 6, 3, 2, 7]))
// console.log(waterLevel([1, 1, 2, 1, 1, 3, 3, 4, 2]))