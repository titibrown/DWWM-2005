<?php
$fichier =  "me joindre au +33(6)25369854 entre 
a fait plus de ventes au 2eme trimestre lorsque
par mail à example@gmail.com ou au +33(1)25364125
+33(2)12365987
avec le devis qui s'élève à un montant de
à en discuter au +33(2)14785421 pour toute question
avec +33% d'augmentation sur l'année dernière
le +33(a)78569852 est invalide"


$lignes = explode("\n", $fichier);


echo "Vérifier si une ligne contient au moins un match"

foreach($lignes as $ligne){
    $result = preg_match('/\+33\(([1-9])\)(\d{2})(\d{2})(\d{2})(\d{2})/', $ligne, $matches);
    echo ($result ? "True" : "false") . $ligne ."\n"
}