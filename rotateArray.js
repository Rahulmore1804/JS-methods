// var rotate = function(nums, k) {
//     let num = nums
//     for(let i = 0; i<k;i++){
//         let a = num.pop()
//         nums.unshift(a)
//     }
//     return num
// };
var rotate = function(nums, k) {
    let a = nums.slice(0,k)
    let b = nums.slice(k,nums.length-1)
    console.log('a,b', a,b)

    return [...b,...a]
   
    // for(let i = 0; i<k;i++){
    //     let a = nums.pop()
    //     nums.unshift(a)
    // }
    // return nums
};
console.log('first', rotate([1,2,3,4,5,6,7],3))