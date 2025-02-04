
for( let i = 0 ; i<5;i++){
    console.log("fs"+i)
    for(let j = 1;j<5-i;j++){
        process.stdout.write(" ")

    }
    for(let k = 0;k<2*i-1;k++){
        process.stdout.write("@")
    }
    console.log()

}