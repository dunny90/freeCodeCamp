/*
Rock, Paper, Scissors
Given two strings, the first representing Player 1 and the second representing Player 2, determine the winner of a match of Rock, Paper, Scissors.

The input strings will always be "Rock", "Paper", or "Scissors".
"Rock" beats "Scissors".
"Paper" beats "Rock".
"Scissors" beats "Paper".
Return:

"Player 1 wins" if Player 1 wins.
"Player 2 wins" if Player 2 wins.
"Tie" if both players choose the same option.
*/
rockPaperScissors("Rock", "Rock")       // should return "Tie".
rockPaperScissors("Rock", "Paper")      // should return "Player 2 wins".
rockPaperScissors("Scissors", "Paper")  // should return "Player 1 wins".
rockPaperScissors("Rock", "Scissors")   // should return "Player 1 wins".
rockPaperScissors("Scissors", "Scissors")   // should return "Tie".
rockPaperScissors("Scissors", "Rock")       // should return "Player 2 wins".

function rockPaperScissors(player1, player2) {

    // Combine the values to make processing easier
    let combined = player1 + player2;
    let result;

    // If the values are the same then it's a tie...no need to continue
    if(player1 == player2) {
        result = "Tie";
        console.log(result);
        return result;
    }

    // If either player has rock
    if(combined.includes("Rock")) {

        // If player 1 has rock
        if(player1 == "Rock") {

            // Determine what player 2 has to decide the result
            if(player2 == "Paper") {
                result = "Player 2 wins";
            } else {
                // Player 2 must have scissors
                result = "Player 1 wins";
            }
        } else {
            // Player 2 must have rock

            // Determine what player 1 has to decide the result
            if(player1 == "Paper") {
                result = "Player 1 wins";
            } else {
                // Player 1 must have scissors
                result = "Player 2 wins";
            }
        }
        
    } else {
        // Neither player has rock and they don't have the same...scissors now wins!
        
        if(player1 == "Scissors") {
            result = "Player 1 wins";
        } else {
            // Player 2 must have scissors
            result = "Player 2 wins";
        }

    }

    console.log(result);

  return result;
}