<?php

/* Opérateurs de comparaison : 


https://www.youtube.com/watch?v=m2LT_aPPuvk&list=PLrSOXFDHBtfFuZttC17M-jNpKnzUL5Adc&index=9

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

if ($number === 14) #identique et si le type est identique 

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


$number=1;

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


$number=1;

if ($number > 0)
echo "ok";
elseif ($number > 5)
echo "ok";
else 
echo"pas ok";




$number=1;

switch ($number)
{
case 1:
    echo "1";
    break;
    case 2:
        echo "2";
        break;
        case 3: 
            echo"3";
             break;
            
            default:
            break;
            echo"Pas valide";

}


$maVariable = "ok";


if (isset($maVariable)) # Est que ma variable est défini? 
echo "elle existe";

else 

echo"elle n'existe pas";











