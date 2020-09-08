Grouper pour mieux régner
Ok normalement c’est l’inverse… Pour autant, en SQL, grouper les résultats est d’une extraordinaire puissance car c’est moins d’informations inutiles à traiter.

Admettons que nous ayons un blog avec un système de commentaires. Chaque commentaire possède notamment l’email de son auteur. Si on veut récupérer l’email de tous les auteurs, inutile d’afficher autant de lignes que de fois que chaque personne à commenté. On dira donc à MySQL de grouper le résultat par email comme ceci :

SELECT email
FROM comments
GROUP BY email;
Ça représente immédiatement un sacré gain en clarté ! Et puis si vous deviez traiter ces données avec un autre langage après, vous gagnez en concision dans votre code mais aussi en performance (MySQL n’envoie pas de données inutiles).

Pour la route, admettons que nous voulions compter le nombre de commentaires de chaque auteur ? Facile.

SELECT count(email), email
FROM comments
GROUP BY email;
COUNT() est une fonction native SQL dont nous ne parlons pas ici. MySQL propose de nombreuses fonctions très puissante et il n’est pas possible de toutes les lister. As usual, la doc est votre amie.

