let myWeakSet = new WeakSet([{a:1}, {b:2}, {c:3}]);

let obj = {d:4};
myWeakSet.add(obj); //WeakSet { {d: 4}, {c: 3}, {a: 1}, {b: 2}}
myWeakSet.add({d:4});//WeakSet {{d: 4}, {d: 4}, {c: 3}, {a: 1}, {b: 2}}
myWeakSet.add(obj); //WeakSet {{d: 4}, {d: 4}, {c: 3}, {a: 1}, {b: 2}}


console.log(myWeakSet);

let weakMap = new WeakMap();

let key = {"fd":"Ff"};
let value = 'dcdscd';

weakMap.set(key, value);

let retrievedValue = weakMap.get(key);

console.log(retrievedValue); // 'value'