var canCompleteCircuit = function (gas, cost) {
    ans = -1

    for (let i = 0; i < gas.length; i++) {
        let temp = 0
        let sub = 0

        for (let j = 0; j < gas.length; j++) {
            let a = j + i
            if (j + i > 4) {
                a = j + i - 5
            }
            // console.log('temp,cost[a],sub', temp, sub, cost[a])

            temp = cost[a] + sub + temp
            sub = sub - 1
        }
        console.log('temp', temp)
        console.log('i', i+2)


    }

};
console.log('first', canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))