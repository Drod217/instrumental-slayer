var express = require("express");
var router = express.Router();
var db = require('../models/');

// Import the model (burger.js) to use its database functions.
// var Char = require("../models/");

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