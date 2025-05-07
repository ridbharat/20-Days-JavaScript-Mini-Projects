// Project: Countdown Timer
function startCountdown(seconds) {
    let remaining = seconds;
    
    const interval = setInterval(() => {
        console.log(`Time remaining: ${remaining}s`);
        remaining--;
        
        if (remaining < 0) {
            clearInterval(interval);
            console.log("Countdown finished!");
        }
    }, 1000);
}

startCountdown(10);