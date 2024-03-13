const inputTime = document.getElementById('inputTime');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const countdown = document.getElementById('countdown');

let intervalId;

function startTimer() {
  clearInterval(intervalId);

  const startTime = parseInt(inputTime.value, 10);
  let timeLeft = startTime;

  intervalId = setInterval(() => {
    timeLeft--;
    displayCountdown(timeLeft);

    if (timeLeft === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  displayCountdown(0);
}

function displayCountdown(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const hoursString = hours.toString().padStart(2, '0');
  const minutesString = minutes.toString().padStart(2, '0');
  const secondsString = seconds.toString().padStart(2, '0');

  countdown.innerHTML = `${hoursString}:${minutesString}:${secondsString}`;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
