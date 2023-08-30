let count = 0;
let intervalId;

const counterDisplay = document.getElementById('counterDisplay');

document.getElementById('startButton').addEventListener('click', function () {
    // Ensure only one interval is running at a time
    if (!intervalId) {
        intervalId = setInterval(function () {
            count++;
            counterDisplay.textContent = count;
        }, 50); // update every 1 second
    }
});

document.getElementById('stopButton').addEventListener('click', function () {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null; // clear the ID to ensure the interval can be restarted
    }
});


document.getElementById('resetButton').addEventListener('click', function () {
    counterDisplay.innerText = 0
    clearInterval(intervalId)
});
