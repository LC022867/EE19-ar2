
const mySong = document.getElementById("No_Game_No_Life");
const icon = document.getElementById("icon");

icon.onclick = function () { //When someone clicks the icon
    if (mySong.paused) { //If the music is paused, then play 
        mySong.play();
        icon.src = "./pictures/pause.png"; //Change the icon to pause symbol
    } else {
        mySong.pause(); //If the music is playing, then pause
        icon.src = "./pictures/play.png"; //Change the icon to play symbol
    }
}