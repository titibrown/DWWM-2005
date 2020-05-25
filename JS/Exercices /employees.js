/**
 * JAVASCRIPT:  Exercices
 * 
 * Listing d'employés
 * 
 * Consignes : 
 * A l'aide de la syntaxe orientée "classes", modélisez un objet "Employee" possédant les caractéristiques suivantes :
 *  Attributs: 
 *  - id (int): identifiant
 *  - lastname (string): nom
 *  - firstname (string): prénom
 *  - email (string): calculé automatiquement dans le constructeur (exemple: John Doe => jdoe@email.fr)
 *  - role (string): poste occupé
 *  - salary (int): salaire annuel BRUT
 *  - hiredate (Date): date d'embauche au format YYYY-MM-DD
 * 
 *  Méthodes:
 *  - getMonthlySalary() : retourne un entier -> le salaire mensuel NET calculé à partir du salaire annuel (salaire_mensuel = salaire_annuel / 12 * 0.75)
 *  - getSeniority() : renvoie une chaine -> l'ancienneté de l'employé (exemples: "19 jours", "3 mois et 2 jours", "2 ans 7 mois et 8 jours") 
 * 
 * Une fois modélisé et testé, complétez le tableau "employees" pour qu'il contienne 5 employés au total (ni plus, ni moins).
 * Parcourir ensuite le tableau complété et afficher chaque employé dans la console (nom, prénom, email, ancienneté, salaire mensuel NET)
 * Afficher ensuite, individuellement : 
 *  - L'employé ayant le plus d'ancienneté
 *  - L'employé avec le plus haut salaire
 *  - L'employé avec le plus bas salaire
 *  - La différence de salaire entre les 2 précédents 
 * 
 * Documentation Javascript complète: https://developer.mozilla.org/fr/docs/Web/JavaScript
 * Tutoriel Javascript: https://www.pierre-giraud.com/javascript-apprendre-coder-cours/introduction/ 
 */



/* COMPLÉTEZ LE PROGRAMME... */

/**
 * @class Employee
 */
class Employee {

    // Employee = class Employee {
        constructor(id, lastname, firstname, role, salary, hireDate, email) {
            this.id = id
            this.lastname = lastname;
            this.firstname = firstname;
            this.role = role;
            this.salary = salary;
            this.hireDate = hireDate;
            this.email = firstname.substring(0,1).toLowerCase()+ lastname.toLowerCase()+ "email.fr";

        }

 getsalary (){

    return Math.round((this.salary / 12) * 0.75);
 }

getSenority() {




    //return 


}

}





/** DÉBUT ZONE NON EDITABLE (Ne pas modifier les lignes suivantes) */


/** @var Employee employee1 */
var employees1 = new Employee(1,'Trump', 'Donald ', 'creator of Fake News',500000, new Date ('2017-01-20'))

/** @var array employees */
const employees = [employee1]; // tableau contenant les employés

console.log(employee1); // doit afficher l'objet "employee1"
console.log("Il y a " + employees.length + " employé(e)s."); // doit afficher "Il y a 5 employé(e)s."
console.log(employees); // export des employés dans la console


/** FIN ZONE NON EDITABLE (Ne pas modifier les lignes précédentes) */



// Écrivez votre code à partir de la ligne suivante...

var employees2 = new Employee (2,' Obama','Barack','creator of hope',1000000, new date ('2009-01-20'))
var employees3 = new Employee (3,'Bush','George','responsable of Guantanamo',100000,new date ('2001-01-20'))          
var employees4 = new Employee (4,'Clinton', 'Bill','assistant of Lewinsky', 50000, new date ('1993-01-20'))
var employees5 = new Employee (5, 'Reagan','Ronadl','Actor',10000, new date('1981-01-20'))

