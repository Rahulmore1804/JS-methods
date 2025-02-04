var canJump = function (nums) {
    let arr = nums
    let len = arr.length
    let tempIndex = 0

    while (arr[tempIndex] !== 0 && tempIndex < len) {
        // console.log('tempIndex, arr[tempIndex]', tempIndex, arr[tempIndex])

        tempIndex = tempIndex + arr[tempIndex]

        // console.log('tempIndex', tempIndex)

        if (tempIndex >= len - 1) {
            return true
        }

    }
    return false


};

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3,2,1,0,4]))