let a = 0
let prom = new Promise(function (reject, resolve) {
    if (a == 0) {
        resolve(77)
    }
    else {
        reject("error")
    }
    // throw Error("dsd")
})

prom.then(res => console.log('res ', res)).catch(e => console.log('e', e))
