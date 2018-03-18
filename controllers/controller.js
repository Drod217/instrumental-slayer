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



// using routes for battle
// a get route to display the battle screen with a userId and enemyId pulling from the database based on index
router.get("/battle/:userId&:enemyId", function(req, res) {
  //console.log(db.Char);
  db.Char.findAll({}).then(function(data) {
    console.log("data" + JSON.stringify(data));
    var userChar = req.params.userId;
    var enemyChar = req.params.enemyId;
// from this we're using the first id in the URL to pick the user's fighter, and the second id to pick the enemy
    console.log("User Char from Params is: " + JSON.stringify(data[userChar]));
    console.log("Enemy Char from Params is: " + JSON.stringify(data[enemyChar]));

    // // use the Character constructor to make the user object
    //
    // var userObj = data[userChar];
    //
    // var user = new Character(userObj.name, userObj.charClass, userObj.tempo, userObj.songLength, userObj.songUrl, userObj.imageSrc);
    // user.startingStats();
    // user.classStats();
    // console.log("This is the user char with all stats populated: " + JSON.stringify(user));

    var charObject = {
      Char: data,
      user: data[userChar],
      enemy: data[enemyChar]

    };

    // var scripts = [{ script: './assets/js/battle.js'}]
    return res.render("battle", charObject);
  });
});

// Put route to update characters with attack damage

router.put("/battle/:userId&:enemyId&:attackName", function(req, res) {
  db.Char.findAll({}).then(function(data) {
    console.log("data" + JSON.stringify(data));
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

// we want to grab the HP at the start of the turn so that if you block, we know what the health was initially
    var originalUserHp = user.hp
    var afterAttackUserHp = 0;


    // this method is defined in the char sequelize model. Methods are also defined in the Character constructor presently, but that is redundant
    // user.sayName();
    // this runs specific attacks based on the attackName param
    if(user.alive && enemy.alive){
      if(attackName === "att1"){
        user.physAttack(enemy);
      } else if (attackName === "att2"){
        user.specAttack(enemy)
      } else if (attackName === "heal") {
        user.heal()
      } else if (attackName === "block") {
        user.block()
      }
    }

    if(attackName === "revive"){
      user.revive();
      enemy.revive();
    }

    // If the enemy still has health left, they hit you back or heal themselves or something

    if(enemy.alive && enemy.hp !== enemy.maxHp && attackName !== "revive"){
      enemyAttackSelect = Math.floor(Math.random() *2);
      console.log("health isn't full " + enemyAttackSelect);

      if(enemyAttackSelect === 0){
        enemy.physAttack(user);

      } else if (enemyAttackSelect === 1){
        enemy.specAttack(user);
      } else if (enemyAttackSelect === 2){
        enemy.heal();
      }
    } else if (enemy.alive && attackName !== "revive"){
      enemyAttackSelect = Math.floor(Math.random());

      if(enemyAttackSelect === 0){
        enemy.physAttack(user);
      } else {
        enemy.specAttack(user);
      }
    }
    else if (!enemy.alive && attackName !== "revive") {
      console.log("They (as in " + enemy.name +") are dead, jim")
    };



    // this is a variable to collect the enemy and user's new stats. This can be updated soon to include mana as well
    var newEnemyData = {
      hp: enemy.hp,
      alive: enemy.alive
    }

    var newUserData = {
      hp: user.hp,
      alive: user.alive
    }


    // a function that hopefully will update the database

    db.Char.update(newEnemyData, {where: {name: enemy.name} })
      .then(updatedEnemy => {
        console.log(updatedEnemy)
      });

    db.Char.update(newUserData, {where: {name: user.name} })
      .then(updatedUser => {
        console.log(updatedUser)
      });


    var charObject = {
        Char: data,
        user: user,
        enemy: enemy

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



//  Nonsense I am not using presently but might soon


    // var user = new Character(userObj.name, userObj.charClass, userObj.tempo, userObj.songLength, userObj.songUrl, userObj.imageSrc);
    // // these methods are defined in the Character constructor. This is presently redundant, but I am sort of in the "whatever actually works" mode of development
    // user.startingStats();
    // user.classStats();
    // console.log("This is the user char with all stats populated: " + JSON.stringify(user));
    //
    // // use the Character constructor to make the enemy object
    //
    // var enemyObj = data[enemyChar];
    //
    // var enemy = new Character(enemyObj.name, enemyObj.charClass, enemyObj.tempo, enemyObj.songLength, enemyObj.songUrl, enemyObj.imageSrc);
    // enemy.startingStats();
    // enemy.classStats();
    // console.log("This is the enemy char with all stats populated: " + JSON.stringify(enemy));
