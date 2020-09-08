CREATE USER 'buzut'@'localhost' IDENTIFIED BY 'XXXX';


Il peut aussi être bon de connaître la commande pour changer le mot de passe d’un utilisateur à posteriori. Notez que vous devez avoir des droits suffisants pour changer le mot de passe d’un autre utilisateur que celui avec lequel vous êtes connecté.
SET PASSWORD [FOR 'un_user'@'localhost'] = PASSWORD('nouveau_mdp');


