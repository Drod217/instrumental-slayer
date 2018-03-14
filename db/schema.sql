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

