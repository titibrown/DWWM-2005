Eliminer les doublons
Mettons que l’on veuille savoir tous les âges représentés par les personnes enregistrées sur notre site. Si on fait :

SELECT ages
FROM membres
ORDER BY ages;
Alors on aura 10 entrées pour l’age 14 ans, 150 pour 20 ans… Pas très pratique pour une vue d’ensemble. On peut donc utiliser DISTINCT qui, comme son nom le laisse à penser, ne sélectionne une valeur que si elle est différente d’une déjà sélectionnée.

SELECT DISTINCT ages
FROM membres
ORDER BY ages;
On aura donc la liste de tous les âges représentés par les membres de notre site, sans doublons, et ordonnée par ordre croissant (ORDER BY).