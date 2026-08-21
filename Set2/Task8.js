// Task 8
function checkTimeLeftCallback(seconds, callback) {
  setTimeout(() => {
    if (seconds < 0) {
      callback("Seconds cannot be negative.", null);
      return;
    }

    callback(null, seconds);
  }, 1000);
}

checkTimeLeftCallback(5, (error, remainingTime) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log(`Time remaining: ${remainingTime} seconds`);
  }
});

// Expected sample console output:
// Time remaining: 5 seconds
