<?php

/* Opérateurs de comparaison : 

    ==   : (Egal à)
    ===  : (identique à : En valeur et en type)
    !=   : (différent de)
    !==  : (différence de valeur ou différences de type)

    */


#$number = 14 ; 



if ($number == 14)

{

    echo "number vaut 14";

}

if ($number === 14) #identique 

{

    echo "number vaut 14";

}


if ($number != 14)

{

    echo "number vaut 14";

}

if ($number !== 14) # Fonctionnement sur le Type  = Egalité et même type 

{

    echo "ok";

}


$nb1 = 14;
$nb2 = 8;

if ($nb1 == 14 xor $nb2 == 8)
{

echo "OK";

}

if ($nb1 == 14 && $nb2 == 8)
{

echo "OK";

}

if ($nb1 == 14 or $nb2 == 8)
{

echo "OK";

}

/* 
$var1 = 14;
$varb=8;
$result = $var1 <=>  $varB;
echo $result;

*/


/* 
$var1 = 5;
$varb=8;
$result = $var1 <=> $var2;

if ($result)
echo "ok";
*/

/*
$number=10;
if($number == 10 )
echo"OK";
*/


$number=10;

if ($number > 0)
{
    if ($number > 5)
    {
        if ($number > 10 )

            echo "Plus grand que 10 ";
        echo "Plus grand que 5";
    }


    echo "Plus grand que 0";
}

echo "Suite du programme...";





