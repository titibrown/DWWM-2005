let consommable = "chocolat";

switch(consommable) {

    case "courgette":
    case "carotte":   
    case "pomme de terre":
        console.log('Ceci est un légume');
        break;
    
    case "banane":
        console.log('Ceci est un fruit');
        break;

    default:
        console.log('Ceci n\'est ni un fruit ni un légume');

}

// Vérifier plusieurs conditions d'un coup avec JavaScript

let gareDeDepart = "Valenciennes";
let gareDArrivee = "";
let chauffeur = "";

if((gareDeDepart != "" || gareDArrivee != "") && chauffeur != "") {
  console.log('Le train va démarrer');
}
else {
  console.log('Le train ne peut pas démarrer');
}


// Boucle While 


let i = 1;

while (i < 5) {
    
    console.log('Ligne : ' + i);
    i++;

}


// Do while 


do {

    var prenom = prompt('Quel est votre prénom ?');

} while(prenom == "" || prenom == null)

alert('Bonjour ' + prenom);