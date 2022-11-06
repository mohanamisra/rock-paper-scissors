let canvas = document.getElementsByClassName("container")[0];
let backgroundMusic = document.getElementById("audio");
canvas.addEventListener("click", playMusic);
function playMusic(){
    backgroundMusic.play();
    canvas.removeEventListener("click", playMusic);
}
backgroundMusic.addEventListener("ended", function() {
    this.currentTime = 0;
    this.play();
}, false);