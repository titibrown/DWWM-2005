<?php

/*Une Voiturepossède toujours un Moteur. Chaque moteur est caractériséparune marque et une vitesse maximale
exprimée en kilomètres par heure (km/h).Chaque moteur ne peut-être rattaché qu’à une seule Voiture.
Une Voiture peut accepter des Moteur de toutes marques.Unevoiture possède une opération qui permet de 
 la vitesse maximale de la Voiture. La vitesse maximale de la voiture est calculée selon la vitesse
  maximale du moteur et le poids de la voiture.Formulesimplifiéede calculde la 
vitesse maximale d’une voiture:Voiture.vitesseMax=Moteur.vitesseMax-(Voiture.poidsx 30%) */



    class Moteur extends Voiture{

         private int $_maxspeed;


    public function __construct(string $marque, int $maxspeed)
{
    SetMarque($marque);

    $this->_maxspeed = $maxspeed;

}

    public function getMaxSpeed() : int
{

    return $this->_maxspeed;

}
    
   
    public function setMaxSpeed(int $maxspeed)
{
   $this->Voiture.$maxspeed = $marque.$maxspeed - $poids x 30%)

}

}


 