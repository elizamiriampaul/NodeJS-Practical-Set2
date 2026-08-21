// Task 2
// V8 runs the JavaScript code, while libuv handles the event loop
// and asynchronous operations such as timers. Because of this,
// Node.js does not wait for the timer before running the next statement.

console.log("Starting the timer...");

setTimeout(() => {
  console.log("Timer finished!");
}, 2000);

console.log("This message appears before the timer finishes.");

// Expected sample console output:
// Starting the timer...
// This message appears before the timer finishes.
// Timer finished!
