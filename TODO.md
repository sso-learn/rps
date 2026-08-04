# TODO

- [ ] In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
- [ ] For now, remove the logic that plays exactly five rounds.
- [ ] Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
- [ ] Add a div for displaying results and change all of your console.logs into DOM methods.
- [ ] Display the running score, and announce a winner of the game once one player reaches 5 points.
- [ ] You will likely have to refactor (rework/rewrite) your original code to make it work for this. That's OK! Reworking old code is an important part of a programmer's life.


// - getHumanChoice — i think i can eliminate this -- since now it'll be event driven from button
// - updateScore — keep
// - playRound — modify. this will be a manipulation of the dom as well instead of logging to console.
// - playGame — modify. i think this will become a way to show the summary of the game
// - i think there's a way for playround to manage tracking the round. and once the rounded reaches 4 (in computer land, but round 5 for humans), then it will call showsummary.
// - html needs buttons for each option for the human, a p for computer choice, a p or group of p's for the scores, and a p for the summary
// - nice to haves would be having images for the buttons, image for the computer choice, a round counter, and some ux/ui polish, but that can come later.
// - thinking of a new function to grab the choice from the human and assign it to a variable for the round, or pass to play round
// - new variables at top level are human score and computer score. and round number (so playround can track it)
//- event listeners should get attached at startup
