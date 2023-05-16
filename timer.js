var seconds = 6; 
var song = 'audio.mp3' ;
var audio = document.getElementById('song');
audio.src = song

function reproducir() {
    audio.play();
}

function secondPassed() { 
  var minutes = Math.round((seconds - 30)/60); 
  var remainingSeconds = seconds % 60; 
  if (remainingSeconds < 10) { 
    remainingSeconds = "0" + remainingSeconds; 
  } 
  document.getElementById('countdown').innerHTML = minutes + ":" +     remainingSeconds; 
  if (seconds == 0) { 
    clearInterval(countdownTimer); 
    // alert('SE ACABAO');
    document.getElementById('countdown').innerHTML = "Rest"; 
    reproducir()
  } else { 
    seconds--; 
  } 
} 

var countdownTimer = setInterval('secondPassed()', 1000);

