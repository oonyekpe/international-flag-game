const flags = ["Croatia", "Egypt", "Ethiopia"];

// event listeners
function eventListeners(){
    _checkBtn.addEventListener('click', checkAnswer);
    _playAgainBtn.addEventListener('click', restartQuiz);
}

document.addEventListener('DOMContentLoaded', function(){
    loadQuestion();
    eventListeners();
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
 function runGame(gameType) {

    // Generates a random flag from the list

    //Generates a random number
    let question = Math.floor((Math.random() * 2));
    //finds the coresponding flag in the list
    let currentQuestion = flags[question]
    //pulls image and answer from ...

   
}

function showFlag() {
    if (currentQuestion == "Croatia"){
        
    }

}


