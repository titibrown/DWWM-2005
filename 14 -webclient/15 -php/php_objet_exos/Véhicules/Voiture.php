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


public function Caracteristique ($marque,$maxspeed,$poids){

      $this->_marque. 'Skoda';
      $this->_modele. 'Yeti ' ;
      $this->_poids.  $poids ;

return Caracteristique () ; 
    
}

   
}



//$voiture = New Voiture ('Mon bolide est une' );
// $voiture-> Vitessemaximum();

?>