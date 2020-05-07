
let countdown = 0;
let seconds = 1500; // 25mins in seconds
let workTime = 25;
let breakTime = 5;
let isBreak = true;
let isPaused = true;


const status = document.querySelector("#status");
const timerDisplay = document.querySelector("timerDisplay");
const startBtn = document.querySelector("#start-btn");
const resetBtn = document.querySelector("#reset");
const workMin = document.querySelector("#work-min");
const breakMin = document.querySelector("#break-min");



/* Event listeners for start and reset button */

startBtn.addEventListener('click', () => {
    clearInterval(countdown);
    isPaused = !isPaused;
    if (!isPaused) {
        countdown = setInterval(timer, 1000);
    }
})

resetBtn.addEventListener('click',() => {
    clearInterval(countdown);
    seconds = workTime * 60;
    countdown = 0;
    isPaused = true;
    isBreak = true;
})

/* Timer */

function timer() {
    seconds --;
    if(seconds < 0) {
        clearInterval(countdown);
        seconds = (isBreak ? bre)
    }
}