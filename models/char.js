'use strict';

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
    imageSRC: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdAt',
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updatedAt',
      defaultValue: sequelize.literal('NOW()')
    }
  });

  // methods for the character models
  Char.prototype.sayName = function () {
    console.log("I can say names from the char sequelize model! I am " + this.name);
  }
  // a basic physical attack
  Char.prototype.physAttack = function(enemy){
    var attack = 0;
    var dodgeArr = [0 , .25, .5, 1];
    var attackVariance = [0,2,3,5,-1,-3];

    if(enemy.hp <= 0){
      return "They're already dead!"
    }

    if (enemy.defense > this.physical && enemy.speed > this.speed) {
      attack = this.physical/2 * dodgeArr[Math.floor(Math.random() * dodgeArr.length)];
    }
    else if(enemy.defense > this.physical) {
      attack = this.physical/2
    }
    else if(enemy.speed > this.speed) {
      attack = this.physical * dodgeArr[Math.floor(Math.random() * dodgeArr.length)];
    }
    else {
      attack = this.physical + attackVariance[Math.floor(Math.random() * attackVariance.length)];
    }

    console.log(enemy.name + "'s speed is " + enemy.speed + " and their defense is " + enemy.defense + ". Their max health is " + enemy.maxHp + " and right now their health is at " + enemy.hp);
    console.log(this.name + " attacks " + enemy.name + " for " + attack);

    enemy.hp -= attack

    enemy.deathCheck();

  }
  // check if dead
  Char.prototype.deathCheck = function(){
    if (this.hp <= 0) {
      this.alive = false;
      console.log(this.name + " has died!");
    }

  }
  // restore full health
  Char.prototype.revive = function(){
    this.hp = this.maxHp;
    this.alive = true;
  }

  return Char;
};
