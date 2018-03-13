var AudioContext = require("web-audio-api").AudioContext;
var MusicTempo = require("music-tempo");
var fs = require("fs");
var tempo = 0;
var duration = 0;
// const audio = require("/assets/audio");

<<<<<<< HEAD

var data = fs.readFileSync("../audio/01 Wake Me Up.m4a");
=======
// Spotify Widget Player
// <iframe src="https://open.spotify.com/embed/user/1233302581/playlist/0CxcHM5HGzoAIyrbG8jeZM" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">

>>>>>>> c5350ecb6bb39c3731425f1310ecd46d7358c177
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
  console.log(duration);
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

console.log(tempo);
console.log(duration);
// console.log(context);

