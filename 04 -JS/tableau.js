// Crée un tableau 

// let monTableau = new Array('un', 'deux', 'trois');
// let monTableau = Array('un', 'deux', 'trois');
let monTableau = ['un', 'deux', 'trois'];


// Tableaux Multi-dimensions


let monTableau = ['un', 'deux', 'trois'];

// Ancienne version
let monTableau2D = new Array(
    Array('Mark', 'Jeff', 'Bill'),
    Array('Zuckerberg', 'Bezos', 'Gates')  
);

// Nouvelle version
let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];


// Tableaux Associatifs


let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};



// Accéder aux éléments des tableaux


let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};


// Ajouter 


let monTableau = ['un', 'deux', 'trois', 'quatre'];
monTableau.push('cinq');
monTableau.unshift('zero');
// console.log(monTableau);

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D[1].unshift('test');
// console.log(monTableau2D);

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
monTableauAssociatif['nationalite'] = 'Américaine';
console.log(monTableauAssociatif);

// Delete

delete(monTableauAssociatif.poste);
// console.log(monTableauAssociatif);


//retrouver un Index : 

let monTableau = ['un', 'deux', 'trois', 'quatre'];
console.log(monTableau.indexOf('deux')); // retourne 1



//concaténer un tableau : Tableau simple ou double dimenssion


let monTableau = ['un', 'deux', 'trois', 'quatre'];
// console.log(monTableau.join(' / '));

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
console.log(monTableau2D.join(' / '));