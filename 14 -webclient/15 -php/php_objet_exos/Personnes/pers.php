public function GetAdresse(){

return $this->$adresse;

}

public function AddAdresse($adresse){

$this->_adresse [] = $adresse;

}


public function DisplayAdresses(){
    $result ="";
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