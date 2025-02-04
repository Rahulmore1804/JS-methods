// Shallow copy 
let employee = {
    eid: "E102",
    ename: "Jack",
}


let newEmployee = employee;    // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");

newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

// Deep Copy 

let demployee = {
    ename: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
let dnewEmployee = JSON.parse(JSON.stringify(demployee));


console.log("---------After modification---------");
dnewEmployee.ename = "Beck";
dnewEmployee.salary = 70000;
console.log("Employee=> ", demployee);
console.log("dNew Employee=> ", dnewEmployee);
