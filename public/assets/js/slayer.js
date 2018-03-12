var AudioContext = require("web-audio-api").AudioContext;
var MusicTempo = require("music-tempo");
var fs = require("fs");
// const audio = require("/assets/audio");
 
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
 
  console.log("Tempo: " + mt.tempo);
  console.log("Duration in seconds: "+ (length/2)/22090);
//   console.log(mt.beats);
//   console.log(mt.spectralFlux);
//   console.log(mt.peaks);
//   console.log(mt.events);
}
 
// var data = fs.readFileSync("../audio/seinfeld.mp3");
var data = fs.readFileSync("../audio/01 Wake Me Up.m4a");
 
var context = new AudioContext();
context.decodeAudioData(data, calcTempo);


// console.log(context);

