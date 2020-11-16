<?php

/*
Attribut ou proprieté : Variable appartenant à une classe 

Methode : Fonction appartenant a un classe Exemple = __construct()
*/

class Vehicle

{

    public $__name;


    public function __construct()
{

    echo 'Je suis construit !';


}

}

$obj1 = new Vehicle ();