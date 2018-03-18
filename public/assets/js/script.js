


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



alert("linked");

$(document).ready(function(){
    $(".eq").hide();
    $(".songlist li").click(function(){
      var ID = $(this).attr('id');
      alert(soundTag[ID]);
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
