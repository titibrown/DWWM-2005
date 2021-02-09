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



// Resumer


/* Ainsi, voici les principales fonctionnalités :

    fruits.length : retourne le nombre d'éléments dans le tableau (ici retourne 4)

    fruits[0] : sélectionne le premier élément

    fruits[length - 1] : sélectionne le dernier élément

    fruits.push('pamplemousse') : ajoute un élément à la fin du tableau

    fruits.unshift('pamplemousse') : ajoute un élément au début du tableau

    fruits.pop() : supprime le dernier élément

    fruits.shift() : supprime le premier élément

    fruits.indexOf('banane') : retourne l'index d'un élément

    fruits.join() : concatène les éléments dans une chaîne de caractères avec virgules, mais il est possible de spécifier un autre séparateur dans les paranthèses

    fruits.slice() : crée une copie du tableau (à associer à une autre variable donc)

    fruits.splice([début], [nbASupprimer], [élément(s)]) : retire, remplace ou ajoute des éléments.

        Début : l'index à partir duquel commencer le changement, si négatif, part de la fin du tableau

        nbASupprimer : un entier indiquant le nombre d'éléments à retirer ou remplacer

        Element(s) : les éléments à ajouter à partir du début précisé. Si aucun élément n'est spécifié, alors n'en ajoutera pas.