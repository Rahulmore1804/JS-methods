let target = 7;
let list11 = [2, 3, 1, 2, 4, 3];
// console.log('list11.slice(2,4', list11.slice(2, 4))




var minSubArrayLen = function (target, nums) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length + 1; j++) {
            console.log('subArray', nums.slice(i, j))
        }
    }



};
console.log('mi', minSubArrayLen(target, list11))