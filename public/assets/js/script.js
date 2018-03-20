//
//
//
// var soundTag = ["./audio/09Mirrors.m4a",
// "./audio/01Grenade.m4a",
// "./audio/01JohnCougar,JohnDeere,John3_16.m4a",
// "./audio/01LookAtMeNow(feat.LilWayne&BustaRhymes).m4a",
// "./audio/01MyLife(feat.Eminem&AdamLevine).m4a",
// "./audio/01StartedfromtheBottom.m4a",
// "./audio/01WakeMeUp.m4a",
// "./audio/1-04IDon'tFuckWithYou(feat.E-40).mp3",
// "./audio/03Climax.m4a",
// "./audio/03Lucky(feat.ColbieCaillat).m4a",
// "./audio/04LilFreak(feat.NickiMinaj).m4a",
// "./audio/04RunThisTown(feat.Rihanna&KanyeWest).m4a",
// "./audio/04StillD.R.E.(feat.SnoopDogg).m4a",
// "./audio/04WhoSays.m4a",
// "./audio/05Superstar(feat.MatthewSantos).m4a",
// "./audio/07BeforeHeCheats.m4a",
// "./audio/07LikeaWreckingBall.m4a",
// "./audio/07NotAfraid.m4a",
// "./audio/08OrdinaryPeople.m4a",
// "./audio/27TearsInHeaven.m4a"
// ];
//
// var songs = {0: [153.7, 484.78], 1: [110.39, 221.74], 2: [169.96, 221.25],
//    3: [146.013, 223.59], 4: [176.00, 238.94], 5: [85.03, 172.90],
//    6: [123.67,249.30], 7: [195.02, 283.93], 8: [135.974, 232.54],
//    9: [129.788, 189.34], 10: [139.97, 233.88], 11: [173.240, 267.03],
//    12: [187.01, 270.16], 13: [180.47, 175.15], 14: [190.23, 290.04],
//    15: [147.58, 199.63], 16: [133.69, 198.63], 17: [171.91, 247.70],
//    18: [98.75, 281.00], 19: [151.69, 272.68]};

var songArr = [
  {
    name: "Mirrors",
    id: 0,
    url: "./audio/09Mirrors.m4a",
    tempo: 153.7,
    duration: 484.78
  },
  {
    name: "Grenade",
    id: 1,
    url: "./audio/01Grenade.m4a",
    tempo: 110.39,
    duration: 221.74
  },
  {
    name: "John Cougar, John Deere, John",
    id: 2,
    url: "./audio/01JohnCougar,JohnDeere,John3_16.m4a",
    tempo: 169.96,
    duration: 221.25
  },
  {
    name: "Look at Me Now",
    id: 3,
    url: "./audio/01LookAtMeNow(feat.LilWayne&BustaRhymes).m4a",
    tempo: 146.013,
    duration: 223.59
  },
  {
    name: "My Life",
    id: 4,
    url: "./audio/01MyLife(feat.Eminem&AdamLevine).m4a",
    tempo: 176,
    duration: 238.94
  },
  {
    name: "Started From The Bottom",
    id: 5,
    url: "./audio/01StartedfromtheBottom.m4a",
    tempo: 85.03,
    duration: 172.90
  },
  {
    name: "Wake Me Up",
    id: 6,
    url: "./audio/01WakeMeUp.m4a",
    tempo: 123.67,
    duration: 249.3
  },
  {
    name: "I Don't Give A Fuck",
    id: 7,
    url: "./audio/1-04IDon'tFuckWithYou(feat.E-40).mp3",
    tempo: 195.02,
    duration: 283.93
  },
  {
    name: "Climax",
    id: 8,
    url: "./audio/03Climax.m4a",
    tempo: 135.974,
    duration: 232.54
  },
  {
    name: "Lucky",
    id: 9,
    url: "./audio/03Lucky(feat.ColbieCaillat).m4a",
    tempo: 129.788,
    duration: 189.34
  },
  {
    name: "Lil Freak",
    id: 10,
    url: "./audio/04LilFreak(feat.NickiMinaj).m4a",
    tempo: 139.97,
    duration: 233.88
  },
  {
    name: "Run This Town",
    id: 11,
    url: "./audio/04RunThisTown(feat.Rihanna&KanyeWest).m4a",
    tempo: 173.24,
    duration: 267.03
  },
  {
    name: "Still D.R.E.",
    id: 12,
    url: "./audio/04StillD.R.E.(feat.SnoopDogg).m4a",
    tempo: 187.01,
    duration: 270.16
  },
  {
    name: "Who Says",
    id: 13,
    url: "./audio/04WhoSays.m4a",
    tempo: 180.47,
    duration: 175.15
  },
  {
    name: "Superstar",
    id: 14,
    url: "./audio/05Superstar(feat.MatthewSantos).m4a",
    tempo: 190.23,
    duration: 290.04
  },
  {
    name: "Before He Cheats",
    id: 15,
    url: "./audio/07BeforeHeCheats.m4a",
    tempo: 147.58,
    duration: 199.63
  },
  {
    name: "Like A Wrecking Ball",
    id: 16,
    url: "./audio/07LikeaWreckingBall.m4a",
    tempo: 133.69,
    duration: 198.63
  },
  {
    name: "Not Afraid",
    id: 17,
    url: "./audio/07NotAfraid.m4a",
    tempo: 171.91,
    duration: 247.70
  },
  {
    name: "Ordinary People",
    id: 18,
    url: "./audio/08OrdinaryPeople.m4a",
    tempo: 98.75,
    duration: 281.00
  },
  {
    name: "Tears In Heaven",
    id: 19,
    url: "./audio/27TearsInHeaven.m4a",
    tempo: 151.69,
    duration: 272.68
  }
]

