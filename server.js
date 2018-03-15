var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var db = require('./models');

var app = express();

var PORT = process.env.PORT || 3000;

//Implements bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var AudioContext = require("web-audio-api").AudioContext;
var MusicTempo = require("music-tempo");
var fs = require("fs");
var tempo = 0;
var duration = 0;
// const audio = require("/assets/audio");

var data = fs.readFileSync("../instrumental-slayer/public/assets/audio/01 Wake Me Up.m4a");

// Spotify Widget Player
// <iframe src="https://open.spotify.com/embed/user/1233302581/playlist/0CxcHM5HGzoAIyrbG8jeZM" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">


var calcTempo = function (buffer) {
  var audioData = [];
  // Take the average of the two channels
  if (buffer.numberOfChannels == 2) {
    var channel1Data = buffer.getChannelData(0);
    var channel2Data = buffer.getChannelData(1);
    var length = channel1Data.length;
    for (var i = 0; i < length; i++) {
      audioData[i] = (channel1Data[i] + channel2Data[i]) / 2;
    }
  } else {
    audioData = buffer.getChannelData(0);
  }
  var p = { expiryTime: 30, maxBeatInterval: 1.5 };
  var mt = new MusicTempo(audioData, p);


  tempo = mt.tempo;
  duration = ((length/2)/22090);
  console.log("Tempo: " + mt.tempo);
  console.log("Duration: " + duration);
  // console.log("Duration in seconds: "+ (length/2)/22090);
//   console.log(mt.beats);
  // console.log(mt.spectralFlux);
  // console.log(mt.peaks);
//   console.log(mt.events);
test(tempo, duration);
}

// var data = fs.readFileSync("../audio/01 Wake Me Up.m4a");
// var data = fs.readFileSync("../audio/seinfeld.mp3");

var context = new AudioContext();
context.decodeAudioData(data, calcTempo);
function test(x,y) {
  HP = y * 2
  return HP
}
test(100,300);
console.log(HP);
console.log(duration);

var routes = require("./controllers/controller.js");

app.use("/", routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });