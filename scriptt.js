let timer;
let running = false;
let seconds = 0, minutes = 0, hours = 0;

function startStopwatch() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 1000);
        document.getElementById("runner").style.animation = "running 0.5s infinite alternate";
    }
}

function pauseStopwatch() {
    running = false;
    clearInterval(timer);
    document.getElementById("runner").style.animation = "idle 1s infinite alternate";
}

function resetStopwatch() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("laps").innerHTML = "";
    document.getElementById("runner").style.animation = "idle 1s infinite alternate";
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    document.getElementById("display").innerText = 
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}
function recordLap() {
    let lapTime = document.getElementById("display").innerText;
    let lapItem = document.createElement("li");
    lapItem.innerText = `🏅 Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(lapItem);
}