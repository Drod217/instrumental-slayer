var express = require("express");
var router = express.Router();
var db = require('../models/');
// var slayer = require('/Users/David/BC/instrumental-slayer/public/assets/js/slayer.js');
var Character = require('../public/assets/js/Character.js');

// Import the model (burger.js) to use its database functions.
// var Char = require("../models/");

// router.params to universalize the userid and enemyid paramaters in urls

// router.param('userId', function(req, res, next, ))

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  //console.log(db.Char);
  db.Char.findAll({}).then(function(data) {
    //console.log("data" + JSON.stringify(data));
    var charObject = {
      Char: data
    };
    return res.render("index", charObject);
  });
});

// a get route to display a character stats screen

router.get("/stats/:userId", function(req, res) {
  db.Char.findAll({}).then(function(data) {
    var userChar = req.params.userId;
    // console.log(JSON.stringify(data[userChar]));
    var userImage = "../assets/img/" + data[userChar]["imageSRC"] + ".png";
    var random = Math.floor(Math.random() * data.length);


    var charObject = {
      Char: data,
      user: data[userChar],
      userImage: userImage,
      random: random
    };

    return res.render("character", charObject);

  })
});

//  a put route to update one of our four char stats {
router.put("/stats/:userId", function(req,res){
  db.Char.findAll({}).then(function(data) {
    var userChar = req.params.userId;
    console.log(JSON.stringify(data[userChar]));

    var random = Math.floor(Math.random() * data.length);

    var user = data[userChar];
    var userImage = "../assets/img/" + data[userChar]["imageSRC"] + ".png";
    // create the update object

    user.tempo = Math.round(req.body.tempo);
    user.duration = Math.round(req.body.duration);

    user.songUrl = req.body.songUrl;
    user.songName = req.body.songName;

    user.getBeats();
    user.startingStats();
    user.classStats();


    // var newUserData = {
    //   id: req.body.id,
    //   name: req.body.name,
    //   charClass: req.body.charClass,
    //   tempo: req.body.tempo,
    //   duration: req.body.duration,
    //   songUrl: req.body.songUrl,
    //   songName: req.body.songName
    // }
    //
    // newUserData.beats = newUserData.duration/60 * newUserData.tempo;

    var newUserData = {
      tempo: user.tempo,
      duration: user.duration,
      beats: user.beats,
      hp: user.hp,
      maxHp: user.maxHp,
      physical: user.physical,
      magic: user.magic,
      speed: user.speed,
      defense: user.defense,
      alive: user.alive,
      songUrl: user.songUrl,
      songName: user.songName,
      imageSRC: user.imageSRC,
      message: user.message
    };



    // console.log("The User var: " + JSON.stringify(user));
    // console.log("The new user data! " + JSON.stringify(newUserData));

    // update here
    db.Char.update(newUserData, {where: {name: user.name} })
      .then(updatedUser => {
        // console.log(updatedUser)
      });


    var charObject = {
      Char: data,
      user: data[userChar],
      length: data.length,
      message: user.message,
      random: random,
      userImage: userImage

    };
    return res.render("character", charObject);
})
});



// using routes for battle
// a get route to display the battle screen with a userId and enemyId pulling from the database based on index
router.get("/battle/:userId&:enemyId", function(req, res) {
  //console.log(db.Char);
  db.Char.findAll({}).then(function(data) {
    // console.log("data" + JSON.stringify(data));
    var userChar = req.params.userId;
    var enemyChar = req.params.enemyId;
// from this we're using the first id in the URL to pick the user's fighter, and the second id to pick the enemy
    // console.log("User Char from Params is: " + JSON.stringify(data[userChar]));
    // console.log("Enemy Char from Params is: " + JSON.stringify(data[enemyChar]));
    var message = "Your character " +  data[userChar]["name"] + " is battling with " + data[enemyChar]["name"] + "!";
    var userImage = "../assets/img/" + data[userChar]["imageSRC"] + ".png";
    var enemyImage = "../assets/img/" + data[enemyChar]["imageSRC"] + ".png";

    // // use the Character constructor to make the user object
    //
    // var userObj = data[userChar];
    //
    // var user = new Character(userObj.name, userObj.charClass, userObj.tempo, userObj.songLength, userObj.songUrl, userObj.imageSrc);
    // user.startingStats();
    // user.classStats();
    // console.log("This is the user char with all stats populated: " + JSON.stringify(user));

    // This is a variable to serve a random character ID for battle purposes on the battle page
    var random = Math.floor(Math.random() * data.length);



    var charObject = {
      Char: data,
      user: data[userChar],
      enemy: data[enemyChar],
      length: data.length,
      message: message,
      random: random,
      userImage: userImage,
      enemyImage: enemyImage

    };

    // var scripts = [{ script: './assets/js/battle.js'}]
    return res.render("battle", charObject);
  });
});

// Put route to update characters with attack damage

