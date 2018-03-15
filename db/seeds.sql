-- var Char = sequelize.define("Char", {
--   name: DataTypes.STRING,
--   charClass: DataTypes.STRING,
--   tempo: DataTypes.INTEGER,
--   songLength: DataTypes.INTEGER,
--   beats: DataTypes.INTEGER,
--   charXP: DataTypes.INTEGER,
--   charLevel: DataTypes.INTEGER,
--   hp: DataTypes.INTEGER,
--   maxHp: DataTypes.INTEGER,
--   physical: DataTypes.INTEGER,
--   magic: DataTypes.INTEGER,
--   speed: DataTypes.INTEGER,
--   defense: DataTypes.INTEGER,
--   alive: DataTypes.BOOLEAN,
--   songUrl: DataTypes.STRING,
--   imageSRC: DataTypes.STRING,
-- });

INSERT INTO chars (name, charClass, tempo, songLength, beats, charXP, charLevel, hp, maxHp, physical, magic, speed, defense, alive, songUrl, imageSRC)
VALUES ("Jim", "mage", 180, 200, 600, 0, 1, 140, 140, 10, 52, 22, 20, 1, "https://www.google.com", 'https://images.google.com'),
       ("Steve", "fighter", 180, 200, 600, 0, 1, 170, 170, 35, 17, 22, 40, 1, "https://www.google.com", 'https://images.google.com')
