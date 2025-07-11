// dom
const countdownElement = document.getElementById('countdown');
const instructionsElement = document.getElementById('instructions');
const numbersList = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');
const inputGroup = document.getElementById('input-group');
const messageElement = document.getElementById('message');


const inputElements = document.querySelectorAll('#input-group input[type="number"]');
let count = 30;
countdownElement.innerText = count;
let timer = setInterval(function () {
  count--;
  countdownElement.innerText = count;
  if (count <= 0) {
    clearInterval(timer);
    countdownElement.innerText = 'Finito il tempo';

  } else if (count <= 20)
    for (let i = 0; i < inputElements.length; i++) {
      inputElements[i].value = null
    }
}, 1000);
document.getElementById('countdown').innerText = count;


const randomNumbers = []

for (let i = 0; i < inputElements.length; i++) {
  const randomNumber = Math.floor(Math.random() * 30) + 1;
  inputElements[i].value = randomNumber;
  randomNumbers.push(randomNumber)
}



button