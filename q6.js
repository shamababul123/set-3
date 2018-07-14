let highScore = 75;
let userScore = 67;
if (userScore > highScore) {
    console.log("Congratulations!! Your new high score is " + userScore);
} else {
    console.log("Try Again. You just need " + (highScore - userScore + 1) + " points to win!");
}
// answer(Try Again. You just need 9 points to win!)