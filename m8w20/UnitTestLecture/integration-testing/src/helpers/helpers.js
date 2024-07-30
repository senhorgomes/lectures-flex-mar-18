export const announceResult = (playerSelection, compSelection) => {
    const lookup = {
      'Scissors': 'Paper',
      'Paper': 'Rock',
      'Rock': 'Scissors'
    };
    if (!(playerSelection && compSelection)) {
      return 'Waiting';
    }
    // Tree === Tree
    if (lookup[playerSelection] === compSelection) {
      return 'Won';
    }
    if (lookup[compSelection] === playerSelection) {
      return 'Lost';
    }
    return 'Tied';
  };
  
// Function works, but the test fails

// Check the tests, are the test correct, are we testing the correct/expected behaviour
// Then you look at the code

// Companies won't invest in testing
// Weaker tests
// Don't cover all edge cases
// Test will pass
// Function breaks the app

  export const genFeedbackMessage = (status) => {
    const lookup = {
      Waiting: 'Waiting for your choice!',
      Won: 'You win!!',
      Lost: 'Too bad! Better luck next time.',
      Tied: 'Tie game'
    };
    return lookup[status];
  };
  // Creating a function for our AI selection
  export const robotSelection = (cheating, playerSelection) => {

    const lookup = {
      "Scissors": "Rock",
      "Paper": "Scissors",
      "Rock": "Paper"
    }

    if(cheating === true){
      return lookup[playerSelection]
    }
    // We want to make this random
    const arrayOfChoices = ["Rock", "Paper", "Scissors"];
    // Generate a number
    const randomIndex = Math.floor(Math.random() * arrayOfChoices.length);
    return arrayOfChoices[randomIndex];
  }