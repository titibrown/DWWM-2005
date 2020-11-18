<?php


class Voiture{

    protected $_marque;
   // protected $_modele;
   // protected $_poids;

public function __construct (string $marque /* string $modele, int $poids*/) {

   $this->_marque = $marque;
   //$this->_modele = $modele;
  //  $this->_poids = $poids;

}

public function Caracteristique (){

    echo  $this->_marque. 'Skoda';

      // $this->_modele. 'Yeti ' ;

//       $this->_poids.  $poids ;
    
}

}

$voiture = New Voiture ('Mon bolide est une' );
$voiture-> Caracteristique();


?>