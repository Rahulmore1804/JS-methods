function cloo(a,b,...c){
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
}

cloo(1,2,3,4,5,6,6,77,8)


const a1 = [1,2,3]
console.log('a1', ...a1) // 1 , 2, 3
const b1 = [...a1] // copying array
const c1 = [3,4]
const d1 = [...c1,...b1] // merging array [3, 4, 1, 2, 3]
console.log('d1', d1) 

function sun(a,b,c,d=9){
    return a+b+c+d
}
console.log('sum', sun(...a1)) // passing multiple value //15