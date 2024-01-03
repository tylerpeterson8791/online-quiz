# Online Quiz

## Description

We were tasked with creating a timed quiz on coding fundamentals.  No starter code provided  Below is the acceptance criteria:

GIVEN I am taking a code quiz

WHEN I click the start button
THEN a timer starts and I am presented with a question

WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0
THEN the game is over

WHEN the game is over
THEN I can save my initials and score

## Installation

The user is presented with a simple "Start Quiz" button.  Once clicked the timer starts and the first question is presented.

The upper lefthand corner has a clickable Current High Score checker that prompts an alert with the Initials and Current high score.

Any incorrect answers by the user subtracts a minute from the available time left.  The quiz ends when all the questions are answered or the time runs out.

Once quiz is over the user is prompted with their final score and to enter their initials.  Once that is saved the page refreshes and they can start again.

## Usage

I kept the HTML simple with a header, "quiz container" and "result container".  Depending on which phase of the quiz the user is on the containers dynamically change or are hidden.

Starting with the questions and answers in JS declared as constant, I also start which question they are on and score as 0 globally so the users start with a fresh slate.

Showing the question is poplated and as questions are answered the next questions are populated.  This is done with a for loop itteration until the last question is answered.

To make the timer adjust negatively I had to add a function that subrtacts from the timer in the checkAnswer function.

Since the quiz can also end with the timer running out I decided it to add end the quiz in the startTimer function.

The high scores and initials are stored in local storage.


## Credits

Saving the high score in local storage to be pulled as well as the timer logic was the most difficult part of this project.  I'm pretty sure this funtions properly but there's probably a much cleaner way to accomplish this.  In the words of Katy, there were multiple times I got "Lost in the Sauce" (and may still be there somewhat) but I'm proud of the final product.

Shout out to my brother Kai for leaving me the breadcrumbs to follow.  Additional shout out to Pseudocoding and Google.  Staring at a blank document is very daunting.  Once I split it up into bite sized chunks I was able to tackle each section one at a time and it made it feel more doable.![online-quiz](https://github.com/tylerpeterson8791/online-quiz/assets/75902133/6f8659c2-98bc-47ed-9337-17c6ec0e5311)
