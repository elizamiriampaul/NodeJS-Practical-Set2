// Task 4
// The same calculation can first be tested in the Node REPL.

const targetTime = new Date(Date.now() + 10000);
const currentTime = new Date();

const secondsLeft = Math.ceil((targetTime - currentTime) / 1000);

console.log("Seconds remaining:", secondsLeft);

// Expected sample console output:
// Seconds remaining: 10
