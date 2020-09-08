Préciser les conditions
On a déjà brièvement vu à quoi servait WHERE et comment s’en servir. Petit rappel, WHERE permet d’ajouter une ou des conditions à la requête. Seulement jusque là, on l’a toujours utilisé avec l’opérateur =, alors que bien d’autres opérateurs existent.

Opérateur	Signification
=	égal
<	inférieur
<=	inférieur ou égal
>	supérieur
>=	supérieur ou égal
<> ou !=	différent
<=>	égal valable pour NULL

e crois qu’une explication s’impose pour la dernière ligne du tableau. On ne peut en fait pas faire de comparaison directe avec une valeur qui est égale à NULL (absence de valeur en fait), cependant, avec l’opérateur “<=>”, on peut demander les colonnes qui n’ont pas de valeur.

Il est possible d’adjoindre des opérateurs logiques à ces opérateurs de comparaison. La combinaison des deux ajoute encore un peu de complexité (pour beaucoup de puissance supplémentaire).

Opérateur	Symbole	Signification
AND	&&	ET
OR	||	OU
XOR		OU exclusif
NOT	!	NON
