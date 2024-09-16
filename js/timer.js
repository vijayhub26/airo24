const targetDate = new Date("2024-10-05T00:00:00").getTime();

const countdownElement = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  // Calculate days, hours, minutes, and seconds remaining
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  countdownElement.textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;

  // If the countdown is finished, display a message
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    countdownElement.textContent = "TIME'S UP!";
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
