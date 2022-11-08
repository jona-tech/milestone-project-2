/**Basic code structure inspired by Web Dev Simplified on Youtube (https://www.youtube.com/watch?v=riDzcEQbX6k)  with a few personal changes */

/** Variables */

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startQuiz);


function incrementScore() {

}

function startQuiz() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {

}

function showQuestion() {

}

function resetState() {

}

function selectAnswer() {

}

function setStatusClass() {

}

function clearStatusClass() {

}