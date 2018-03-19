'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
      return queryInterface.bulkInsert('Chars', [{
        name: 'Double Drop Marvin',
        charClass: 'fighter',
        tempo: 110,
        duration: 222,
        beats: 408,
        charXP: 0,
        charLevel: 1,
        hp: 181,
        maxHp: 181,
        physical: 29,
        magic: 52,
        speed: 20,
        defense: 41,
        alive: true,
        songUrl: "https://www.google.com",
        songName: "",
        imageSRC: "note_yellow",
        message: ""
      },
    {
      name: 'Straight Edge Steve',
      charClass: 'mage',
      tempo: 146,
      duration: 224,
      beats: 544,
      charXP: 0,
      charLevel: 1,
      hp: 152,
      maxHp: 152,
      physical: 8,
      magic: 51,
      speed: 20,
      defense: 21,
      alive: true,
      songUrl: "https://www.google.com",
      songName: "",
      imageSRC: "note_blue",
      message: ""
    },{
      name: 'Flashy Francine',
      charClass: 'rogue',
      tempo: 85,
      duration: 173,
      beats: 245,
      charXP: 0,
      charLevel: 1,
      hp: 136,
      maxHp: 136,
      physical: 8,
      magic: 52,
      speed: 19,
      defense: 29,
      alive: true,
      songUrl: "https://www.google.com",
      songName: "",
      imageSRC: "note_red",
      message: ""
    },{
      name: 'Peeky Paula',
      charClass: 'cleric',
      tempo: 140,
      duration: 234,
      beats: 546,
      charXP: 0,
      charLevel: 1,
      hp: 167,
      maxHp: 167,
      physical: 18,
      magic: 31,
      speed: 14,
      defense: 32,
      alive: true,
      songUrl: "https://www.google.com",
      songName: "",
      imageSRC: "note_green",
      message: ""
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
      return queryInterface.bulkDelete('Chars', null, {});

  }
};



// INSERT INTO chars (name, charClass, tempo, duration, beats, charXP, charLevel, hp, maxHp, physical, magic, speed, defense, alive, songUrl, createdAt, updatedAt)
// VALUES ("Jim", "mage", 180, 200, 600, 0, 1, 140, 140, 10, 52, 22, 20, 1, "https://www.google.com",'2018-03-13 10:16:56.796 +00:00','2018-03-14 10:18:56.796 +00:00'),
//        ("Steve", "fighter", 180, 200, 600, 0, 1, 170, 170, 35, 17, 22, 40, 1, "https://www.google.com",'2018-03-13 12:16:56.796 +00:00','2018-03-14 12:18:56.796 +00:00')
