
//Exercice 2.1.1 :

//L'utilisateur saisit une valeur en kilomètres comprise entre 0.01 et 1 000 000. Si la valeur est hors limite, 
//l'utilisateur est invité à saisir une nouvelle valeur. Si la valeur est égale à "q", le programme se termine et se ferme.
//Formule km vers mi :
//Le programme affiche le résultat de la conversion sous forme de nombre réel double précision.
//Exemple d’affichage en mode Console :
//Programme de conversion Kilomètres -> Miles. Saisir une valeur en Kilomètres :
//17
//17 Kilomètres = 10.5655 Miles
//Appuyez sur une touche pour quit ter.





let Kilometres = 0;
let Miles = 0 ; 
let result = 0;


 do {
     Kilometres = Math.round(Math.random()) * 1,60934  ;
    //Kilometres= parseInt("Saisir une valeur comprise entre 0,01 et  1000000"); 
    result = Kilometres * 1,60934 ;
}

while (Kilometres  > 1000000);  {
    console.log("saisir une nouvelle valeur ");
}