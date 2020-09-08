Ordonner la sélection
Il est souvent bien pratique de classer notre sélection par ordre croissant, décroissant ou alphabétique. On utilisera pour cela la commande ORDER BY. Elle n’est pas bien compliquée à utiliser, on lui dit quelle colonne servira au classement, et si on veut un ordre croissant ESC ou décroissant DESC. On reprend la requête des films pour l’exemple :

-- sélection de toutes les colonnes des films au format mp4 et webm
-- et tri alphabétique selon le titre du film
SELECT *
FROM films
WHERE format = 'mp4' OR format = 'webm'
ORDER BY titre;

-- on veut par exemple avoir en premier les derniers films ajoutés,
-- donc les ids les plus grands d'abord
SELECT *
FROM films
WHERE format = 'mp4' OR format = 'webm'
ORDER BY id DESC;