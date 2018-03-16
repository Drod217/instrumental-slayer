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
    console.log("User Char from Params is: " + JSON.stringify(data[userChar]));
    console.log("Enemy Char from Params is: " + JSON.stringify(data[enemyChar]));

// now we want to make the two character objects so they can "fight"
// use the Character constructor to make the user object

    var user = data[userChar];
    var enemy = data[enemyChar];

    // this method is defined in the char sequelize model. Methods are also defined in the Character constructor presently, but that is redundant
    user.sayName();
    // this runs specific attacks based on the attackName param
    if(attackName === "phys1"){
      user.physAttack(enemy);
      console.log(user.name + " attacked " + enemy.name + " successfully!")
    };
    // this is a variable to collect the enemy's new stats. This can be updated soon to include mana as well
    var newEnemyData = {
      hp: enemy.hp
    }


    // a function that hopefully will update the database

    db.Char.update(newEnemyData, {where: {name: enemy.name} })
      .then(updatedEnemy => {
        console.log(updatedEnemy)
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
  db.Char.create([
    "name", "charClass", "tempo", "songLength", "beats", "charXP", "charLevel", "songUrl"
  ], [
    req.body.name,
    req.body.charClass,
    req.body.tempo,
    req.body.songLength,
    req.body.beats,
    req.body.charXP,
    req.body.charLevel,
    req.body.songLength
  ], function() {
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
