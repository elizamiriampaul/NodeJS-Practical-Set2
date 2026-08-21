// Task 10
function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (seconds < 0) {
        reject("Seconds cannot be negative.");
        return;
      }

      resolve(seconds);
    }, 1000);
  });
}

checkTimeLeftPromise(5)
  .then((remainingTime) => {
    console.log(`Time remaining: ${remainingTime} seconds`);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Expected sample console output:
// Time remaining: 5 seconds
