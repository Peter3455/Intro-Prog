document.getElementById("leftarm").style.backgroundColor = "rgba(255,12,32,.5)";
document.getElementById("rightarm").style.backgroundColor = "rgba(255,12,32,.5)";
document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop = "10px black solid";
document.getElementById("mouth").style.borderRadius = "20px";
document.getElementById("body").style.border = "2px black solid";

var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");
var rightArm = document.getElementById("rightarm")

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
rightArm.addEventListener("click", moveDownUp);


function moveUpDown(e) {
  var robotPart = e.target;
  var top = 0;

  var id = setInterval(frame, 10) // draw every 10ms

  function frame() {
    robotPart.style.top = top + '%';    
    top++;
    if (top === 20){
      clearInterval(id);
    }
  }
  
}

function moveDownUp(e) {
    var robotPart = e.target;
    var top = 0;
  
    var id = setInterval(frame, 10) // draw every 10ms
  
    function frame() {
      robotPart.style.top = top + '%';    
      top++;
      if (top === 36){
        clearInterval(id);
      }
    }
    
  }


function moveRightLeft(e) {
  var robotPart = e.target;
  var left = 0;
  var id = setInterval(frame, 10) // draw every 10ms
  function frame() {
    robotPart.style.left = left + '%';
    left++;
    if (left === 71){
      clearInterval(id);
    }
  }
}
