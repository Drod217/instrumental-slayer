//A function to return a random number between a min and a max value
function randomNumber(min, max) {
    number =  Math.floor((Math.random()*(max-min))+ min);
    return number;
  }
  
  //Initialise starting values
  var purple, blue, cyan, green, yellow, orange, red;
  purple = 160;
  blue = 140;
  cyan = 100;
  green = 140;
  yellow = 180;
  orange = 70;
  red = 200;
  
  //To start with the equalizer is paused
  var playing=false;
  
  // A Function to change the height of a column more or less randomly
  function changeHeight(column, height) {
    height-=randomNumber(-15,15);
    if (height>400) height=400;
    if (height<5) height=5;
    column.style.height=height + "px";  
    return height;
  }
  
  
  //A Function that will be run every 50ms to animate the equalizer
  function animate() {
    if (playing) {
      purple = changeHeight(document.getElementById("purple"),purple);     blue = changeHeight(document.getElementById("blue"),blue); 
      cyan = changeHeight(document.getElementById("cyan"),cyan); 
      green = changeHeight(document.getElementById("green"),green); 
      yellow = changeHeight(document.getElementById("yellow"),yellow); 
      orange = changeHeight(document.getElementById("orange"),orange); 
      red = changeHeight(document.getElementById("red"),red); 
      
      //Repeat this function every 50 ms
      setTimeout(animate, 50);
    }
  }
  
  
  //A Function to play or pause the animation
  function play() {
    if (playing) {
      playing=false;
      document.getElementById("button").value="Play";    
    } else {
      playing=true;
      document.getElementById("button").value="Pause";
      animate();
    }
  }

  $(document).ready(function(){
    play();
  });