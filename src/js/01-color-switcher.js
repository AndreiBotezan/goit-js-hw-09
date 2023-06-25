const startButtonEl = document.querySelector('[data-start]');
const stopButtonEl = document.querySelector('[data-stop]');
let timerId;

stopButtonEl.disabled = true;

startButtonEl.addEventListener('click', handleOnStartClick);

stopButtonEl.addEventListener('click', handlerOnStopClick);

function handleOnStartClick() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
};

function handlerOnStopClick() {
  startButtonEl.disabled = false;
  clearInterval(timerId);
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
