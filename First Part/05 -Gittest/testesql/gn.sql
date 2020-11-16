DROP DATABASE IF EXISTS  GC;
CREATE DATABASE IF NOT EXISTS GC CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

use GC; 

CREATE TABLE clients(
  client_id int(11) NOT NULL AUTO_INCREMENT,
  client_firstname varchar(65) NOT NULL,
  client_lastname varchar(65) NOT NULL,
  client_address varchar(65) NOT NULL,
  client_birthdate date NOT NULL,
  client_tel char(12) DEFAULT NULL,
  client_purchases int(11) NOT NULL DEFAULT '0',
   PRIMARY KEY(client_id)
);
CREATE TABLE products(
   product_id int(11) NOT NULL AUTO_INCREMENT,
   product_price float4 (5,2) NOT NULL,
   product_name VARCHAR(50) NOT NULL,
   product_stock int NOT NULL,
   product_origin VARCHAR(50) NOT NULL,
   product_weight VARCHAR(50) NOT NULL,
 
PRIMARY KEY(product_id),
   UNIQUE(product_name)
);
CREATE TABLE sizes(
   type VARCHAR(50),
   PRIMARY KEY(type)
);
CREATE TABLE categories(
   category_id int (11) auto_increment NOT NULL,
   category_name VARCHAR(50),
   PRIMARY KEY(category_id)
);
CREATE TABLE pictures(
   picture_id INT,
   picture_name VARCHAR(50) NOT NULL,
   picture_chemin VARCHAR(255) NOT NULL,
   PRIMARY KEY(picture_id)
);
CREATE TABLE matieres(
   matiere_id INT (11) NOT NULL,
   matiere_name VARCHAR(50) NOT NULL,
   matiere_desc TEXT (255) NOT NULL,
   PRIMARY KEY(matiere_id)
);
CREATE TABLE purchase(
    client_id int(11) NOT NULL ,
    product_id int(11) NOT NULL ,
    purchase_prod_id int(11) NOT NULL ,
	purchase_quantity int (10) NOT NULL,
    purchase_sale_price int (10) NOT NULL,
    purchase_cost_price int (10) NOT NULL,
    purchase_date DATE NOT NULL,
    purchase_advance_pre_order int (10) NOT NULL,
    purchase_total INT (10) NOT NULL,
    purchase_balance INT (10) NOT NULL,
	PRIMARY KEY(client_id, product_id),
    FOREIGN KEY(client_id) REFERENCES clients(client_id),
    FOREIGN KEY(product_id) REFERENCES products(product_id),
	FOREIGN KEY(purchase_prod_id) REFERENCES products(product_id)

);
CREATE TABLE dispose(
   `product_id` int(11) NOT NULL,
   type VARCHAR(50),
   PRIMARY KEY(product_id, type),
   FOREIGN KEY(product_id) REFERENCES products(product_id),
   FOREIGN KEY(type) REFERENCES sizes(type)
);
CREATE TABLE own (
   product_id int(11) NOT NULL ,
   category_id INT(11) NOT NULL,
   PRIMARY KEY(product_id, category_id),
   FOREIGN KEY(product_id) REFERENCES products (product_id),
   FOREIGN KEY(category_id) REFERENCES categories(category_id)
);
CREATE TABLE contain(
   product_id int(11),
   picture_id INT,
   PRIMARY KEY(product_id, picture_id),
   FOREIGN KEY(product_id) REFERENCES products(product_id),
   FOREIGN KEY(product_id) REFERENCES pictures(picture_id)
);
CREATE TABLE make(
   product_id int(11) NOT NULL ,
   matiere_id INT (11) NOT NULL,
   PRIMARY KEY(product_id, matiere_id),
   FOREIGN KEY(product_id) REFERENCES products(product_id),
   FOREIGN KEY(matiere_id) REFERENCES matieres(matiere_id)
);

#CREATE TABLE taxe 
#CREATE TABLE return products
#CREATE TABLE description
