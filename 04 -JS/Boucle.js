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