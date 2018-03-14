module.exports = function(sequelize, DataTypes) {
  var Char = sequelize.define("Char", {
    name: DataTypes.STRING,
    charClass: DataTypes.STRING,
    tempo: DataTypes.INTEGER,
    songLength: DataTypes.INTEGER,
    beats: DataTypes.INTEGER,
    charXP: DataTypes.INTEGER,
    charLevel: DataTypes.INTEGER,
    songUrl: DataTypes.STRING,
  });
  return Char;
};