// Import des modules

const Employee   = require('./Models/Employee.js.js');
const Enterprise = require('./Models/Enterprise.js.js');


// Déclaration des variables, initialisation des objets

//const crm = new Enterprise('CRM');

let emp = new Employee();

let e = emp.getEmail();

emp.setEmail("email@new.com");


console.log();