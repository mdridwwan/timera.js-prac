const colorChanger = document.getElementById("color-changer");
let color = ["red", "blue", "yellow", "green"];
let counter = 0;

const changeColors = function () {
   colorChanger.style.background = color[counter];
   counter++;
}

let myTimer = setInterval(changeColors, 3000);

colorChanger.onclick = function (){
    clearInterval(myTimer);
    this.innerHTML = "Timer stop"
}