<?php

// 


class Database {
    public static $_sgbd = 'MySQL';

    public satic function connect (){


        echo 'Je me connecte';
    }
}

// En dehors de le classe 

// Database::connect();
Database::$_sgbd;  