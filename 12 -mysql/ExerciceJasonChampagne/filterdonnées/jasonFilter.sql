use fv_database;

-- = égalité 
-- != différence
-- > < <= >=
-- AND : et 
-- or : ou

-- SELECT * FROM fv_games where id_game = 11 ;
-- SELECT * FROM fv_games where id_game > 5 ;

-- BETWEEN

-- SELECT * FROM fv_games where game_price > 5 and game_price < 30 ;
--  SELECT * FROM fv_games where game_price between 0 and 20;

-- FILTRER 

-- SELECT * FROM fv_games where game_stock = 2 or  game_stock = 4 or game_stocks = 6;
-- SELECT * FROM fv_games where game_stock in (2,4,6);
-- SELECT * FROM fv_games where game_stock in ('a','b','c');   Cote A B C  pour préciser  type de caractère par exemple


-- FILTER SELON LE NOM ( % mettre avant ou après ) ( le _ a mettre en fin selon recherche ( un ou plusieurs )

-- select * from FV_GAMES WHERE GAME_TITLE LIKE 'POKÉMON%'; 
-- select * from FV_GAMES WHERE GAME_TITLE LIKE 'grand_';  




