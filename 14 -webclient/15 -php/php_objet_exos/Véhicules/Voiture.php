<?php

class Voiture{

   protected $_marque;
   protected $_modele;
   protected $_poids;
   protected $_maxspeed ;


public function __construct (string $marque, string $modele, int $poids = '1000' , int $maxspeed) {
   $this->_marque = $marque;
   $this->_modele = $modele;
   $this->_poids = $poids;
   $this->_maxspeed = $maxspeed;
}

#Setter

public function SetMarque ($marque){

   $this->_marque = $marque;
}

public function SetModele($modele){

$this->_modele = $modele;

}

public function SetPoids($poids){

   $this->_poids = $poids;
}

public function SetMaxspeed($maxspeed){

$this->_maxspeed= $maxspeed;

}

#Getter


public function GetMarque (){

   return $this->_marque;
}

public function GetModele(){

return $this->_modele;

}

public function GetPoids(){

return $this->_poids;

}


public function GetMaxspeed (){

return $this->_maxspeed;


}


public function Caracteristique ($marque, $modele ,$poids){

      $this->_marque. 'Skoda';
      $this->_modele. 'Yeti ' ;
      $this->_poids.  $poids ;


      return $this->$marque ' ' .$this->$modele ' ' .$this->$poids

}

public function Vitessemaximum($maxspeed){


   return $this->_maxspeed = $marque.$maxspeed - $poids * 30% ;
      
      }
}
   
}



//$voiture = New Voiture ('Mon bolide est une' );
// $voiture-> Vitessemaximum();


#Consignes

/*  Une Voiture  est caractérisée  par  une  marque  et  un  modèle.  Il  est  également  possible  de  définir  le poids
du  véhiculeen kilogrammesmais ce n’est pas obligatoire(dans ce cas, le poids par défaut d’une voiture est 1000 Kg).
Une opération permet de retourner l’ensemble des informations(ex:«Renault Mégane, 750 Kg»).Tous les attributs 
sont «protected»et sont disponiblesvia desaccesseurspublics(«getters»et «setters»)

Une Voiturepossède toujours un Moteur. Chaque moteur est caractériséparune marque et une vitesse maximale
exprimée en kilomètres par heure (km/h).Chaque moteur ne peut-être rattaché qu’à une seule Voiture.
Une Voiture peut accepter des Moteur de toutes marques.Unevoiture possède une opération qui permet de 
 la vitesse maximale de la Voiture. La vitesse maximale de la voiture est calculée selon la vitesse
  maximale du moteur et le poids de la voiture.Formulesimplifiéede calculde la 
vitesse maximale d’une voiture:Voiture.vitesseMax=Moteur.vitesseMax-(Voiture.poidsx 30%)

Une VoitureDeCourse est une Voiture performante. Elle diffère d’une voiture classiquespour 2 raisons:
   -Une VoitureDeCoursen’accepte que des Moteurs de même marque oUne Voituredecourse «Renault»accepte
    des Moteurs «Renault»uniquement.-La formule de calcul de la vitesse maximale de la Voiture de course est 
    différente:oVoiture.vitesseMax=Moteur.vitesseMax-(Voiture.poidsx 5%).Uneopération permettra de retournerles 
    informations complètes d’une voiture de course:ex:«Renault F1, 450 Kg. Vitesse max:317km/h.


*/













?>


