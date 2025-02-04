// https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
var majorityElement = function (nums) {

    let set = [...new Set(nums)]
    let count
    let ans = []
    for (let i = 0; i < set.length; i++) {
        let k = 0
        for (let j = 0; j < nums.length; j++) {
            if (set[i] === nums[j]) {
                k = k + 1
            }
        }
        console.log('!k', !k)

        if (!k || (count < k))
            ans = [k, set[i]]

    }
    return ans[1]
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))