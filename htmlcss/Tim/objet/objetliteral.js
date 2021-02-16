let mark = {
    prenom: "Mark", // propriété
    nom: "Zuckerberg",
    email: "mark@facebook.com",
    
    // À l'ancienne
    sePresenter: function(){
      console.log("Bonjour, je m'appelle " + this.prenom);
    }
  }
  
  mark.sePresenter();
  
  function recevoirLesCoordonnees() {
    return { latitude: 35, longitude: 139 }
  }
  
  let coordonnees = recevoirLesCoordonnees();
  console.log(coordonnees.latitude);
  console.log(coordonnees.longitude);


  // On crée une fonction constructeur pour nos utilisateurs

function Utilisateur(prenom, nom, email) {
    this.prenom = prenom;
    this.nom    = nom;
    this.email  = email;
    
    this.sePresenter = () => {
      console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email);
    }
  }
  
  // On crée un objet
  var mark = new Utilisateur("Mark", "Zuckerberg", "mark@facebook.com");
  var bill = new Utilisateur("Bill", "Gates", "bill@gatesnotes.com");
  
  // mark.sePresenter();
  // console.log(mark);
  
  mark.poste = "PDG de Facebook";
  
  // console.log(mark);
  // console.log(bill);
  
  function Logement(type, annee, placeDeParking, proprietaire) {
    this.type             = type;
    this.annee            = annee;
    this.placeDeParking   = placeDeParking;
    this.proprietaire     = proprietaire;
  }
  
  var appartementA = new Logement('Appartement', 2014, true, mark); // Mark est un objet
  
  // console.log(appartementA.proprietaire.prenom);
  console.log(appartementA);



  // Constructeur Object

  // Methode n'éffectue aucune opération
  // Fonction anonyme = This =  not possible 


  function Utilisateur(prenom, nom, email) {
    this.prenom = prenom;
    this.nom    = nom;
    this.email  = email;
  }
  Utilisateur.prototype.sePresenter = function() {
      console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email);
  }
  
  // On crée un objet
  var mark = new Utilisateur('Mark', 'Zuckerberg', 'mark@facebook.com');
  var bill = new Utilisateur('Bill', 'Gates', 'bill@gatesnotes.com');
  
  console.log(mark); // On voit que JavaScript ajoute une propriété __proto__ et constructor
  
  mark.sePresenter();
  
  // Créer un objet avec Object()
  var monObjet = new Object();
  monObjet.titre = "Le titre de l'objet";

  


  // Héritages


  // Constructeur de base
function Animal(nombreDePattes, poids) {
    this.nombreDePattes = nombreDePattes;
    this.poids         = poids;
  }
  Animal.prototype.presentation = function() {
    console.log('Cet animal possède ' + this.nombreDePattes + ' pattes et fait ' + this.poids + '.');
  }
  
  // Constructeurs spécialisés
  function Oiseau(nombreDePattes, poids, longueurDesAiles) {
    Animal.call(this, nombreDePattes, poids); // La fonction Call() permet d'appeler une fonction constructeur : en premier paramètre on donne l'objet actuel (this), ensuite, on donne les arguments pour son constructeur 
    this.longueurDesAiles = longueurDesAiles;
  }
  Oiseau.prototype = Object.create(Animal.prototype); // On change les informations en donnant un nouvel objet qui sera le prototype de notre constructeur animal
  Oiseau.prototype.constructor = Oiseau; // On redé finit la valeur de Oiseau.prototype.constructor car elle a été changée avec le changement de prototype
  
  function Mammifere(nombreDePattes, poids, typeDePoils) {
    Animal.call(this, nombreDePattes, poids);
    this.typeDePoils = typeDePoils;
  }
  Mammifere.prototype = Object.create(Animal.prototype);
  Mammifere.prototype.constructor = Mammifere;
  
  var perroquet = new Oiseau(2, '1kg', 'grandes');
  // console.log(perroquet.nombreDePattes);
  
  perroquet.presentation();