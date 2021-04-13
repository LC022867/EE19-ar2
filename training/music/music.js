const mySong = document.getElementById("No_Game_No_Life");
const icon = document.getElementById("icon");

icon.onclick = function () {
    if (mySong.paused) {
        mySong.play();
        icon.src = "./pictures/pause.png";
    } else {
        mySong.pause();
        icon.src = "./pictures/play.png";
    }
}