var newChar = {};
var newCharacterData = {};

var characterPicked = false;
var songPicked = false;

var userId = 0;
var enemyId = 1;

$(document).ready(function(){
    $(".eq").hide();
    $(".songlist li").click(function(){
      var ID = $(this).attr('id');
      // alert("Song selection: " + songArr[ID]["name"] + ", Tempo & Duration =" + songArr[ID]["tempo"] + " & " + songArr[ID]["duration"]);
      var newText = songArr[ID]["name"];
      $(".current-song").text(newText);
      songPicked = true;

      // update the char object we're going to send
      newChar.tempo = songArr[ID]["tempo"];
      newChar.duration = songArr[ID]["duration"];
      newChar.songName = songArr[ID]["name"];
      newChar.songUrl = songArr[ID]["url"];


      // $(".songlist").hide();
      // $(".eq").show();
      // $(".songtitle").hide();
      // $("#button").hide();
    });
    // update current character selection with current click
    $(".char-article").click(function(){
      var newText = $(this).children("p:first").text()
      $(".current-char").text(newText);
      newChar.name = newText;
      characterPicked = true;
      newChar.id = $(this).attr("char-value");
      newChar.charClass = $(this).attr("char-class");
      // alert(newText)
    });

    // submit button to take you to char stats
    $(".roll-stats").click(function(){
      if(songPicked && characterPicked){

        var userId = newChar.id;
        newCharacterData.name = newChar.name;
        // var newCharacterData = {
        //   name = newChar.name;
        // };
        // alert(JSON.stringify(newCharacterData));
        // alert(newCharacterData.name);

        $.ajax({
          method: "PUT",
          url: "/stats/" + userId,
          data: newChar
        }).then(function(data) {
          // alert(JSON.stringify(newChar));
          location.href = "/stats/" + userId;
          load();
        })


      } else {
        alert("Please pick a character and song!");

      }
    });
  //

  //
  //       $.ajax({
  //         type: "PUT",
  //         data: newUserData
  //         url: "/stats/" + newChar.id,
  //       }).then(function(data) {
  //         location.href = "/stats/" + newChar.id;
  //         load();
  //       });
  //   //
  // });


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
