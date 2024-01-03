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
        // Subtract one minute for an incorrect answer
        timerValue -= 60;

        // Ensure the timer doesn't go below zero
        timerValue = Math.max(timerValue, 0);
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
   // Stop the timer
    clearInterval(timer); 
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").textContent = score;
}

function saveScore(pre) {
    const initials = document.getElementById("initials").value;

    // Save score and initials to local storage
    const userScore = { initials, score };
    localStorage.setItem("userScore", JSON.stringify(userScore));

    // Check for previous high score
    
    const prevHighScoreJSON = localStorage.getItem("highScore");
    if (prevHighScoreJSON) {
        const prevHighScore = JSON.parse(prevHighScoreJSON);
    
    }

    // Check if the current score is a new high score
    const prevHighScoreValue = prevHighScoreJSON 
    if (score > prevHighScoreValue) {
        // Save current score as the new high score
        localStorage.setItem("highScore", JSON.stringify(userScore));
    }

    // Reset the timer and quiz
    location.reload();

}


let timerValue = 600; // 10 minutes in seconds

function startTimer() {
    timer = setInterval(function () {
        const minutes = Math.floor(timerValue / 60);
        const seconds = timerValue % 60;
        document.getElementById("timer").textContent = 'Timer: ' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

        if (timerValue === 0) {
            endQuiz();
        } else {
            timerValue--;
        }
    }, 1000);
}

function showHighScore() {
    const prevHighScoreJSON = localStorage.getItem("highScore");
    if (prevHighScoreJSON) {
        const prevHighScore = JSON.parse(prevHighScoreJSON);
        alert('The previous high score was ' + prevHighScore.score + ' by \'' + prevHighScore.initials + '\'.');
    } else {
        alert('No high score recorded yet.');
    }
}

