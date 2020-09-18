var btn = document.getElementById("theBtn");
var formsLink = document.getElementById("timerForm");
var timer = document.getElementById("timer");
var formLayout = document.getElementById("formLayout");
timer.style.visibility = "hidden";

var timeCount;
var targetTime;
var timerFunc;



function countdownTimer() {

    let currentTime = new Date().getTime();
    timerCount = targetTime - currentTime;

    let hours = Math.floor((timerCount / (1000 * 60 * 60)));
    let minutes = Math.floor((timerCount % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.round((timerCount % (1000 * 60)) / 1000);

    if (seconds === 60){
        minutes += 1;
        seconds = "0";
    } else if (seconds === 60 && minutes === 60){
        seconds = 0;
        minutes = 0;
        hours += 1;
    }
    
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let currentTimer = hours + ":" + minutes + ":" + seconds;
    timer.innerHTML = currentTimer;

    if (timerCount < 0) {
        clearInterval(timerFunc);
        timer.innerHTML = "Timer Up!";
        formsLink.style.visibility = "visible";
        btn.style.visibility = "visible";
        formLayout.style.visibility = "visible";
    }
}

function clickFunction() {

    
    formsLink.style.visibility = "hidden";
    btn.style.visibility = "hidden";
    formLayout.style.visibility = "hidden";
    timer.style.visibility = "visible";
    
    let timerHours = document.getElementById("hoursInput").value;
    let timerMinutes = document.getElementById("minutesInput").value;
    let timerSeconds = document.getElementById("secondsInput").value;


    targetTime = new Date().getTime();
    targetTime = targetTime + (1000 * timerSeconds) + (1000 * 60 * timerMinutes) + (1000 * 60 * 60 * timerHours);


    countdownTimer();
    timerFunc = setInterval(countdownTimer, 1000);

}

btn.addEventListener("click", clickFunction);