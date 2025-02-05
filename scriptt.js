let startStopButton = document.getElementById('startStop');
let display = document.getElementById('display');
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapTimes = [];

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = "Start";
    } else {
        timer = setInterval(updateTime, 1000);
        startStopButton.textContent = "Stop";
    }
    isRunning = !isRunning;
}

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    display.textContent = formatTime(hours, minutes, seconds);
}

function formatTime(hours, minutes, seconds) {
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(timeUnit) {
    return timeUnit < 10 ? `0${timeUnit}` : timeUnit;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    display.textContent = "00:00:00";
    startStopButton.textContent = "Start";
    lapTimes = [];
    document.getElementById('lapList').innerHTML = '';
}
