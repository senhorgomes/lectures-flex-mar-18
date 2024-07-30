import { render, fireEvent, prettyDOM } from '@testing-library/react';

import Game from '../Game';

describe('Testing for cheating computer selection', ()=> {
    // Happy path -> If I click on the emoji the AI cheat mode is on
    xtest('change cheat state when clicking on robot emoji', ()=> {
        const { container, getByTestId } = render(<Game/>);
        // Target the emoji
        const robotIcon = getByTestId("robot-icon")
        console.log(prettyDOM(robotIcon));
        // we need to click on the robot icon
        fireEvent.click(robotIcon);
        // To identify that cheating is one -> State modify that cheating is true
        // state.cheating == true
        expect(robotIcon).toHaveClass('cheating');
    })
    // Happy path -> If cheat mode is on, player always loses
    // If player chooses rock, then the player loses
    // If player chooses paper, then the player loses
    // If player chooses scissors, then the player loses

    test('change cheat state and ensure player loses if they choose Rock', ()=> {
        const { container, getByTestId } = render(<Game/>);
        const robotIcon = getByTestId("robot-icon")
        fireEvent.click(robotIcon);
        expect(robotIcon).toHaveClass('cheating');
        // player chooses Rock
        const playerSelection = getByTestId('Rock');
        fireEvent.click(playerSelection);

        // Check if the player lose
        const resultMessage = getByTestId("game_result");
        expect(resultMessage.innerHTML).toBe("Too bad! Better luck next time.")

    })
    test('change cheat state and ensure player loses if they choose Paper', ()=> {
        const { container, getByTestId } = render(<Game/>);
        const robotIcon = getByTestId("robot-icon")
        fireEvent.click(robotIcon);
        expect(robotIcon).toHaveClass('cheating');
        // player chooses Rock
        const playerSelection = getByTestId('Paper');
        fireEvent.click(playerSelection);

        // Check if the player lose
        const resultMessage = getByTestId("game_result");
        expect(resultMessage.innerHTML).toBe("Too bad! Better luck next time.")

    })
    test('change cheat state and ensure player loses if they choose Scissors', ()=> {
        const { container, getByTestId } = render(<Game/>);
        const robotIcon = getByTestId("robot-icon")
        fireEvent.click(robotIcon);
        expect(robotIcon).toHaveClass('cheating');
        // player chooses Rock
        const playerSelection = getByTestId('Scissors');
        fireEvent.click(playerSelection);

        // Check if the player lose
        const resultMessage = getByTestId("game_result");
        expect(resultMessage.innerHTML).toBe("Too bad! Better luck next time.")

    })
    // Sad -> If the emoji is clicked twice, cheat mode is off
    test('turn off cheating mode if emoji is clicked twice', ()=> {
        const { container, getByTestId } = render(<Game/>);
        const robotIcon = getByTestId("robot-icon")
        fireEvent.click(robotIcon);
        fireEvent.click(robotIcon);
        expect(robotIcon).not.toHaveClass('cheating');
        

    })
    // Sad -> Could there be a draw
})