


<?php

#Création de Tableau, modification d'une valeur dans un tableau 
#Parcour de tableau = foreach 



$tab_pop_villes = [


    "Collonge" => 64,
    "Nogent"=> 19,

];


echo '<pre>';
echo $tab_pop_villes["Collonge"]; # Pour modifier la valeur : $tab_pop_villes ["Collonge"] = 129;
echo '<pre>';


#######################################################################

?>

<?php

$tab_integers= [

10,
11,
12,
13,
14,
15,

];


echo '<pre>';
print_r( $tab_integers) ;
echo'<pre>';


######################################################################

?>

<?php

# 




$tab_integers1= [

1 => 10 ,
"ok" => [5,4,3],
12 => 12,
"bonjour",
date ("Y-m-d"),
3.14

];


echo '<pre>';
print_r( $tab_integers1) ;
echo'<pre>';




?>


?>

<?php

# 




$tab_integers1= [

    "Collonge" => 64,
    "Nogent"=> 19,

];


foreach ($tab_pop_villes as $data)
echo'<p>' .$data. '<p>';


?>