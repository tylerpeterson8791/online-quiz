const quizData = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Makeup Language"],
        correctAnswer: 0
    },
    {
        question: "Choose the correct HTML element for the largest heading",
        answers: ["<heading", "h6", "head", "h1"],
        correctAnswer: 3
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: ["var", "let", "Both var and let", "Neither"],
        correctAnswer: 2
    },
    {
        question: "What is the term for top level scope?",
        answers: ["Global", "Window", "Top", "General"],
        correctAnswer: 0
    },
    {
        question: "What is the general term for a loop that will never exit?",
        answers: ["Neverending Loop", "Forever Loop", "Infinite Loop", "Circular Loop"],
        correctAnswer: 2
    },

];

let currentQuestionIndex = 0;
let score = 0;
let timer;

// When the quiz starts hide the start button and display the quiz-container
function startQuiz() {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showQuestion();
    startTimer();
}

// Now we have to show the question and answer options
function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const answersContainer = document.getElementById("answers-container");

    questionContainer.textContent = quizData[currentQuestionIndex].question;
    answersContainer.innerHTML = "";


    for (let i = 0; i < 4; i++) {
        const answerParagraph = document.createElement("p");
        const answerBtn = document.createElement("button");
        answerBtn.textContent = quizData[currentQuestionIndex].answers[i];
        answerBtn.onclick = function () {
            checkAnswer(i);
        };
        answerParagraph.appendChild(answerBtn);
        answersContainer.appendChild(answerParagraph);
    }
}

function checkAnswer(answerIndex) {
    if (answerIndex === quizData[currentQuestionIndex].correctAnswer) {
        score++;
    } else {
        // Subtract time for incorrect answer
        // Need to end quiz immediately when timer hits zero
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    // timer logic here
    // setInterval to update the timer display every second
}

function endQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").textContent = score;
}

function saveScore() {
    const initials = document.getElementById("initials").value;

    // Save score and initials to local storage
    const userScore = { initials, score };
    localStorage.setItem("userScore", JSON.stringify(userScore));

    // Check for previous high score
    // I have this set as an alert right now which I don't love.  In the mockup it shows a link for high score in the upper left corner
    const prevHighScoreJSON = localStorage.getItem("highScore");
    if (prevHighScoreJSON) {
        const prevHighScore = JSON.parse(prevHighScoreJSON);
        alert(`The previous high score was ${prevHighScore.score} by '${prevHighScore.initials}'.`);
    }

    // Check if the current score is a new high score
    // Looked up and learned new operator:  ? is called a ternary if operator.  It's basically an "If/Return" operator
    const prevHighScoreValue = prevHighScoreJSON ? prevHighScore.score : 0;
    if (score > prevHighScoreValue) {
        // Save current score as the new high score
        localStorage.setItem("highScore", JSON.stringify(userScore));
    }

    // Reset the timer and quiz
    resetQuiz();
}

function resetQuiz() {
    // Implement logic to reset the timer and quiz state
    // Stop the timer, reset the score, and reset the question index
    score = 0;
    currentQuestionIndex = 0;

    // Restart the quiz
    startQuiz();
}









// // Start with two global variables set at zero to Start

// // 1. A clicker that goes every time an answer is chosen, this will dictate what gets populated into the page when it flips. 0=Start Quiz page, 1 = q1 and so onabort.apply.apply.apply
// // 2. A timer that starts when the quiz begins and stops when it ends? (does it have to be timed?)
// THE KICKER TO THIS IS THAT TIME GETS SUBTRACTED FOR A WRONG ANSWER Don't know how I do that...

// // I need a way to track correct and incorrect.  Then on the final page this tally will be displayed.

// // When clicker reaches a number the corresponding text is displayed in the question field and all the answer buttons.A

// // Make buttons 2-4 invisible on start page (only have "start quiz" button) and final page (maybe a "try again" button).
// // 
// Declare these html pointers globally at the begining.

// Have a way to save initials and score???  I'm assuming this is a local storage thing???

// // // Acceptance Criteria

// // GIVEN I am taking a code quiz

// // WHEN I click the start button
// // THEN a timer starts and I am presented with a question

// // WHEN I answer a question
// // THEN I am presented with another question

// // WHEN I answer a question incorrectly
// // THEN time is subtracted from the clock

// // WHEN all questions are answered or the timer reaches 0
// // THEN the game is over

// // WHEN the game is over
// // THEN I can save my initials and score