var AudioContext = require("web-audio-api").AudioContext;
var MusicTempo = require("music-tempo");
var fs = require("fs");
var tempo = 0;
var duration = 0;
// const audio = require("/assets/audio");

  function test() {
  tempo = mt.tempo;
  duration = ((length/2)/22090);
  console.log(tempo);
  console.log(duration);
  };
  test();
  // console.log("Duration in seconds: "+ (length/2)/22090);
//   console.log(mt.beats);
  // console.log(mt.spectralFlux);
  // console.log(mt.peaks);
//   console.log(mt.events);
}
// var data = fs.readFileSync("../audio/01 Wake Me Up.m4a");
// var data = fs.readFileSync("../audio/seinfeld.mp3");

context.decodeAudioData(data, calcTempo2);





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