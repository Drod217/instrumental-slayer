DROP DATABASE IF EXISTS 'instrumental_db';
CREATE DATABASE 'instrumental_db';


CREATE TABLE 'character_attributes'(
	id INT NOT NULL AUTO_INCREMENT,
	class VARCHAR(50) NOT NULL,
	primary VARCHAR(50) NOT NULL,
	secondary VARCHAR(50) NOT NULL,
	speed INTEGER(11) NOT NULL,
	magic INTEGER(11) NOT NULL,
	physical INTEGER(11) NOT NULL,
	health INTEGER(11) NOT NULL,
	defense INTEGER(11) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE 'class_abilities'
	id INT NOT NULL AUTO_INCREMENT,
	ability VARCHAR(50) NOT NULL,
	type VARCHAR(50) NOT NULL,
	property VARCHAR(50) NOT NULL,
	initial value INTEGER(11) NOT NULL,
	special property VARCHAR(50) NOT NULL,
	special value INTEGER(11) NOT NULL,
	PRIMARY KEY (id)
);

//////////////////HANDLEBARS SCHEMA///////////////////////////

the table is created dynamically in the char.js


USE slayer_db;
INSERT INTO chars (id, name, charClass, tempo, songLength, beats, charXP, charLevel, songURL, imageSRC, createdAt, updatedAt) VALUES
("1", "Jack Black", "rogue", 292, 289, 67, 300, 2, "www.google.com", "./assets/img/player.jpg", current_date(), current_date()),
("2", "Jill Hammer", "warrior", 382, 109, 97, 400, 3, "www.google.com", "./assets/img/enemy.jpg", current_date(), current_date())


