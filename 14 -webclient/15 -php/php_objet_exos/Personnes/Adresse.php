<?php


class Adresse  {

    private int $_numero;
    private string $_rue;
    private string $_codepostal;
    private string $_commune;


    public function __construct(int $numero,string $rue,string $codepostal, string $commune)
    {
    
        setNumero($numero);
        setRue($rue);
        setCodePostal($codepostal);
        setCommune($commune);
        
    }

   ################## GETTERS ##################

    Public function getNumero() : int
    {

        return $this->_numero;

    }

    public function getRue()  : string 
    {

        return $this->_rue;
    }

    public function getCodePostal() : string
    {
        if (preg_match (" \^[0-9]{3,6}[a-z]\ ", $codepostal))
        return $this->_codepostal;
    }

    public function getCommune() : string
    {

        return $this->_commune;
    }


   ################## SETTERS ##################


    public function setNumero(int $numero)
    {
        if(empty($numero))
        {
            $this->_numero =' Le numéro de rue est vide';
        }else
        {
            $this->_numero = $numero;
        }

    }

    public function setRue(string $rue)
    {
        if(empty($rue))
        {
            $this->_rue =' Le nom de la rue est vide';
                
        }else
        {
            $this->_rue = $rue;
        }
    }
    public function setCodePostal (string $_codepostal)
    {
        if(empty($_codepostal))
        {
            $this->_codepostal =' Le code postal est vide '
        }else
        {
            $this->_codepostal = $codepostal;
        }

    }

    public function setCommune (string $_commune)
    {
        if(empty($commune))
        {
            $this->_commune='la commune est vide'
        }else
        {
            $this->_commune = $commune;
        }
    }
    
    }
    #######Get Info ###########


    public function getInfoAdresse (int $numero,string $rue, string $codepostal,string $commune)
    {

        $info = '  ' . $numéro . ' ' . $rue . ' ' . $codepostal . ' ' . $commune .;
        
        return $info;
    }
    
        

    }
}
}
