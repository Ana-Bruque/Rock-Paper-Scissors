
let userScore = 0
let computerScore = 0
let userScore_div = document.getElementById('user-score');
let computerScore_div = document.getElementById('computer-score');
const result_section = document.getElementById('message');

//Array

const userOptions = [
  'Rock',
  'Paper',
  'Scissors'
];
let playerChoice;
let computerChoice;
const userOptionsWrapper = document.querySelector("#user-options-wrapper");

//Create the buttons with choice data-ids

userOptions.forEach((choice) => {
  const listUserOptions = document.createElement('button');
  listUserOptions.textContent = choice;
  listUserOptions.classList.add('choice');
  listUserOptions.setAttribute('data-choice', choice);
  console.log(listUserOptions);
  userOptionsWrapper.appendChild(listUserOptions);
});


// Give each button an event listener

const userChoiceButton = document.querySelectorAll('.choice');
console.log(userChoiceButton);

userChoiceButton.forEach(function(button){
  button.addEventListener('click', (e) => {
    getPlayerChoice(e)
    getComputerChoice();
    determineWinner(playerChoice, computerChoice);
  });
});

// Set player choice on click
const getPlayerChoice = (e) => {
  playerChoice = e.target.dataset.choice;
  console.log(playerChoice, 'PLAYER CHOICE')
}


//Get random computer choice and save to a variable (computerChoice)*/

const getComputerChoice = () => {
  computerChoice = userOptions[Math.floor(Math.random() * 3)];
  console.log(computerChoice, 'COMPUTER CHOICE')
};


//Create a function which compares and gives a result

function win(playerChoice , computerChoice) {
  userScore++;
  userScore_div.innerHTML = userScore;
  computerScore_div.innerHTML = computerScore;
  result_section.innerHTML = `${playerChoice} defeats ${computerChoice} . You win!!`;
}


function draw() {
  userScore_div.innerHTML = userScore;
  computerScore_div.innerHTML = computerScore;
  result_section.innerHTML = `${playerChoice} equals ${computerChoice} . It's a draw!!`;
}

function lose() {
  computerScore++;
  userScore_div.innerHTML = userScore;
  computerScore_div.innerHTML = computerScore;
  result_section.innerHTML = `${computerChoice} defeats ${computerChoice} . You lost!!`
}

const determineWinner = (playerChoice , computerChoice) => {
    if (playerChoice === computerChoice) {
      return draw(playerChoice , computerChoice);
    }
    else if (
      playerChoice === 'Paper' && computerChoice === 'Rock'
      || playerChoice === 'Scissors' && computerChoice === 'Paper'
      || playerChoice === 'Rock' && computerChoice === 'Scissors'
    ) {
      return win(playerChoice , computerChoice);
    }
    lose(playerChoice , computerChoice);
  };

