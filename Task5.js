// Task 5
// Example: node Task5.js 10

const duration = Number(process.argv[2]);

if (!Number.isInteger(duration) || duration <= 0) {
  console.log("Please enter a valid positive number.");
  console.log("Example: node Task5.js 10");
  process.exit();
}

let seconds = duration;

console.log(`Countdown started for ${seconds} seconds.`);
console.log('Type "cancel" and press Enter to stop it.');

process.stdin.setEncoding("utf8");

const timer = setInterval(() => {
  seconds--;
  console.log(`${seconds} second(s) remaining`);

  if (seconds === 0) {
    clearInterval(timer);
    console.log("Time's up!");
    process.stdin.pause();
  }
}, 1000);

process.stdin.on("data", (input) => {
  if (input.trim().toLowerCase() === "cancel") {
    clearInterval(timer);
    console.log("Countdown cancelled.");
    process.stdin.pause();
  }
});

// Expected sample console output:
// Countdown started for 10 seconds.
// Type "cancel" and press Enter to stop it.
// 9 second(s) remaining
// 8 second(s) remaining
// cancel
// Countdown cancelled.
