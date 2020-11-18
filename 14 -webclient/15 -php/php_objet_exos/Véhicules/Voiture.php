<?php

class Voiture{

   protected $_marque;
   protected $_modele;
   protected $_poids;
   protected $_maxspeed ;


public function __construct (string $marque, /* string $modele,*/ int $poids, int $maxspeed) {
   $this->_marque = $marque;
  // $this->_modele = $modele;
   $this->_poids = $poids;
   $this->_maxspeed = $maxspeed;
}
//public function Caracteristique (){

    // echo  $this->_marque. 'Skoda';
      // $this->_modele. 'Yeti ' ;
//       $this->_poids.  $poids ;
    
//}

public function Vitessemaximum(){



return $this->$maxspeed= $marque.$maxspeed - $poids * 30%;
    
    }
    
}

$voiture = New Voiture ('Mon bolide est une' );
$voiture-> Caracteristique();

?>