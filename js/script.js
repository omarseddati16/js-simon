// dom
const countdownElement = document.getElementById('countdown');
const instructionsElement = document.getElementById('instructions');
const numbersList = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');
const inputGroup = document.getElementById('input-group');
const messageElement = document.getElementById('message');


const inputElements = document.querySelectorAll('input[type="number"]');
let count = 22;
countdownElement.innerText = count;
let timer = setInterval(function () {
  count--;
  countdownElement.innerText = count;
  if (count <= 0) {
    clearInterval(timer);
    countdownElement.innerText = 'Finito il tempo';

  } else if (count === 20)

    for (let i = 0; i < inputElements.length; i++) {
      inputElements[i].value = ''
      numbersList.classList.add('d-none')
      answersForm.classList.remove('d-none');
    }
}, 1000);
document.getElementById('countdown').innerText = count;

const randomNumbers = []
for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 30) + 1;
  randomNumbers.push(randomNumber)
}
document.getElementById('numbers-list').innerText = randomNumbers.join(' ');

answersForm.addEventListener('click', function (e) {
  e.preventDefault();
  let correctAnswers = 0;
  const userAnswers = [];
  for (let i = 0; i < inputElements.length; i++) {
    const userAnswer = parseInt(inputElements[i].value);
    userAnswers.push(userAnswer);
    if (randomNumbers.includes(userAnswer)) {
      correctAnswers++;
      inputElements[i].classList.add('giusto');
      inputElements[i].classList.remove('sbagliato');
    } else {
      inputElements[i].classList.add('sbagliato');
      inputElements[i].classList.remove('giusto');
    }
  }
});