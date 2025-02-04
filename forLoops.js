const obj = {0: 133, 1: 29, 2: 365}
for (const key in obj){
    console.log('key', key)  // 0,1,2
    console.log('obj[key]', obj[key])  // 133, 29 ,365
}
const arr = [55,9,8,7,54]
for(const a of arr){
    console.log('a', a)  // 55,9,8,7,54
}