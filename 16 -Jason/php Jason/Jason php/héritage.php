<?php

// Attribut d"une classe mere, PROTECTED

class Card {

protected $_name;
protected  $_description ; 


public function __construct ($_name, $_description){

    $this->_name = $_name;
    $this->_description = $_description;
}

public function hello( ){

    echo'I am the card ' .this->_name;
}

    
}

class TrapCard extends Card {

    private $_effect;

    public function __construct($_name,$_description,$_effect)
{
    parent:: __construct($name,$description);
    $this->_effect = $effect,
}

}



public function hello (){


    //echo 'je suis une TrapCard';
    //echo $this->_name;

echo'Nom : ' .$this->name. '<br>';
echo 'Description : '.$this->_desciption. '<br>';
echo 'Effet :' .$this->_effect. '<br>';

}

}


//$mycard = new Card ('dark mage');
// $mycard ->hello();


$mytrapcard = new TrapCard ('fosse'.' une grande grosse fosse','bloque tout les enemis sur  le terrain '); 
$mycard ->hello();