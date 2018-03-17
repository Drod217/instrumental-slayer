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

    // console.log(enemy.name + "'s speed is " + enemy.speed + " and their defense is " + enemy.defense + ". Their max health is " + enemy.maxHp + " and right now their health is at " + enemy.hp);
    // console.log(this.name + " attacks " + enemy.name + " for " + attack);

    enemy.hp -= attack
    console.log(this.name + " attacked " + enemy.name + " successfully for " + attack);

    enemy.deathCheck();

  }
  // a special attack, so we will take into account
  Char.prototype.specAttack = function(enemy){
    var attack = 0;
    var dodgeArr = [0 , .25, .5, 1];
    var attackVariance = [0,2,3,5,-1,-3];
    var specialCo = 0;

// Here we determine what the bonus damage is based on the class
    if (this.class === "fighter"){
      specialCo = this.physical*.3;
    } else if (this.class === "mage"){
      specialCo = this.magic *.5 + 5;
    } else if (this.class === "thief"){
      specialCo = this.speed * this.physical / 10;
    } else if (this.class === "cleric"){
      this.physical + this.magic*.1 + 5;
    }

    if(enemy.hp <= 0){
      return "They're already dead!"
    }

    if (enemy.defense > this.physical && enemy.speed > this.speed) {
      attack = specialCo + this.physical/2 * dodgeArr[Math.floor(Math.random() * dodgeArr.length)];
    }
    else if(enemy.defense > this.physical) {
      attack = specialCo + this.physical * .8;
    }
    else if(enemy.speed > this.speed) {
      attack = specialCo + this.physical * dodgeArr[Math.floor(Math.random() * dodgeArr.length)];
    }
    else {
      attack = this.physical + attackVariance[Math.floor(Math.random() * attackVariance.length)];
    }

    // console.log(enemy.name + "'s speed is " + enemy.speed + " and their defense is " + enemy.defense + ". Their max health is " + enemy.maxHp + " and right now their health is at " + enemy.hp);
    // console.log(this.name + " attacks " + enemy.name + " for " + attack);

    enemy.hp -= attack
    console.log(this.name + " attacked " + enemy.name + " successfully for " + attack);

    enemy.deathCheck();


  }

  // basic healing - a boost to this if you're a cleric

  Char.prototype.heal = function(){
    var missingHealth = this.maxHp - this.hp;
    var healRandom = [-6, 0, 2, 4, -4];

    if(this.alive && this.hp < this.maxHp){
      var healBonus = 0;
      if(this.class === "cleric"){
        healBonus = this.magic/4
      }

      var healAmmount = Math.round(this.magic/3 + this.physical/3 + healBonus + healRandom[Math.floor(Math.random() * healRandom.length)]);
      console.log(this.name + " heals for " + healAmmount)

      // if the healAmmount would put you over max health, we cap it
      if(healAmmount > missingHealth){
        this.hp = this.maxHp;
      } else {
        this.hp += healAmmount
      }
  };

}

  // block - a bonus if you're a fighter

  Char.prototype.block = function(enemy){
    var blockAmmount = 0;
    var blockBonus = 0;
    if(this.class === "fighter") {
      blockBonus += 5;
    }

  // random attack - this is for the enemy to use on you - this isn't working right now

  Char.prototype.randomAttack = function(enemy){
    var attackArr = [0,1,2];
    var attackSelection = attackArr[Math.random(Math.floor() * attackArr.length)];

    if(attackSelection === 0){
      this.physAttack(enemy)
    } else if (attackSelection === 1) {
      this.specAttack(enemy)
    } else if (attackSelection === 2) {
      this.heal();
    }

  }



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
