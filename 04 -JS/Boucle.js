l// For In 

let panier = ['fraise', 'banane', 'poire'];

for (const fruit in panier) {
    // panier [fruit] = 'pomme';            Modifier la valeur 
    console.log(panier[fruit]);
}


// boucle for..of 


let panier = ['fraise', 'banane', 'poire'];

for (const fruit of panier) {
  // console.log(fruit);
  console.log(panier.indexOf(fruit));
}


// foreach

let listeDePays = ['France', 'Belgique', 'Japon', 'Maroc'];

// for (const pays of listeDePays) {
//     console.log(pays);
// }

// listeDePays.forEach(function(pays){
//     console.log(pays);
// });

listeDePays.forEach(pays => console.log(pays));