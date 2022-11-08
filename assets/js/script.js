// Basic code structure inspired by Web Dev Simplified on Youtube (https://www.youtube.com/watch?v=riDzcEQbX6k)  with a few personal changes 

//  Variables 

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function incrementScore() {
    let oldScore = parseInt(document.getElementById('count-correct').innerText)
    document.getElementById('count-correct').innerText = ++oldScore
}

function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer-correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {

}

function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    if (correct) {
        incrementScore()
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        questionContainerElement.classList.add('hide')
    }
        
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
    question: 'How many tones exist in the chromatic scale?',
    answers: [{
            text: '8',
            correct: false
        },
        {
            text: '9',
            correct: false
        },
        {
            text: '14',
            correct: false
        },
        {
            text: '12',
            correct: true
        }
    ]
},
{
    question: 'Who wrote the song "Blinded By The Light"?',
    answers: [{
            text: 'Bob Dylan',
            correct: false
        },
        {
            text: 'Bob Marley',
            correct: false
        },
        {
            text: 'Bruce Springsteen',
            correct: true
        },
        {
            text: 'Manfred Mann',
            correct: false
        }
    ]
},
{
    question: 'Where does the "Nyckelharpa" come from?',
    answers: [{
            text: 'Sweden',
            correct: true
        },
        {
            text: 'Norway',
            correct: false
        },
        {
            text: 'Denmark',
            correct: false
        },
        {
            text: 'Finland',
            correct: false
        }
    ]
},
{
    question: 'Where does the "Hardingfela" come from?',
    answers: [{
            text: 'Sweden',
            correct: false
        },
        {
            text: 'Norway',
            correct: true
        },
        {
            text: 'Denmark',
            correct: false
        },
        {
            text: 'Finland',
            correct: false
        }
    ]
},
{
    question: 'What is the average radio output frequency',
    answers: [{
            text: '432 Hz',
            correct: false
        },
        {
            text: '528 Hz',
            correct: false
        },
        {
            text: '420 Hz',
            correct: false
        },
        {
            text: '440 Hz',
            correct: true
        }
    ]
},
{
    question: 'What is a "Stradivarius"?',
    answers: [{
            text: 'Violin',
            correct: true
        },
        {
            text: 'Piano',
            correct: false
        },
        {
            text: 'Program',
            correct: false
        },
        {
            text: 'Guitar',
            correct: false
        }
    ]
},
{
    question: 'Who shot the sheriff?',
    answers: [{
            text: 'I shot the sheriff',
            correct: true
        },
        {
            text: 'You shot the sheriff',
            correct: false
        },
        {
            text: 'He shot the sheriff',
            correct: false
        },
        {
            text: 'He shot himself',
            correct: false
        }
    ]
},
{
    question: 'What is the standard tuning of a guitar?',
    answers: [{
            text: 'DADGAD',
            correct: false
        },
        {
            text: 'CDEFGA',
            correct: false
        },
        {
            text: 'EADGBE',
            correct: true
        },
        {
            text: 'GEADBE',
            correct: false
        }
    ]
},
{
    question: 'Which of these is a DAW',
    answers: [{
            text: 'Nuendo',
            correct: true
        },
        {
            text: 'Cubase',
            correct: true
        },
        {
            text: 'Ableton',
            correct: true
        },
        {
            text: 'Logic',
            correct: true
        }
    ]
},
{
    question: 'What instrument did Niccolo Paganini play?',
    answers: [{
            text: 'Drums',
            correct: false
        },
        {
            text: 'Piano',
            correct: false
        },
        {
            text: 'Violin',
            correct: true
        },
        {
            text: 'Guitar',
            correct: false
        }
    ]
}
]