document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});
//End of Modal

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

let currentScore = 0;
let currentPoints = 0;
const button_500 = document.getElementById("btn500");
const button_400 = document.getElementById("btn400");
const button_300 = document.getElementById("btn300");
const button_200 = document.getElementById("btn200");
const button_100 = document.getElementById("btn100");
const questionDiv = document.querySelector("#question");
const submitButton = document.querySelector("#submit");
const answerInputBox = document.querySelector("#userAnswer");
const scoreSpan = document.querySelector("#score");


const updateBoard = () => {
  questionDiv.innerHTML = currentQuestion;
  scoreSpan.innerHTML = currentScore;
};

// Function to check if answer is correct
const checkAnswer = () => {
  console.log("You guessed:", answerInputBox.value);
  console.log("Correct answer:", currentAnswer);
  if (answerInputBox.value === currentAnswer) {
    currentScore += currentPoints;
  } else {
    currentScore -= currentPoints;
  }

  answerInputBox.value = "";
  updateBoard();
};
// Use the function when an answer is submitted
submitButton.addEventListener("click", checkAnswer);

//500 point questions
const get500Question = async () => {
  const response_500 = await fetch("https://jeopardy.wang-lu.com/api/clues?value=500");
  const data = await response_500.json();
  const i = getRandomInt(data.length);
  console.log(data[i]);
  currentQuestion = data[i].question;
  currentPoints = data[i].value;
  currentAnswer = data[i].answer;
  
  // Display that info on screen!
  updateBoard();
};
button_500.addEventListener("click", get500Question);

//400 point questions
const get400Question = async () => {
  const response_400 = await fetch("https://jeopardy.wang-lu.com/api/clues?value=400");
  const data = await response_400.json();
  const i = getRandomInt(data.length);
  console.log(data[i]);
  currentQuestion = data[i].question;
  currentPoints = data[i].value;
  currentAnswer = data[i].answer;
  
  // Display that info on screen!
  updateBoard();
};
button_400.addEventListener("click", get400Question);


//300 point questions
const get300Question = async () => {
  const response_300 = await fetch("https://jeopardy.wang-lu.com/api/clues?value=300");
  const data = await response_300.json();
  const i = getRandomInt(data.length);
  console.log(data[i]);
  currentQuestion = data[i].question;
  currentPoints = data[i].value;
  currentAnswer = data[i].answer;
  
  // Display that info on screen!
  updateBoard();
};
button_300.addEventListener("click", get300Question);

//200 point questions
const get200Question = async () => {
  const response_200 = await fetch("https://jeopardy.wang-lu.com/api/clues?value=200");
  const data = await response_200.json();
  const i = getRandomInt(data.length);
  console.log(data[i]);
  currentQuestion = data[i].question;
  currentPoints = data[i].value;
  currentAnswer = data[i].answer;
  
  // Display that info on screen!
  updateBoard();
};
button_200.addEventListener("click", get200Question);


//100 point questions
const get100Question = async () => {
  const response_100 = await fetch("https://jeopardy.wang-lu.com/api/clues?value=100");
  const data = await response_100.json();
  const i = getRandomInt(data.length);
  console.log(data[i]);
  currentQuestion = data[i].question;
  currentPoints = data[i].value;
  currentAnswer = data[i].answer;
  
  // Display that info on screen!
  updateBoard();
};
button_100.addEventListener("click", get100Question);
