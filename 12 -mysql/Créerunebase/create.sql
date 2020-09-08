Créer une base
Pour créer une base, la syntaxe n’est pas bien complexe.

CREATE DATABASE nom_de_la_base
Il est possible de spécifier directement à la création de la base l’encodage de caractères que l’on veut utiliser. Pour cela, il faut ajouter des arguments à la commande de création de BDD. Par exemple, pour un encodage en UTF-8 :

CREATE DATABASE maBase DEFAULT CHARACTER SET utf8mb4;
Il existe en plus du set de caractères, ce qu’on appelle l’interclassement, ou collation. L’interclassement précise au set de caractères les spécificités d’une langue. Par exemple, que le “E” est semblable au “e” ou au “é”. Si on ne précise pas d’interclassement, MySQL choisi celui qui est par défaut avec le set de caractères choisi.

# consulter les charset disponibles
SHOW CHARACTET SET;

# consulter les collations disponibles
SHOW COLLATION
Voici un exemple de définition pour l’UTF-8 avec une collation unicode multilingue insensible à la casse :

CREATE DATABASE maBase DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
On a a peu près fait le tour de la commande de création de bases. La commande générique complète est donc la suivante :

CREATE DATABASE db_name [DEFAULT CHARACTER SET character_set_name [COLLATE colla