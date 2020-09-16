//declare all element ids as variables to call later.
var btn = document.getElementById("theBtn");
var formsLink = document.getElementById("timerForm");
var timer = document.getElementById("timer");
var formLayout = document.getElementById("formLayout");

//set timer to hidden to start.
timer.style.visibility = "hidden";


//if button is clicked call the function below
btn.addEventListener("click", function(){

    //hide forms, the button and the layout. While making the timer visible.
    formsLink.style.visibility = "hidden";
    btn.style.visibility = "hidden";
    formLayout.style.visibility = "hidden";
    timer.style.visibility = "visible";

    //let the target time be equal to the hours, minutes, and seconds in the input form respectively.
    let timerHours = document.getElementById("hoursInput").value;
    let timerMinutes = document.getElementById("minutesInput").value;
    let timerSeconds = document.getElementById("secondsInput").value;

    //get a new target time Date
    var targetTime = new Date().getTime();

    //add the seconds, minutes, and hours (-1 to the seconds to fix the error)
    targetTime = targetTime + (1000 * timerSeconds - 1) + (1000 * 60 * timerMinutes) + (1000 * 60 * 60 * timerHours);

    
    //setInterval function to call the countdownTimer function every second.
    var timerFunc = setInterval(countdownTimer, 1000);

    //Start of countdown timer function
    function countdownTimer(){

        //get currentTime and do math on targetTime - currentTime into the timerCount variable. To get the timer's time.
        let currentTime = new Date().getTime();
        timerCount = targetTime - currentTime;

        //change timerCount from miliseconds to hours, minutes, and seconds. 
        let hours = Math.floor((timerCount/(1000 * 60 * 60)))
        let minutes = Math.floor((timerCount % (1000 * 60 *60))/ (1000 * 60));
        let seconds = Math.floor((timerCount % (1000 * 60))/ 1000);

        // if hours, minutes and seconds is less then 10 it will add an extra "0" in front of it.
        if (hours < 10){
            hours = "0" + hours;
        } 
        if (minutes < 10){
            minutes = "0" + minutes;
        } 
        if (seconds < 10){
            seconds = "0" + seconds;
        }

        //format timer correctly.
        let currentTimer = hours + ":" + minutes + ":" + seconds;
        document.getElementById("timer").innerHTML = currentTimer;
        

        //When the timer ends stop the interval, put "Timer Up!" in the box, make all the other hidden elements visible.
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

