// Task 3
// Timer methods used: setInterval() and clearInterval().
// Node.js Timers documentation: https://nodejs.org/api/timers.html

let seconds = 5;

const timer = setInterval(() => {
  console.log(seconds + " second(s) remaining");

  if (seconds === 0) {
    clearInterval(timer);
    console.log("Countdown complete!");
  }

  seconds--;
}, 1000);

// Expected sample console output:
// 5 second(s) remaining
// 4 second(s) remaining
// 3 second(s) remaining
// 2 second(s) remaining
// 1 second(s) remaining
// 0 second(s) remaining
// Countdown complete!
