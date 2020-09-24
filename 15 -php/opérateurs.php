<?php 

#  https://www.youtube.com/watch?v=FeLf4G800ks&list=PLrSOXFDHBtfFuZttC17M-jNpKnzUL5Adc&index=8


# Arithmétiques : + , -, * , /, %, **
# Fonction utiles : intdiv() , fmod()
# Affection : =, +=, -=, *=; %=
# Concaténation : ., .=
# Logiques : and, &&,or,xor,

$age = 25;
echo 'Tu as ' .$age. ' ans ';

$number1 = 14;
$number2 = 26;

#Division decimal

$result = $number1 * $number2;
$result = $number1 / $number2;

#Division Entiere 

$result = intdiv($number1, $number2);

$result = fmod(14,26);
$result = $number1 % $number2;

$result = $number1 ** $number2;


#affectation

$number1 = 2;
$number2 *= 4; 

$number1 = 2;
$number2 += 4; 

echo $result;

#Concaténation 

$strA = "Bonjour";
$strB ="tout le monde";

$res = $strA.$strB; # Variable Intermédiaire , optimisation

echo $strA.$strB;
 


$chaine = "";
echo $chaine;

$chaine .= "A";
$chaine.="B";
echo $chaine;


# Logiques 


$a = true;
$b = true;

$a = true;
$b = false;


$a = true;
$b = true;
$c = false;

echo $a and $b;
echo $a or $b;



