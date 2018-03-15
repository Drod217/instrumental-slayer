module.exports = function(sequelize, DataTypes) {
  var Char = sequelize.define("Char", {
    name: DataTypes.STRING,
    charClass: DataTypes.STRING,
    tempo: DataTypes.INTEGER,
    songLength: DataTypes.INTEGER,
    beats: DataTypes.INTEGER,
    charXP: DataTypes.INTEGER,
    charLevel: DataTypes.INTEGER,
    hp: DataTypes.INTEGER,
    maxHp: DataTypes.INTEGER,
    physical: DataTypes.INTEGER,
    magic: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    alive: DataTypes.BOOLEAN,
    songUrl: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdAt',
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updatedAt',
      defaultValue: sequelize.literal('NOW()')
    },
  });

  return Char;
};
