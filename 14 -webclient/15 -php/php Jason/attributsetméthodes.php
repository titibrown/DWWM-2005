<?php

/*
Attribut ou proprieté Private : Variable appartenant à une classe 

Methode Public : Fonction appartenant a un classe Exemple = __construct()
*/

class Vehicle

{
    // private $_name; 
    public $_name;


    public function __construct(string $name, int $power)

{

            $this->_name = $name; 

}


public function move(){


    // echo'Le véhicule se déplace ';
     echo $this->_name. ' se déplace ';
}


}

$obj1 = new Vehicle ('Mon bolide');
$obj1-> move ();


//echo $obj1->_name. '<br>';

/*$obj2 = new Vehicle ('Mon autre bolide');
echo $obj2->_name. '<br>';*/





?>