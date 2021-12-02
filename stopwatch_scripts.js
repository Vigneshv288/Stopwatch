window.onload = function () {
    
let minutes = 0;
let seconds = 0;
let tens = 0;
let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds");
let appendTens = document.getElementById("tens");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let resetButton = document.getElementById("resetButton");
let Interval;

startButton.onclick = function () {
    Interval = setInterval(() => {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log(seconds)
            seconds++;
            appendSeconds.innerHTML = seconds;
            tens = 0;
        }

        if (seconds <= 9) {
            appendSeconds.innerHTML = "0" + seconds;
        }

        if (seconds > 60) {
            console.log(minutes)
            minutes++;
            appendMinutes.innerHTML = minutes;
            tens = 0;
            seconds = 0;
        }

        if (minutes <= 9) {
            appendMinutes.innerHTML = "0" + minutes;
        }
    }, 10);
}

stopButton.onclick = function () {
    clearInterval(Interval);
}

resetButton.onclick = function () {
    clearInterval(Interval);
    minutes = 0;
    seconds = 0;
    tens = 0;
    appendMinutes.innerHTML = "0" + minutes;
    appendSeconds.innerHTML = "0" + seconds;
    appendTens.innerHTML = "0" + tens;
}
}