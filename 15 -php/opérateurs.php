<?php 

#  https://www.youtube.com/watch?v=FeLf4G800ks&list=PLrSOXFDHBtfFuZttC17M-jNpKnzUL5Adc&index=8


# Arithmétiques : + , -, * , /, %, **
# Fonction utiles : intdiv() , fmod()



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

echo $result; 



