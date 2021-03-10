const squirtle = [
    
]
console.log("Its all vanilla My friend...");
console.log("");
let button = document.getElementById("play");
let audio = document.getElementById("music");

button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    button.innerHTML = "⏸️";
    button.style.backgroundColor = "orangered"
  } else {
    audio.pause();
    button.innerHTML = "🎵";
    button.style.backgroundColor = "white"
  }
});