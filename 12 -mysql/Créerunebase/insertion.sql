Insertion de données
Il y a deux façons d’insérer des données :

Soit on ne précise pas les colonnes, dans ce cas il faudra spécifier toutes les données et dans le même ordre que les colonnes dans la table,
Soit on précise d’abord les colonnes que l’on renseigne, dans ce cas, on n’est pas obligé de toutes les spécifier et on peut les déclarer dans n’importe quel ordre.
Sans préciser les colonnes
INSERT INTO nom_table
VALUES('', '', '', …);
En précisant les colonnes
INSERT INTO nom_table (colonne1, colonne4, colonne2)
VALUES ('data_colonne1', 'data_colonne4', 'data_colonne2');
Cette manière de procéder paraît un peu plus longue à écrire, cependant, elle est bien plus claire dans la mesure où l’on voit immédiatement le nom des colonnes dans lesquelles on va insérer des données. En outre, elle est plus puissante car elle permet des insertions multiples. Voyez ci-dessous :

INSERT INTO nom_table (colonne1, colonne4, colonne2)
VALUES ('data_colonne1', 'data_colonne4', 'data_colonne2'),
       ('data2_colonne1', 'data2_colonne4', 'data2_colonne2');
Enfin, MySQL propose une autre manière d’insérer les données. Cette méthode est propre à MySQL et ne fait pas partie du standard SQL. Cependant, elle a l’avantage d’avoir une syntaxe proche de celle utilisée pour la modification d’enregistrements.

INSERT INTO nom_table SET colonne1 = 'data_colonne1', colonne2 = 'data_colonne2', colonne3 = 'data_colonne3';