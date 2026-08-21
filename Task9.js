// Task 9

function startCountdown(seconds) {
  let remaining = seconds;

  const interval = setInterval(() => {
    remaining--;
    console.log(`${remaining} second(s) remaining`);

    if (remaining === 0) {
      clearInterval(interval);

      // A separate setTimeout displays the notification
      // after the countdown has reached zero.
      setTimeout(() => {
        console.log("Time's up!");
      }, 0);
    }
  }, 1000);
}

startCountdown(5);

// Expected sample console output:
// 4 second(s) remaining
// 3 second(s) remaining
// 2 second(s) remaining
// 1 second(s) remaining
// 0 second(s) remaining
// Time's up!