### To Do
- [ ] Tools for testing React
- [ ] Add Features/Tests to our App -> TDD - Test driven development
- [ ] `debug()` and `prettyDOM()`
- [ ] Mocking AJAX Requests and Functions
- [ ] Coverage Reports

<!-- Tested code is good code! -->

Why do we test functions?

Mocha and Chai - Test Driven Development

Create a form that can handle:
- first name
- last name
- phone number
- address

Submit the information to the backend. Saved to the database.

But are we done yet? We aren't, we need to test for edge cases
Happy path - best outcome

- A user fills out the form completely, is able to submit to the database

Unhappy path - worst, or possible bad outcomes

- What happens if a user doesn't submit a first name?
- What happens if a user doesn't submit a last name?
- What happens if a user submits their phone number as their first name?

TDD - We first write the test. Make the test fail. Refactor our code/function to pass the test. Rinse and Repeat



You can a whole career around JUST making tests

# Unit Test -> It will only affect one file
- Create a way for the AI to make a selection -> Helper function
# Integration Test -> Clicking on the robot head will toggle the cheating boolean. It affects the AI selection
- Create a way for the AI to Cheat
# Mock -> Test fetching highscores (mock axios)
- Create a way for us to retrieve highscore

- What does testing help us with?
    - Know if something is working given specific inputs
    - Ensure functionality works as expected

- TODO list
 - Created a function that allows the AI to make a selection
 <!-- Integration testing -->
 - Create a cheat mode for the AI
    - We can click on the AI icon, and activate a cheat mode for it
    - It'll always select the winning choice