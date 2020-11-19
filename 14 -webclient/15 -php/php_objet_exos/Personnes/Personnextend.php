<?php

class Intervenant extends Personne  {

    private $_salaire;
    private $_poste;
    private $_revenue;

public function __construct( string $poste, float $revenue, float $salaire){

parent::__construct ();

$this->_salaire = $salaire;
$this->_poste = $poste;
$this->_revenue = $revenue;

}

public function SetSalaire ($salaire){

    $this->_salaire = $salaire;


}

public function GetSalaire(){

return $this->$salaire;

}


public function CalculeCharge($salaire){

return $this->$salaire * 20 %  

// + 15 % 


}




}

$int1= new Intervenant 
