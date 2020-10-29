<?php


$age= 48;
$age1= $retraite-$age ;

function CalculRetraite(int $age1)
{
    $retraite= 60;


    if ($age1 < 0) {
        echo 'Wtf Dude, you are not even born yet';
    }
}

?>