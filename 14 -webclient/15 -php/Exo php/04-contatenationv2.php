<?php

// concatenationV2


//$firstname = ("Timothy") ;
//$lastname = ("Brown");
//$lastname = strtoupper($lastname);
//$firstname =ucfirst($firstname);
//echo  $firstname. " " .$lastname;


function concatenationV2 ($lastname, $firstname){


    return strtolower($lastname) . " " . strtoupper($firstname);
}

echo concatenationV2('Brown','Timothy')


?>