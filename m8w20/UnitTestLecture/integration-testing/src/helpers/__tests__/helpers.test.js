import { announceResult, robotSelection } from "../helpers";


describe('Test announceResult function', ()=> {
    let fakeState; 
    beforeEach(()=> {
      fakeState = {
          compSelection: null,
          playerSelection: null,
          status: 'Waiting',
          cheating: false
      }
    })
    // One for winning
    test('returns Won if the player is "Scissors" and the comp is "Paper"', ()=> {
      // Modify state to include the player selection and compSelection
      fakeState.playerSelection = 'Scissors';
      fakeState.compSelection = 'Paper';
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
    })
    // One for losing
    test('returns Lost if the player is "Paper" and the comp is "Scissors"', ()=> {
      // Modify state to include the player selection and compSelection
      fakeState.playerSelection = 'Paper';
      fakeState.compSelection = 'Scissors';
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
    })
    // One for a tied game
    test('returns Tied if the player and comp make the same selection', ()=> {
      fakeState.playerSelection = 'Paper';
      fakeState.compSelection = 'Paper';
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied')
    })
    test('returns Waiting if the player and comp have not made their selection', ()=> {
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Waiting')
    })

})

describe('Testing for AI selection', ()=> {

  // Happy Path
  test('AI is able to make a selection', ()=> {
    // An array of choices
    const arrayOfChoices = ["Rock", "Paper", "Scissors"];

    const selectedChoice = robotSelection();
    expect(arrayOfChoices).toContain(selectedChoice);
  })
  // AI selection
  // Sad path?
  // If the AI fails to show any selection?
  // Is the selection predictable?
  xtest('AI is not predictable, it wont always choose Rock', ()=> {

    const selectedChoice = robotSelection();
    expect(selectedChoice).not.toBe("Rock");
  })
})

