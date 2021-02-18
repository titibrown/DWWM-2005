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

  

