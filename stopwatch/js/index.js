console.log("javascript is aan het laden");

// dit zijn variable voor het starten van buttond en stoppen en resseten

const startbutton = document.getElementById("js--start-button");
const stopbutton = document.getElementById("js--stop-button");
const resetbutton = document.getElementById("js--reset");
let seconds = 0;
let minutes = 0;
let running = false; // standaard telt ie nog niet.

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");


let timer;

startbutton.onclick = function(){ //als stopwatch al loopt dan mag je niks doen
    if(running === true){
        return;
    } 

    console.log("ik ben bijna aan het tellen");
    running = true;
    timer = setInterval(function() {
        seconds = seconds + 1;
        if(seconds === 60) {
            minutes = minutes + 1;
            minutesTimer.innerText = minutes;
            seconds = 0;
        }
        secondsTimer.innerText = seconds;
    }, 100); // dit is in milliseconden dit wanneer ie het moet doen
}
// dit is voor het stoppen, dus als je de stopbutton klikt dan stopt hij de tijd. 
stopbutton.onclick =function() {
    clearInterval(timer);
    running = false;
}

resetbutton.onclick = function() {
    seconds = 0;
    minuntes = 0;
    clearInterval(timer);
    running = false;
    secondsTimer.innerText = 0;
    minutesTimer.innerText = 0;
}


//  hier begint de slider

const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body");
console.log(body);
slider.value = 2;
rangeValue.innerText = slider.value + "x";


slider.oninput =function() {
    rangeValue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
}


// hier beginnen de gegevens ophalen.



const image = document.getElementById("js--img");
const paragraph = document.getElementById("js--text");


// data ophalen
let data = fetch("./js/data.json").then(
    function(binnenGekomenData){
        return binnenGekomenData.json();
    }).then(
        function(Dataophalen){
            paragraph.innerHTML = Dataophalen.text;
            image.src = "/img/1.webp";
        }
    );





















































