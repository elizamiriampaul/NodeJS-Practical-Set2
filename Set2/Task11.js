// Task 11
function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (seconds < 0) {
        reject("Invalid duration: seconds cannot be negative.");
        return;
      }

      resolve(seconds);
    }, 1000);
  });
}

async function runCountdownAsync(seconds) {
  try {
    const remainingTime = await checkTimeLeftPromise(seconds);
    console.log(`Time remaining: ${remainingTime} seconds`);
  } catch (error) {
    console.log("Caught error:", error);
  }
}

// Valid input
runCountdownAsync(5);

// Invalid input
runCountdownAsync(-3);

// Expected sample console output:
// Time remaining: 5 seconds
// Caught error: Invalid duration: seconds cannot be negative.
