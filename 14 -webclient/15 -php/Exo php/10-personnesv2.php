<?php


$age= 48;

$retraite= 60;
$annee= $retraite-$age ;

function CalculRetraite (int $annee){
    


    if ($age < 0) {
        echo 'Wtf Dude, you are not even born yet';
    }
}

?>