<?php


/* Accesseurs : Getter (Lire un attribut) ->getAttribute
                Setter (Modifier un attribut) ->setAttribute


*/


class Vehicle{

private $_name;
private $_speed;

public function __construct (string $name, int $speed){

$this->_name = $name;
$this->_speed =$speed;

}
public function move ()
{

echo'le Vehicule'.$this->_name.' se deplace a ' .$this->_speed. 'Km/h';
    
}
}

$obj1 = new Vehicle ('xc 450', 650);




?>