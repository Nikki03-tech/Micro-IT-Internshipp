let stopwatchRunning = false;
let stopwatchTime = 0; // time in seconds
let stopwatchInterval;
const stopwatchDisplay = document.getElementById('stopwatch-display');
const startStopBtn = document.getElementById('start-stop-btn');
const resetBtn = document.getElementById('reset-btn');

// Update current time
function updateCurrentTime() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
}

// Start/Stop stopwatch
function toggleStopwatch() {
    if (stopwatchRunning) {
        clearInterval(stopwatchInterval);
        startStopBtn.textContent = 'Start';
    } else {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
        startStopBtn.textContent = 'Stop';
    }
    stopwatchRunning = !stopwatchRunning;
}

// Update stopwatch display
function updateStopwatch() {
    stopwatchTime++;
    const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
    const seconds = String(stopwatchTime % 60).padStart(2, '0');
    stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Reset stopwatch
function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    stopwatchDisplay.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    stopwatchRunning = false;
}

startStopBtn.addEventListener('click', toggleStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

// Update clock every second
setInterval(updateCurrentTime, 1000);
updateCurrentTime();  // Initial clock update
