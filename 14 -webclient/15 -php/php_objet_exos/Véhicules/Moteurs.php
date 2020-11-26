<?php

/*Une Voiturepossède toujours un Moteur. Chaque moteur est caractériséparune moteur et une vitesse maximale
exprimée en kilomètres par heure (km/h).Chaque moteur ne peut-être rattaché qu’à une seule Voiture.
Une Voiture peut accepter des Moteur de toutes marques.Unevoiture possède une opération qui permet de 
 la vitesse maximale de la Voiture. La vitesse maximale de la voiture est calculée selon la vitesse
  maximale du moteur et le poids de la voiture.Formulesimplifiéede calculde la 
vitesse maximale d’une voiture:Voiture.vitesseMax=Moteur.vitesseMax-(Voiture.poidsx 30%) */

   


class Moteur{

         private string $_moteur; 
         private string $_maxspeed;

         ################## CONSTRUCTOR ##################

public function __construct(string $moteur, int $maxspeed)
{
    setMoteur($moteur);

    setMaxSpeed ($maxspeed);

}
################## SETTERS ##################

public function setMoteur ($moteur){
    if (empty($moteur)){
       $this->_moteur = 'le champ moteur est vide'; 
    }
    else {
       $this->_moteur = $moteur;
    }

}

public function setMaxSpeed(int $maxspeed)
{
  //  $this->Voiture.maxspeed=Moteur.vitesseMax-(Voiture.poidsx 30%)
   $this->$maxspeed = ( $moteur - $poids x 30/100);

}
################## GETTERS ##################

public function GetMoteur() : string
{
   
    return $this->_moteur;
} 

public function getMaxSpeed() : int
{

    return $this->_maxspeed;

}
    



}


    