const a = new Map()
a.set("ank",98)
a.set(1,9899)
console.log(a.get("ank")) //98
console.log(a.get(1))     //9899
a.set(1,9816516599)
console.log(a.get(1))     //9816516599
console.log('a', a)      // a Map(2) {size: 2, ank => 98, 1 => 9816516599}
a.forEach((value,key)=>{
    console.log('val', value) //98   9816516599
    console.log('key', key) // ank   1
})

