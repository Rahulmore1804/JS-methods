let str = "rahul"
let str2 = str.slice(2,4) // new instatnce needed
console.log('str2', str2) // hu
 
const arr = [1,2,3,4,5]
const removed = arr.splice(2,0,9,8)
console.log('arr', arr) // [1, 2, 9, 8, 3, 4, 5]
// splice work on exsisting array, no need to make new instatnce



const arr3 = [7,8]
const arr4 = [1,2]
const arr5  = arr3.concat(arr4)
console.log('arr5', arr5)  //  [7, 8, 1, 2]
// new instance needed 

console.log(arr3.join("")) //78
console.log(arr4.reverse()) //[2,1]
// wokr on exsisting arr


const arr11 = [1,2,3,4,5]
let arr22 = arr11.filter(a=>a>2) // need new instance
console.log('arr11', arr22)  // [3, 4, 5]

arr11.forEach(a=>console.log(a*2))
let sum = 0
arr11.forEach((q)=>{sum = sum+q})
console.log('sum', sum)
console.log('arr33', arr11)
// The forEach() method in JavaScript allows us to iterate through each element of an array and perform a specified operation on each element. It is useful when we need to perform a task for each item in the array without creating a new array or modifying the original one.
// never gives new instance

let pppp = arr11.map(a=>a*2)  // new instance
console.log('pppp', pppp)

let newElem = arr11.reduce((a,b)=>a+b,100) // new instance
console.log('newElem', newElem)
// return always new elemtns '




let anew = arr11.find((a)=>a>3) // new instance
console.log('anew', anew)

// find 1st new element which satisfy condition

let abc = "hello every one how are you one wo"
console.log(abc.replace("one","ppp"))
let text = "Mr Blue has a blue house and a blue car";

// global replacement
let result = text.replace(/blue/g, "red");
console.log('result', result)

const regex = /One/i;

console.log(abc.replace(regex,"ppp"))
console.log(abc.replaceAll("one","ppp"))



let textww = "       Hello World!        ";
let resultww = textww.trim();
console.log('resultww', textww) //        Hello World!
console.log('resultww', resultww) //Hello World!
// trim removies space at start and end

let poi = "SDVdccVSVF"
console.log(poi.toUpperCase(),poi.toLowerCase())


let man = [1,2,3,4,5,6,7]
man.pop()  // last 
console.log('man', man)
man.shift() // first
console.log('man', man)
man.push(0)  // last
console.log('man', man)
man.unshift(9) //first
console.log('man', man)


