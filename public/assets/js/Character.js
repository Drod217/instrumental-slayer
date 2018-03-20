// var slayer = require('./slayer.js');
console.log("You connected character")
var Character = function(name, charClass, tempo, duration){
  this.name = name;
  this.charClass = charClass;
  this.tempo = tempo;
  this.duration = duration;
  this.beats = (duration/60) * tempo;
  this.charXP = 0;
  this.alive = true;
  this.charLevel = 1;
  // this.songUrl = songUrl;
  // this.imageSrc = imageSrc;

}

Character.prototype.startingStats = function() {
// functions to determine HP, speed, magic, defense, etc.
  this.hp = 50 + (this.duration / 2);
  this.maxHp = 50 + (this.duration / 2);
  this.defense = 20 + (this.duration/20);
  this.speed = 30 - (this.duration/15);
  this.magic = this.beats / 50 + 20;
  this.physical = this.beats / 30;

}

Character.prototype.classStats = function() {
  if(this.charClass === "mage") {
    this.hp -= 5;
    this.maxHp -= 5;
    this.defense  += 10;
    this.speed += 20;
    this.magic += 40;
    this.physical -= 10;
  } else if (this.charClass === "fighter") {
    this.hp += 20;
    this.maxHp += 20;
    this.defense += 10;
    this.speed += 5;
    this.magic -= 20;
    this.physical += 15;
  } else if (this.class === "rogue" ) {
    this.hp -= 5;
    this.maxHp -= 5;
    this.defense += 10;
    this.speed += 30;
    this.magic -= 5;
    this.physical += 25;
  } else if (this.class === "cleric") {
    this.hp += 15;
    this.maxHp += 10;
    this.defense += 15;
    this.speed == 5;
    this.magic += 10;
    this.physical += 5;
  }

}

// functions to determine attack and dodge/armor affect on attack and magic attack

Character.prototype.physAttack = function(enemy){
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

Character.prototype.magicAttack = function(enemy){
  var attack = 0;
  var dodgeArr = [0 , .25, .5, 1];
  var attackVariance = [0,2,3,5,-1,-3];

  if(enemy.hp <= 0){
    return "They're already dead!"
  }

  if(this.hp <= 0){
    return "You can't fight when you're dead!"
  }

  if (enemy.defense > this.magic && enemy.speed > this.speed) {
    attack = this.magic/2 * dodgeArr[Math.floor(Math.random() * dodgeArr.length)];
  }
  else if(enemy.defense > this.magic) {
    attack = this.magic/2
  }
  else if(enemy.speed > this.speed) {
    attack = this.magic * dodgeArr[Math.floor(Math.random() * dodgeArr.length)];
  }
  else {
    attack = this.magic + attackVariance[Math.floor(Math.random() * attackVariance.length)];
  }

  console.log(enemy.name + "'s speed is " + enemy.speed + " and their defense is " + enemy.defense + ". Their max health is " + enemy.maxHp + " and right now their health is at " + enemy.hp);
  console.log(this.name + " attacks " + enemy.name + " for " + attack);

  enemy.hp -= attack

  enemy.deathCheck();

}

// test function to battle other characters. Right now it only uses physical attacks for simplicity, but implemented itll take user input as to whether they want to use a physical or magic attack or whatever else

Character.prototype.battle = function(enemy) {

  while(this.alive && enemy.alive) {
    this.physAttack(enemy);
    enemy.deathCheck();
    if(!enemy.alive){break}
    enemy.physAttack(this)
    this.deathCheck();
  }

}

// helper functions to check if a player has died as the result of an attack, or to refill their health

Character.prototype.deathCheck = function(){
  if (this.hp <= 0) {
    this.alive = false;
    console.log(this.name + " has died!");
  }

}

Character.prototype.revive = function(){
  this.hp = this.maxHp;
  this.alive = true;
}

// we will need to import class abilities from or to the SQL database it looks like, based on the schema.


// export the character object
//
// module.exports = Character;


// // tests for console -
// bob = new Character("bob", "mage", 240, 220, "https://www.google.com")
// steve = new Character("steve", "fighter", 200, 180, "https://www.yahoo.com")
//
// bob.startingStats()
// steve.startingStats()
// bob.classStats()
// steve.classStats()
// console.log(bob)
// console.log(steve)
