 <?php

# PARAMETRE INFINI

function ma_fonction(...$lotOfVariables){

    # Pour charques information de lots of variable que tu vas sstocker dans une variable intermédiaire data tu affiches dat a chaque fois. Premier appel, Deuxiême appel. Affichage a la suite des autres. Boucle for each 

foreach($lotOfVariables as $data)
 echo $data;


}

ma_fonction (1);
ma_fonction (1,2);
ma_fonction (1,2,3,4,5);


?>

<?php

# PARAMETRE INFINI

function sum (...$numbers){

$res = 0;


foreach($numbers as $nb)
$res =+ $nb ; // $res = $res + $nb

echo $res;
}



sum(1,228,64,-52,16.45);

?>