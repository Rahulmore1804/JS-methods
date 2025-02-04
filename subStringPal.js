let str = "alabbala"
function checkPal(str) {
    let pal = true


    for (let i = 0; i < str.length / 2; i++) {

        if (str[i] === str[str.length - i - 1]) {

        } else {
            pal = false
        }
    }
    return pal
}
// console.log('pal', pal)

let str1 = "cbbbbtbbbbbbbbd"
ans = ""
for (let j = 0; j < str1.length; j++) {
    for (let k = 1; k < str1.length; k++) {
        let temp = ""
        temp = str1.substring(j, k + 1)
        let aaa = checkPal(temp)
        if (aaa === true) {
            if (ans.length < temp.length) {
                ans = temp
            }
        }


    }
}
console.log('temcbdjp', ans)


// https://leetcode.com/problems/longest-palindromic-substring/?envType=study-plan-v2&envId=top-interview-150


// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function (s) {
//     if(s.length ==1){
//         return s
//     }
//     if(s.length==0){
//         return ""
//     }
//     function checkPal(str) {
//         let pal = true
//         for (let i = 0; i < str.length / 2; i++) {
//             if (str[i] === str[str.length - i - 1]) {
//             } else {
//                 pal = false
//             }
//         }
//         return pal
//     }
//     ans = ""
//     for (let j = 0; j < s.length; j++) {
//         for (let k = 1; k < s.length; k++) {
//             let temp = ""
//             temp = s.substring(j, k + 1)
//             let aaa = checkPal(temp)
//             if (aaa === true) {
//                 if (ans.length < temp.length) {
//                     ans = temp
//                 }
//             }


//         }
//     }
//     return ans
// };