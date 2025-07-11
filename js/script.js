// dom
const countdownElement = document.getElementById('countdown');
const instructionsElement = document.getElementById('instructions');
const numbersList = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');
const inputGroup = document.getElementById('input-group');
const messageElement = document.getElementById('message');

const numeriCasuali = Math.floor(Math.random() * 30) + 1;

let count = 30;
countdownElement.innerText = count;
let timer = setInterval(function () {
  count--;
  countdownElement.innerText = count;
  if (count <= 0) {
    clearInterval(timer);
    countdownElement.innerText = 'Finito il tempo';
  }
}, 1000);
document.getElementById('countdown').innerText = totalSecond;





