// https://www.youtube.com/watch?v=YCIMh2dH8AI&list=PLrSOXFDHBtfFuZttC17M-jNpKnzUL5Adc&index=11

// MODIFIER UNE numberIABLE DANS UNE FONCTION 

# Types de paramètres : 


array
callable
int
floatvalstring
bool 


<?php

function modify_numberiable( int $number){

$number = "hacked";
return $number;


}

$number = "OK";
$number = modify_numberiable($number);
echo $number;


# $number = "ok";
#echp modify_numberiable($number);


?>


# passage par reference 

<?php

function ma_fonction(&$number){

$number = 6;



}

$number = 14; #"ok" 
ma_fonction ($number);
echo $number;



?>



function ma_fonction (int $var1, string $var2 = " truc ")
{


}


ma_fonction(14);
ma_fonction(6,"bonjour");


