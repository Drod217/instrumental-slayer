'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
      return queryInterface.bulkInsert('Chars', [{
        name: 'Jim',
        charClass: 'mage',
        tempo: 180,
        songLength: 200,
        beats: 600,
        charXP: 0,
        charLevel: 1,
        hp: 140,
        maxHp: 140,
        physical: 10,
        magic: 52,
        speed: 22,
        defense: 20,
        alive: true,
        songUrl: "https://www.google.com",
        imageSRC: "https://images.google.com",
        message: ""
      },
    {
      name: 'Steve',
      charClass: 'fighter',
      tempo: 180,
      songLength: 200,
      beats: 600,
      charXP: 0,
      charLevel: 1,
      hp: 170,
      maxHp: 170,
      physical: 35,
      magic: 17,
      speed: 22,
      defense: 40,
      alive: true,
      songUrl: "https://www.google.com",
      imageSRC: "https://images.google.com",
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



// INSERT INTO chars (name, charClass, tempo, songLength, beats, charXP, charLevel, hp, maxHp, physical, magic, speed, defense, alive, songUrl, createdAt, updatedAt)
// VALUES ("Jim", "mage", 180, 200, 600, 0, 1, 140, 140, 10, 52, 22, 20, 1, "https://www.google.com",'2018-03-13 10:16:56.796 +00:00','2018-03-14 10:18:56.796 +00:00'),
//        ("Steve", "fighter", 180, 200, 600, 0, 1, 170, 170, 35, 17, 22, 40, 1, "https://www.google.com",'2018-03-13 12:16:56.796 +00:00','2018-03-14 12:18:56.796 +00:00')
