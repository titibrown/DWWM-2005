<?php

// Attribut d"une classe mere, PROTECTED

class Card {

private$_name;
private $_description ; 


public function __construct ($_name, $_description){

    $this->_name = $_name;
    $this->_description = $_description;
}

public function hello( ){

    echo'I am the card ' .this->_name;
}

    
}

class TrapCard extends {

public function hello (){


    echo 'je suis une TrapCard';
    echo $this->_name;
}

}


//$mycard = new Card ('dark mage');
// $mycard ->hello();


$mytrapcard = new TrapCard ('fosse'.' une grosse fosse bloque tout les enemis'); 
$mycard ->hello();