  
const Employee = require ('./Models/Employee.js.js');
const Enterprise = require('./Models/Enterprise');


const ets = new Enterprise('DEV2005');

let emp = ets.read(42); // récupère une copie de l'employé 42
emp.lastname = "Kinporte";
ets.update(emp);
ets.save();

console.log(ets.getHighestSalary());
console.log(ets.getLowestSalary());
console.log(ets.getSalaryGap());


let fake = new Employee();
/*
let emp1 = new Employee({
    id: 42,
    lastname: "Doe",
    firstname: "John",
    role: "???",
    salary: 10000,
    hiredate:"2011-04-08"
});
ets.create(emp1);
ets.save();*/
return;





