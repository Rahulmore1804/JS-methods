var mergeTwoLists = function (list1, list2) {
    let i = 0;
    let j = 0;
    let result = []
    while (i < list1.length && j < list2.length) {
        if (list1[i] > list2[j]) {
            result.push(list2[j])
            j = j + 1
        }
        else {
            result.push(list1[j])
            i = i + 1
        }
    }
    return result
};

let list1 =[1,2,4]
let list2 =[1,3,4]

console.log('first', mergeTwoLists(list1,list2))