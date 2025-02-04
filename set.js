const arr = [1,2,1,1,1,4,5]
let aa = new Set(arr)
aa.add(10)
console.log('aa', aa)

for (let a of aa){
    console.log('a', a)
}
