Modification de données
On va utiliser la commande UPDATE pour modifier des données déjà enregistrée.

UPDATE nom_table
SET col1 = val1 [, col2 = val2, ...]
[WHERE ...];
Attention à bien préciser la clause WHERE qui permet de localiser la ligne dans laquelle vous voulez modifier une valeur. Sans elle, toutes les lignes de la colonne concernée seront modifiées ! Nous reparlerons de WHERE plus en détails juste après.

Prenons comme exemple une table qui représente notre collection de films. Cette table contient quatre colonnes : une colonne id, titre, description, format. Si on veut modifier le titre du film “avatar”, voici la requête qu’il faut :

UPDATE films
SET titre = 'Avatar 2'
WHERE titre = 'avatar';
Évidemment, on peut modifier plusieurs ligne à la fois. Mettons que l’on veuille préciser dans la description le format des films en mp4 :

UPDATE films
SET description = 'Ce film a été encodé en mp4'
WHERE format = 'mp4';
Automatiquement, toutes les descriptions des films ayant pour format mp4 seront changées. Vous comprenez donc surement l’utilité du WHERE, qui ajoute une condition. Sans cette condition, toutes les lignes sont concernées !

