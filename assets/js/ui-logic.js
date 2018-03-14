
         var health = 0;
         var attack = 0;
         var defense = 0;
         
         var turn = 0;
         var energy = 0;
         
         var isWin = 0;
         var isLoss = 0;
         
        //  var player1 = {};
        //  var player2 = {};

         var p1Selected = null;
         var p2Selected = null;

         var p2pawnsAlive = 4;

         var redMana = 12;
         
        //  mainAttack = player1.damage;
        //  boost = (player1.damage * 2);
        //  boosted = (player1.damage * 40);
         
         var yoda = {
             name: "Grandmaster Yoda",
             class: "Jedi Consular",
             health: 1000,
             defense: 30,
             damage: 200
         };

         var vader = {
            name: "Darth Vader",
            class: "Sith Warrior",
            health: 1000,
            defense: 50,
            damage: 80
        };

        var opress = {
            name: "Savage Opress",
            class: "Sith Inquisitor",
            health: 1000,
            defense: 150,
            damage: 200
        };

        // console.log(player1.health, player1.defense, player1.damage);
        // console.log(player2.health, player2.defense, player2.damage);
        // var mainAttack = (player1.damage - player2.defense);
        // boost = (player1.damage * 2);
        // boosted = (player1.damage * 40);
        // console.log(mainAttack);

$(document).ready(function() {

    var characterArray = [yoda, vader, opress];
    
    for (var i = 0; i < characterArray.length; i++) {
        $("#name0").html(characterArray[i].name);
        document.getElementById("name0").innerHTML = "Name: " + characterArray[0].name;
        document.getElementById("class0").innerHTML = "Class: " + characterArray[0].class;
        document.getElementById("health0").innerHTML = characterArray[0].health;
        document.getElementById("damage0").innerHTML = characterArray[0].damage;
        document.getElementById("defense0").innerHTML = characterArray[0].defense;
        
    }

    for (var i = 0; i < characterArray.length; i++) {
        $("#name1").html(characterArray[i].name);
        document.getElementById("name1").innerHTML = "Name: " + characterArray[1].name;
        document.getElementById("class1").innerHTML = "Class: " + characterArray[1].class;
        document.getElementById("health1").innerHTML = characterArray[1].health;
        document.getElementById("damage1").innerHTML = characterArray[1].damage;
        document.getElementById("defense1").innerHTML = characterArray[1].defense;
        
    }
    
    $("#ability0").click(function() {
        var mainAttack = (characterArray[0].damage - characterArray[1].defense);
        characterArray[1].health = (characterArray[1].health - mainAttack);
        
        $('#p2_health').prop('value', characterArray[1].health);
        if (characterArray[1].health <= 0)
        {
            console.log("Darth Vader is dead.");
        }
        else
        {
            console.log("You have stabbed Darth Vader for " + mainAttack + " damage!");
            console.log("Darth Vader's health is " + characterArray[1].health);
        }
        // $("#ability1").click(function() {
        //     var boosted = Math.floor(player1.attack * 2);
        //     player1.damage = player1.damage + boosted;
        // }),

        // function checkAbilities() {
        //     if (player1.redMana < 3) { 
        //        // disabled
        //        $("#ability0").attr('disabled', true);
        //     }
        //     else {
        //         $("#ability0").attr('disabled', false)
        //     }
        // }
        
    })
    
}) 