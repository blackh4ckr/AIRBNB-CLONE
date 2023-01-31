const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const finalResult = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => { 
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult1()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 //same as * 3
    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'paper'
    }
    if (randomNumber === 3){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

// USING IF STATEMENTS
function getResult(){
    if (computerChoice === userChoice){
        result = 'DRAW'
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'YOU WIN'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'YOU LOSE'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'YOU WIN'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'YOU WIN'
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'YOU LOSE'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'YOU LOSE'
    }
    finalResult.innerHTML = result

}

/*
USING THE SWITCH STATEMENT
key-value pairs that represents the possible combinations of computerChoice and userChoice
*/
function getResult1() {
    switch (computerChoice + userChoice){
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
        result = 'YOU WIN!!!!';
        break;
        case 'rockrock':
        case 'paperpaper':
        case 'scisssorsscissors':
        result = 'YOU DRAW!!!!'
        break;
        default:
        result = 'YOU LOSE!!!!!1'
    }
    finalResult.innerHTML = result
}

/*
Another way is to use an object with key-value pairs that represents the possible combinations of computerChoice and userChoice,
where the keys are the string concatenation of the two choices and the values are the result:
*/

function getResult2() {
    const resultMap = {
        rockrock: 'DRAW',
        scissorsscissors: 'DRAW',
        paperpaper: 'DRAW',
        rockpaper: 'YOU WIN',
        paperscissors: 'YOU WIN',
        scissorsrock: 'YOU WIN',
        paperrock: 'YOU LOSE',
        scissorspaper: 'YOU LOSE',
        rockscissors: 'YOU LOSE'
    };
    finalResult.innerHTML = resultMap
}