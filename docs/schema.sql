DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id INT NOT NULL auto_increment,
    burger_name VARCHAR(50) NULL,
    is_devoured BOOLEAN,
    PRIMARY KEY (id)
    );