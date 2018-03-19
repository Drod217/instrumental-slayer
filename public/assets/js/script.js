


var soundTag = ["./audio/09Mirrors.m4a",
"./audio/01Grenade.m4a",
"./audio/01JohnCougar,JohnDeere,John3_16.m4a",
"./audio/01LookAtMeNow(feat.LilWayne&BustaRhymes).m4a",
"./audio/01MyLife(feat.Eminem&AdamLevine).m4a",
"./audio/01StartedfromtheBottom.m4a",
"./audio/01WakeMeUp.m4a",
"./audio/1-04IDon'tFuckWithYou(feat.E-40).mp3",
"./audio/03Climax.m4a",
"./audio/03Lucky(feat.ColbieCaillat).m4a",
"./audio/04LilFreak(feat.NickiMinaj).m4a",
"./audio/04RunThisTown(feat.Rihanna&KanyeWest).m4a",
"./audio/04StillD.R.E.(feat.SnoopDogg).m4a",
"./audio/04WhoSays.m4a",
"./audio/05Superstar(feat.MatthewSantos).m4a",
"./audio/07BeforeHeCheats.m4a",
"./audio/07LikeaWreckingBall.m4a",
"./audio/07NotAfraid.m4a",
"./audio/08OrdinaryPeople.m4a",
"./audio/27TearsInHeaven.m4a"
];

var songs = {0: [153.7, 484.78], 1: [110.39, 221.74], 2: [169.96, 221.25],
   3: [146.013, 223.59], 4: [176.00, 238.94], 5: [85.03, 172.90], 
   6: [123.67,249.30], 7: [195.02, 283.93], 8: [135.974, 232.54], 
   9: [129.788, 189.34], 10: [139.97, 233.88], 11: [173.240, 267.03],
   12: [187.01, 270.16], 13: [180.47, 175.15], 14: [190.23, 290.04],
   15: [147.58, 199.63], 16: [133.69, 198.63], 17: [171.91, 247.70],
   18: [98.75, 281.00], 19: [151.69, 272.68]};

alert("linked");
$(document).ready(function(){
    $(".eq").hide();
    $(".songlist li").click(function(){
      var ID = $(this).attr('id');
      alert(soundTag[ID]);
      alert("Tempo & Duration =" + songs[ID]);
      $(".songlist").hide();
      $(".eq").show();
      $(".songtitle").hide();
      $("#button").hide();
  // ability buttons
  $(".ability-button").on("click", function(event) {
    var userId = user.id -1;
    var enemyId = enemy.id -1;
    var attackName = $(this).name;
    alert("clicked the ability button");
  });
    });
    });
   
// $.ajax({
//   type: "GET",
//   url: "./assets/js/slayer.js",
// }).done(function(){
//   alert(duration);
// });    

// $.getScript("./assets/js/slayer.js", function() {
//   alert("Attached");
// });