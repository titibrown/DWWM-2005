use tp_agences_voyages;


-- Créer les vues répondant aux demandes suivantes :


-- 1) Afficher les informations de toutes les villes (informations du pays incluses)

DROP VIEW IF exists view_cities;

CREATE VIEW view_cities
AS
SELECT cities.*, countries.country_name
FROM countries
JOIN cities ON cities.country_code = countries.country_code ; 


SELECT * FROM view_cities;




-- 2) Afficher les noms, prénoms, email de tous les clients qui ont réservé au moins 1 voyage. 
--    On a besoin de connaitre le titre du voyage ainsi que le pays de destination


CREATE VIEW info_reservations
AS
SELECT 

client_lastname,
client_firstname ,
client_email ,
trip_title,
country_name

FROM orders
JOIN clients ON orders.client_id = clients.client_id
JOIN trips ON orders.trip_code = trips.trip_code
JOIN cities ON trips.city_code = cities.city_code
JOIN countries ON cities.country_code = countries.country_code;
	

SELECT * FROM info_reservations





-- 3) Créer la vue permettant d'afficher :
--     Toutes les informations d'un client (sauf son mot de passe)
--     Le  nom de son commercial associé
--     Le nombre de voyages qu'il a commandé ET payé
--     La destination de son dernier voyage (ville + pays)



DROP VIEW IF EXISTS info_clients

AS
SELECT 
client_id ,
client_lastname ,
client_firstname ,
client_email ,
client_phone ,
client_added ,
com_name,
FROM orders

