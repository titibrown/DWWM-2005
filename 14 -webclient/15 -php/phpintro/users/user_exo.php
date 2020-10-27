<html>
    <head>
        <meta charset="utf-8">
        <title>Users</title>
    </head>
    <body>
        <h1>Utilisateurs</h1>

        <?php 
            // Data Source Name = Chaine de connexion 
            $dsn = 'mysql:host=127.0.0.1;port=8889;dbname=db_users_simple;charset=utf8';

            /** @var PDO $dbConnect */
            $dbConnect = new PDO($dsn, 'root', 'root');

            /**
             * CONSIGNES :
             * 
             * Si le paramètre 'id' est fourni dans l'url: 
             *      Afficher l'utilisateur correspondant à l'id fourni
             *      Afficher 'aucun résultat' si aucun utilisateur trouvé
             * Sinon
             *      Afficher tous les utilisateurs
             * 
             */


            $id =$_GET ['id'] ?? 0;

            $id=intval($id);



            if($id > 0){

            $statement=$dbConnect->query ("SELECT * FROM users WHERE user_id =$id");

            $user=$statement->fetch();
            var_dump($user);

            
            if ($user){

                echo $user['user_name'];


            }
            else{
                echo 'aucun utilisateurs';
            }
          
            }



            else {
                $statements=$dbConnect->query("SELECT $ FROM users");
                $users=$statements->fetchAll(PDO::FETCH_ASSOC);
                foreach ($users as $user);
                {

                echo $user['user_name'];

            }
            }

        ?>
        ?>


    </body>
</html>