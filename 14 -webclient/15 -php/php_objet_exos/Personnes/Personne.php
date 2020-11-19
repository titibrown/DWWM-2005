<?php

class Personne {

    private $_nom;
    private $_prenom;
    private $_sexe;
    private $_age;
    private $_id;
    private $_adresse;
    private $_
    
    public function __construct (string $_nom, string $_prenom, string $_sexe, int $_age, int $_id, string $_adresse){

        $this->_nom = $nom;
        $this->_prenom = $prenom; 
        $this->_sexe = $sexe ;
        $this->_age = $age;
        $this->_id =$id;
        $this->_adresse = $adresse;
        
}
#Setter 


public function SetAdress ($adresse){

$this->_adresse = $adresse;

}

public function SetPrenom($prenom){
$this->_prenom =$prenom;

}

public function SetSexe($sexe){
$this->_sexe= $sexe;

}

public function SetAge($age){

$this->_age = $age; 

}

public function SetId($id){

$this->_id = $id;


}


public function SetAdresse($adresse){

$this->_adresse=$adresse;


}

#Getter 


public function GetNom (){

return $this->$nom ;

}


public function GetPrenom(){

return $this->$prenom;

}

public function GetSexe(){

return $this->$sexe;

}


public function GetAge (){

    return $this->$age;

}


public function GetId(){

return $this->$id;

}


public function GetAdresse(){

return $this->$adresse;

}

public function AddAdresse($adresse){

$this->_adresse [] = $adresse;

}


public function DisplayAdresses(){
    $resulut ="";
    foreach ($this->adresses as $adresse){
        $result .=$adresse. " ";
    }
return $result

}

public function __toString(){


return "$nom : $this->_nom $prénom : $this->_prenom _age : "
."$this->age adresse : {$this->DisplayAdresses()}";

}


}