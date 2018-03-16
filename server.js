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

var soundTag = ["../audio/09 Mirrors.m4a",
"./audio/01 Grenade.m4a",
"./audio/01 John Cougar, John Deere, John 3_16.m4a",
"./audio/01 Look At Me Now (feat. Lil Wayne & Busta Rhymes).m4a",
"./audio/01 My Life (feat. Eminem & Adam Levine).m4a",
"./audio/01 Started from the Bottom.m4a",
"./audio/01 Wake Me Up.m4a",
"./audio/1-04 I Don't Fuck With You (feat. E-40).mp3",
"./audio/03 Climax.m4a",
"./audio/03 Lucky (feat. Colbie Caillat).m4a",
"./audio/04 Lil Freak (feat. Nicki Minaj).m4a",
"./audio/04 Run This Town (feat. Rihanna & Kanye West).m4a",
"./audio/04 Still D.R.E. (feat. Snoop Dogg).m4a",
"./audio/04 Who Says.m4a",
"./audio/05 Superstar (feat. Matthew Santos).m4a",
"./audio/07 Before He Cheats.m4a",
"./audio/07 Like a Wrecking Ball.m4a",
"./audio/07 Not Afraid.m4a",
"./audio/08 Ordinary People.m4a",
"./audio/27 Tears In Heaven.m4a"
];
// var soundTag = ["mirrors","grenade","johncougar","lookatmenow","life","bottom","wake","withyou",
// "climax","lucky","freak","run","dre","who","superstar","before","wrecking","afraid","ordinary","tears"];

random = Math.floor(Math.random() * soundTag.length);
song = soundTag[random];

var data = fs.readFileSync(song);
console.log(song);

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
}

// var data = fs.readFileSync("../audio/01 Wake Me Up.m4a");
// var data = fs.readFileSync("../audio/seinfeld.mp3");

var context = new AudioContext();
context.decodeAudioData(data, calcTempo);

// console.log(tempo);
// console.log(duration);
// console.log(context);


// module.exports = slayer;

random2 = Math.floor(Math.random() * soundTag.length);
song2 = soundTag[random2];
var data = fs.readFileSync(song2);
console.log(song2);

// Spotify Widget Player
// <iframe src="https://open.spotify.com/embed/user/1233302581/playlist/0CxcHM5HGzoAIyrbG8jeZM" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">

var calcTempo2 = function (buffer) {
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
  console.log("Tempo2: " + mt.tempo);
  console.log("Duration2: " + duration);
  // console.log("Duration in seconds: "+ (length/2)/22090);
//   console.log(mt.beats);
  // console.log(mt.spectralFlux);
  // console.log(mt.peaks);
//   console.log(mt.events);
}

// var data = fs.readFileSync("../audio/01 Wake Me Up.m4a");
// var data = fs.readFileSync("../audio/seinfeld.mp3");

var context = new AudioContext();
context.decodeAudioData(data, calcTempo2);


var routes = require("./controllers/controller.js");

app.use("/", routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });