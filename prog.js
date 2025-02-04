// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150
let nums = [1, 1, 1, 2, 2, 3,1,2,33,4,5,6,5,5,5,5,7,8,]
let result = []
temp = 1
result.push(nums[0])
for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] == nums[i]) {
        console.log(nums[i - 1], nums[i])
        if (temp > 1) {
            temp = 1
        } else {
            temp++
            result.push(nums[i])
        }
    }
    else {
        result.push(nums[i])

    }
}
console.log('result', result)

var removeDuplicates = function (nums) {
    let num = nums
    let result = []
    temp = 1
    result.push(num[0])
    for (let i = 1; i < num.length; i++) {

        if (num[i - 1] == num[i]) {
            if (temp > 1) {
                temp = 1
            } else {
                temp++
                result.push(num[i])
            }
        }
        else {
            result.push(num[i])

        }
    }
    return result

};
console.log('first', removeDuplicates([0,0,1,1,1,1,2,3,3]
))