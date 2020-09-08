Prendre une petite partie de la sélection
Parfois, on ne voudra que les x premiers résultats de notre sélection. On va pour ça utiliser la commande LIMIT. Elle prend deux paramètres :

Le premier est le nombre de lignes à sélectionner,
Le second, OFFSET, précise les x premières lignes à ignorer.
-- n'affiche que les 10 premiers résultats
SELECT pseudos
FROM table_membres
ORDER BY pseudos
LIMIT 10;
On peut aussi vouloir commencer l’affichage à partir de n ligne. On précisera donc l’OFFSET a n-1. En effet, l’OFFSET ignore les x premières lignes que vous lui passez en paramètre, et commence la sélection à la ligne suivante.

-- commence à la 5eme ligne et affiche 10 ligne, donc les ligne 5 à 15
SELECT pseudos
FROM table_membres
ORDER BY pseudos
LIMIT 10 OFFSET 4;
On peut aussi écrire la commande sans le mot-clef OFFSET, dans ce cas, on commence par préciser l’OFFSET puis, séparé par une virgule, le nombres de lignes à sélectionner :

SELECT pseudos
FROM table_membres
ORDER BY pseudos
LIMIT 4, 10;
