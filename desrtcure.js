const arr = [1, 2, 3, 4, 5, 6, 7]
let [a, b, c, ...e] = arr
console.log('a,b', a, b) //a,b 1 2
console.log('c', c) // c 
console.log('e', e) // [4, 5, 6, 7]
let [aa, , , ...rest] = arr
console.log('aa,rest', aa, rest) //aa,rest 1 (4) [4, 5, 6, 7]

const obj  = {aq:1,bq:2}
const {x,y} = obj
const {aq,bq} = obj
console.log('x,y', x,y) //x,y undefined undefined
console.log('aq,bq', aq,bq) //aq,bq 1 2

const are = [1,2,3]
const aew = {...are}
console.log('aew', aew) //aew {0: 1, 1: 2, 2: 3}

const user = {name:"rahul",age:98,oc:"dev"}
console.log({...user,age:1}) //{name: 'rahul', age: 1, oc: 'dev'}
console.log({age:1,...user}) //{name: 'rahul', age: 98, oc: 'dev'} will not work