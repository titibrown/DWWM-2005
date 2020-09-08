Il y a plusieurs grands types de droits, les droits d’administration, les droits de schémas et les droits de tables. Les droits d’administration s’appliquent sur toutes les bases et, comme leurs noms l’indiquent, les droits de schémas et de tables s’appliquent respectivement à une base et à une table.

Juste avant de vous montrer comment on définit les droits, il serait peut-être bon de savoir comment on affiche les droits relatifs à un utilisateur. C’est très simple.

SHOW GRANTS FOR 'user'@'host'

Droits d’administration
Les droits d’administration s’appliquent sur toutes les bases de données :

GRANT ALL PRIVILEGES ON *.* TO 'superadmin'@'localhost';

Droits au niveau des bases
GRANT SELECT, INSERT, UPDATE, DELETE ON buzut.* TO 'buzut_app'@'localhost';


Droits au niveau des tables
On descend encore ici d’un niveau. En effet, nous attribuons ici les droits au niveau des tables. Par exemple, dans la base “buzut”, nous pourrions décider que l’utilisateur “buzut_app” possède tous les droits sur users, mais seulement INSERT et SELECT sur la table “payments”, afin qu’in ne puisse pas supprimer des paiements passés.

GRANT SELECT, INSERT, UPDATE, DELETE ON buzut.users TO 'buzut_app'@'localhost';
GRANT SELECT, INSERT ON buzut.payments TO 'buzut_app'@'localhost';

Les droits sont dans l’ensemble les mêmes que ceux s’appliquant aux bases, nous retrouvons ALTER, CREATE, DELETE, DROP, GRANT OPTION, INDEX, INSERT, SELECT, UPDATE.

Le seul nouveau est TRIGGER, lequel permet de créer ou supprimer des déclencheurs (ou triggers).