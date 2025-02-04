nums2 = [2, 5, 6]
n =3
m =3
nums1 =[1, 2, 3, 0, 0, 0]
var merge = function (nums1, m, nums2, n) {
    let a = nums1
    let b = nums2
    let arr = [...a.slice(0, m), ...b.slice(0, n)]
    return arr.sort()
}
console.log('merge', merge(nums1,m,nums2,n))

arrr = [1,2,3,4]
let k = arrr.pop(2)
console.log('k', k)