
const body = document.querySelector('body');
const timer = document.querySelector('.timer');
const pauseBtn = document.querySelector('.pauseBtn');
const startBtn = document.querySelector('.startBtn');
const resetBtn = document.querySelector('.resetBtn');
const lapBtn = document.querySelector('.lapBtn');
const scrollDiv = document.querySelector('.scrollDiv');
const overflowDiv = document.querySelector('.overflowDiv');


let milsec = 0;
let sec = 0;
let min = 0;
let hr = 0;
let zeroMilsec = "0";
let zeroSec = "0";
let zeroMin = "0";
let zeroHr = "0";

let interval;

startBtn.onclick = () => {
  milsec ++;
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
  body.style.animation = "bgShift 30s linear infinite";
  
  pauseBtn.onclick = () => {
    clearInterval(interval);
    body.style.animationPlayState = "paused";
  };
};

function startTimer() {
  if(milsec >= 9) {
      zeroMilsec = "";
    }
  if(milsec >= 99) {
    sec ++;
    milsec = 0;
    zeroMilsec = "0";
  }
  
  if(sec > 9) {
    zeroSec = "";
  }
  if(sec > 59) {
    min ++;
    zeroSec = "0";
    sec = 0;
  }
  
  if(min > 9) {
    zeroMin = "";
  }
  if(min > 59) {
    hr ++;
    zeroMin = "0";
    min = 0;
  }
  
  if(hr > 9) {
    zeroHr = "";
  }
  
  
  milsec += 1;
  timer.innerHTML = `${zeroHr}${hr}:${zeroMin}${min}:${zeroSec}${sec}:${zeroMilsec}${milsec}`;

}

function resetTimer() {
  //Remove all lap items
  const lapItems = Array.from(document.querySelectorAll('.lapItem'));
  for(let item of lapItems) {
    item.remove();
  }
  
  body.style.animation = "none";
  setTimeout(() => {
    document.querySelector('.overflowDiv').appendChild(scrollDiv);
  }, 200);
  clearInterval(interval);
  milsec = 0;
  sec = 0;
  min = 0;
  hr = 0;
  zeroMilsec = "0";
  zeroSec = "0";
  zeroMin = "0";
  zeroHr = "0";
  timer.innerHTML = `00:00:00:00`;
}

function lapTimer() {
  const newLapItem = document.createElement('div');
  newLapItem.classList.add('lapItem');
  newLapItem.innerHTML = `<p>${zeroHr}${hr}:${zeroMin}${min}:${zeroSec}${sec}:${zeroMilsec}${milsec}</p>`;
  scrollDiv.appendChild(newLapItem);
  overflowDiv.scrollTop = overflowDiv.scrollHeight;
}







