// let header    = document.getElementsByTagName('header');
// let logo      = document.getElementById('logo');
// let container = document.getElementsByClassName('container');
document.querySelector('h1').remove();
// let p         = document.querySelectorAll('p');

// console.log(header);
// console.log(logo);
// console.log(container);
console.log(h1);
// console.log(p);



// Ajouter


// 1ère méthode : Ecrit juste un texte
document.write('test');

// 2ème méthode : Ajouter un élément brut
let h1 = document.querySelector('h1');
h1.append('test');

// 3ème méthode (celle pour les objets)
// Créer un élément
let helloWorld = document.createElement('div');

// Le personnaliser
helloWorld.textContent = "Hello World !";

// L'ajouter à notre page
 document.body.append(helloWorld); 
// document.body.appendChild(helloWorld); (après) Spécifiquement pour un objet , chaine de caractère non possible 

// document.body.insertBefore(helloWorld, document.querySelector('.container'));

document.querySelector('.container').prepend(helloWorld);


//modifier le Dom


let h1 = document.getElementsByTagName('h1')[0];
h1.textContent = "Hello World !";
h1.innerHTML = "<div style='font-weight: normal'>Hello World !</div>";

console.log(h1);


/* Résumer


Accéder aux éléments

    getElementsByTagName() - Sélectionne tous les éléments avec la balise entre parenthèses

    getElementById() - Sélectionne un seul élément : le premier ayant l'ID entre parenthèses

    getElementsByClassName() - Sélectionne tous les éléments avec la classe entre parenthèses

    querySelector() - Sélectionne un seul élément : celui avec le sélecteur entre parenthèses

    querySelectorAll() - Sélectionne tous les éléments avec le sélecteur entre parenthèses


Modifier les éléments

    textContent - Modifie le texte d'un élément

    innerHTML - Modifie l'HTML d'un élément


Ajouter et supprimer des éléments

    createElement() - Crée un élément

    prepend() - Ajoute l'élément entre parenthèses devant l'élément cible

    append() - Ajouter l'élément entre parenthèses derrière l'élément cible (peut contenir du texte)

    appendChild() - Ajouter l'élément entre parenthèses derrière l'élément cible (ne peut pas contenir du texte)

    insertBefore() - Insère un élément avant l'élément cible


Modifier le style d'un élément

    style.propriété - Modifie la propriété CSS spécifiée, par exemple : style.color = "orange"

    className - Modifie les classes d'un élément */