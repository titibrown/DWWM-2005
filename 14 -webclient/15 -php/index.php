<html>

<head>

<meta charset="utf-8">
<title>Users</title>

</head>

<body>
    
    <h1>Utilisateurs</h1>


    <?php

    // dsn = Data Source Name = cHAINE DE CONNEXION

    $dsn = 'mysql:host=127.0.0.1;port=8889;dbname=db_users_simple;charset=utf8';

    $dbConnect= new PDO($dsn,'root','root');

    // var_export($dbConnect);

    //  var_dump($dbConnect) ;


// stmp 

$statement = $dbConnect->query("SELECT * FROM users;");
// var_dump($statement);


$users= $statement->fetchAll(PDO::FETCH_ASSOC);
// echo'<pre>';
// var_export($users);
// echo'<pre>';

foreach($users as $users){

    echo $users [ 'user_name'];
    echo '<hr>';


}


?>





</body>



</html>