function a1(callback) {
    setInterval(() => {
        console.log('f')
        callback()
    }, 5000)
}


a1(() => {
    console.log('first')
})
const alsoHuge = BigInt(9007199254740991);
// 9007199254740991n
console.log('alsoHuge', alsoHuge)