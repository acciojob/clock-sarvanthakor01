//your JS code here. If required.
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const now = new Date();

    // Format the date and time
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    // Update the timer element with the current date and time
    timerElement.textContent = now.toLocaleString('en-US', options);
}

// Update the timer immediately and then every second
updateTimer();
setInterval(updateTimer, 1000);