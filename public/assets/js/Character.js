var slayer = require('./slayer.js');

var Character = function(input){
  this.name = name;
  this.charClass = charClass;
  this.tempo = tempo;
  this.songLength = songLength;
  this.beats = (songLength/60) * tempo;
  this.charXP = 0;
  this.charLevel = 1;
  this.songUrl = songUrl;

}

function startingStats(char) {
// functions to determine HP, speed, magic, defense, etc.
  char.hp = 50 + (char.songLength / 2);
  char.maxHp = 50 + (char.songLength / 2);
  char.defense = 20 + (char.songLength/20);
  char.speed = 30 - (char.songLength/15);
  char.magic = char.beats / 50 + 20;
  char.physical = char.beats / 30;

  return char
}

function classStats(char) {
  if(char.class === "mage") {
    char.hp -= 10;
    char.defense  -= 10;
    char.speed += 5;
    char.magic += 20;
    char.physical -= 10;
  } else if (char.class === "fighter") {
    char.hp += 20;
    char.defense += 10;
    char.speed += 5;
    char.magic -= 15;
    char.physical += 15;
  } else if (char.class === "rogue" ) {
    char.hp -= 5;
    char.speed += 15;
    char.magic -= 5;
  } else if (char.class === "cleric") {
    char.hp += 15;
    char.defense += 5;
    char.magic += 12;
  }

  return char
}

// we will need to import class abilities from or to the SQL database it looks like, based on the schema.


// export the character object

module.exports = Character;
