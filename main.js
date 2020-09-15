var btn = document.getElementById("theBtn");
var formsLink = document.getElementById("timerForm");
var timer = document.getElementById("timer");
var formLayout = document.getElementById("formLayout");
timer.style.visibility = "hidden";

btn.addEventListener("click", function(){
    formsLink.style.visibility = "hidden";
    btn.style.visibility = "hidden";
    formLayout.style.visibility = "hidden";
    timer.style.visibility = "visible";
    let timerHours = document.getElementById("hoursInput").value;
    let timerMinutes = document.getElementById("minutesInput").value;
    let timerSeconds = document.getElementById("secondsInput").value;

    var targetTime = new Date().getTime();

    targetTime = targetTime + (1000 * timerSeconds) + (1000 * 60 * timerMinutes) + (1000 * 60 * 60 * timerHours);
    var timerFunc = setInterval(countdownTimer, 1000);
    function countdownTimer(){
        let currentTime = new Date().getTime();
        timerCount = targetTime - currentTime;
        var hours = Math.floor((timerCount/(1000 * 60 * 60)))
        var minutes = Math.floor((timerCount % (1000 * 60 *60))/ (1000 * 60));
        var seconds = Math.floor((timerCount % (1000 * 60))/ 1000);
        if (hours < 10){
            hours = "0" + hours;
        } 
        if (minutes < 10){
            minutes = "0" + minutes;
        } 
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        let currentTimer = hours + ":" + minutes + ":" + seconds;
        document.getElementById("timer").innerHTML = currentTimer;
        
        if (timerCount <  0){
            clearInterval(timerFunc);
            document.getElementById("timer").innerHTML = "Timer Up!";
            formsLink.style.visibility = "visible";
            btn.style.visibility = "visible";
            formLayout.style.visibility = "visible";
        }
    }
    countdownTimer();
    
});

