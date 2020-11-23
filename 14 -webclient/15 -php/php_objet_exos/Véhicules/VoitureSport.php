<?php

class VoitureSport extends Voiture {

   protected $_marque;
   protected $_modele;
   protected $_poids;
   protected $_maxspeed ;


public function __construct (string $marque, string $modele, int $poids = '1000' , int $maxspeed) {
  
  
   $this->_marque = $marque;
   $this->_modele = $modele;
   $this->_poids = $poids;
   $this->_maxspeed = $maxspeed;

  }