router.put("/battle/:userId&:enemyId&:attackName", function(req, res) {
  db.Char.findAll({}).then(function(data) {
    // console.log("data" + JSON.stringify(data));
    var userChar = req.params.userId;
    var enemyChar = req.params.enemyId;
    var attackName = req.params.attackName;
// from this we're using the first id in the URL to pick the user's fighter, and the second id to pick the enemy
    // console.log("User Char from Params is: " + JSON.stringify(data[userChar]));
    // console.log("Enemy Char from Params is: " + JSON.stringify(data[enemyChar]));

// now we want to make the two character objects so they can "fight"
// use the Character constructor to make the user object

    var user = data[userChar];
    var enemy = data[enemyChar];
    var userImage = "../assets/img/" + data[userChar]["imageSRC"] + ".png";
    var enemyImage = "../assets/img/" + data[enemyChar]["imageSRC"] + ".png";

// we want to grab the HP at the start of the turn so that if you block, we know what the health was initially
    var originalUserHp = user.hp
    var afterAttackUserHp = 0;

    var originalEnemyHp = enemy.hp;
    var afterAttackEnemyHp = 0;

    var message = '';


    // this method is defined in the char sequelize model. Methods are also defined in the Character constructor presently, but that is redundant
    // user.sayName();
    // this runs specific attacks based on the attackName param
    if(user.alive && enemy.alive){
      if(attackName === "att1"){
        user.physAttack(enemy);
        var attack = originalEnemyHp - enemy.hp;
        message += user.name + " has used their basic attack against " + enemy.name + " for " + attack + " damage! ";
      } else if (attackName === "att2"){
        user.specAttack(enemy);
        var attack = originalEnemyHp - enemy.hp;
        message += user.name + " has used their special attack against " + enemy.name + " for " + attack + " damage! ";
      } else if (attackName === "heal") {
        user.heal();
        var healAmt = user.hp - originalUserHp;
        message += user.name + " has healed for " + healAmt + "! ";
      } else if (attackName === "block") {
        user.block()
      }
    }

    if(attackName === "revive"){
      user.revive();
      message = "You've started a new fight against " + enemy.name + "!";
      enemy.revive();
    }

    // If the enemy still has health left, they hit you back or heal themselves or something

    if(enemy.alive && enemy.hp !== enemy.maxHp && attackName !== "revive"){
      enemyAttackSelect = Math.floor(Math.random() *2);
      console.log("health isn't full " + enemyAttackSelect);

      if(enemyAttackSelect === 0){
        enemy.physAttack(user);
        var attack = originalUserHp - user.hp;
        message += enemy.name + " has used their basic attack against " + user.name + " for " + attack + " damage! ";
      } else if (enemyAttackSelect === 1){
        enemy.specAttack(user);
        var attack = originalUserHp - user.hp;
        message += enemy.name + " has used their special attack against " + user.name + " for " + attack + " damage! ";
      } else if (enemyAttackSelect === 2){
        enemy.heal();
        var healAmt = enemy.hp - originalEnemyHp;
        message += enemy.name + " has healed for " + healAmt + "!";
      }
    } else if (enemy.alive && attackName !== "revive"){
      enemyAttackSelect = Math.floor(Math.random());

      if(enemyAttackSelect === 0){
        enemy.physAttack(user);
        var attack = originalUserHp - user.hp;
        message += enemy.name + " has used their basic attack against " + user.name + " for " + attack + " damage!";
      } else {
        enemy.specAttack(user);
        var attack = originalUserHp - user.hp;
        message += enemy.name + " has used their special attack against " + user.name + " for " + attack + " damage!";
      }
    }
    else if (!enemy.alive && attackName !== "revive") {
      console.log("They (as in " + enemy.name +") are dead, jim")
    };

    // death messages
   if(!user.alive && !enemy.alive) {
     message = "Somehow you're both dead! Wow!"
   } else if(!user.alive){
      message = " You've died! Play again?"
    } else if (!enemy.alive) {
      message = " You've vanquished " + enemy.name + "! New enemy?";
    }


    // this is a variable to collect the enemy and user's new stats. This can be updated soon to include mana as well
    var newEnemyData = {
      hp: enemy.hp,
      alive: enemy.alive
    }

    var newUserData = {
      hp: user.hp,
      alive: user.alive,
      message: message
    }


    // a function that hopefully will update the database

    db.Char.update(newEnemyData, {where: {name: enemy.name} })
      .then(updatedEnemy => {
        // console.log(updatedEnemy)
      });

    db.Char.update(newUserData, {where: {name: user.name} })
      .then(updatedUser => {
        // console.log(updatedUser)
      });


    var charObject = {
        Char: data,
        user: user,
        enemy: enemy,
        message: message,
        length: data.length,
        userImage: userImage,
        enemyImage: enemyImage

      };
// presently just to end the request with the new enemy and user data
    return res.render("battle", charObject);

})
});

router.post("/", function(req, res) {
  console.log("____________________________");
  console.log(req.body);
   console.log("____________________________");

  db.Char.create(
    [
    "name", "charClass", "tempo", "songLength", "beats", "charXP", "charLevel", "hp", "macxhp","physical", "magic", "speed", "defense", "alive", "songUrl", "imageSRC"
    ],
    [
    req.body.name,
    req.body.charClass,
    req.body.tempo,
    req.body.songLength,
    req.body.beats,
    req.body.charXP,
    req.body.charLevel,
    req.body.hp,
    req.body.maxhp,
    req.body.physical,
    req.body.magic,
    req.body.speed,
    req.body.defense,
    req.body.alive,
    req.body.songUrl,
    req.body.imageSRC,
  ],
  function() {
    res.redirect("/");
  });
});

// router.delete("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   Char.delete(condition, function() {
//     res.redirect("/");
//   });
// });

// Export routes for server.js to use.
module.exports = router;
