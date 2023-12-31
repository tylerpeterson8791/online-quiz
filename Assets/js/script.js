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