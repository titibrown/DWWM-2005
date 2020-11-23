<?php

class Intervenant extends Personne  {

    private float  $_salaire;
    //private string $_poste;
    private float $_revenue;
    

    public function __construct( string $poste, float $revenue, float $salaire)
    {

        $this->_salaire = $salaire;
        $this->_revenue = $revenue;

    }

    public function setSalaire ($salaire)
    {
        $this->_salaire = $salaire;

    }

    public function setAutreRevenue($autrerevenue)
    {
        $this->_autrerevenue = $revenue 


    }


    public function getSalaire() : int   
    {

        return $this->$salaire;

    }

    public function getAutreRevenue() : int
    {

        return $this->_autrerevenue;


    }


    public function calculeCharge(float $salaire, float $revenue, )
    {   
            

            if ($age<=55)

    {
            return  $this->_salaire  *  20 / 100) +  ($autrerevenue * 15 / 100 ) ; 
      
    }   else
    
    {

             $this->($salaire + 10 %) + ($autrerevenue + 7.5 %);
             return $calculeCharge ; 

    }      

            

}




}

