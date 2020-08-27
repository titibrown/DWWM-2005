DROP DATABASE ma_base;
CREATE DATABASE ma_base; 

USE ma_base;


CREATE TABLE ma_table
(

mon_id INT PRIMARY KEY,
mon_nom CHAR (10) NOT NULL,
ma_date DATETIME NOT NULL ON UPDATE CURRENT_TIMESTAMP

)Engine=InnoDB	CHARSET utf8 COLLATE utf8_general_ci;


