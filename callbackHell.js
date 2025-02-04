// https://www.youtube.com/watch?v=NOlOw03qBfw
// Callback Hell = Situation in JavaScript where callbacks 
//                            are nested within other callbacks to the
//                            degree where the code is difficult to read.
//                            Old pattern to handle asynchronous functions.
//                            Use Promises + async/await to avoid Callback Hell


function task1(callback){
    setTimeout(()=>{console.log('first')
        callback()
    },2000)
}
function task2(callback){
    setTimeout(()=>{console.log('2nd')},3000)
    callback()

}
function task3(callback){
    setTimeout(()=>{console.log('third')
        callback()

    },5000)
}
function task4(){
    setTimeout(()=>{console.log('4th')

    },6000)
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4()
        })
    })
})
// task2()
// task3()
// task4()