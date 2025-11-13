/*
Battle of Words
Given two sentences representing your team and an opposing team, where each word from your team battles the corresponding word from the opposing team, determine which team wins using the following rules:

The given sentences will always contain the same number of words.
Words are separated by a single space and will only contain letters.
The value of each word is the sum of its letters.
Letters a to z correspond to the values 1 through 26. For example, a is 1, and z is 26.
A capital letter doubles the value of the letter. For example, A is 2, and Z is 52.
Words battle in order: the first word of your team battles the first word of the opposing team, and so on.
A word wins if its value is greater than the opposing word's value.
The team with more winning words is the winner.
Return "We win" if your team is the winner, "We lose" if your team loses, and "Draw" if both teams have the same number of wins.
*/

battle("hello world", "hello word")                              // should return "We win".
battle("Hello world", "hello world")                             // should return "We win".
battle("lorem ipsum", "kitty ipsum")                             // should return "We lose".
battle("hello world", "world hello")                             // should return "Draw".
battle("git checkout", "git switch")                             // should return "We win".
battle("Cheeseburger with fries", "Cheeseburger with Fries")     // should return "We lose".
battle("We must never surrender", "Our team must win")           // should return "Draw".

function battle(ourTeam, opponent) {

  // Split each string into arrays using whitespace as the delimiter
  let ourWordArray = ourTeam.split(" ");
  let opponentWordArray = opponent.split(" ");
  
  let ourTeamCounter = 0;
  let opponentCounter = 0;
  let result = "";
  
   // Loop through the words in the array
  for(let word = 0; word < ourWordArray.length; word++) {
    
    // Get the scores for each word
    let ourScore =  calculateWordValue(ourWordArray[word]);
    let opponentScore = calculateWordValue(opponentWordArray[word]);
    
    if(ourScore > opponentScore) {
      // Our team win
      ourTeamCounter++;
      
    } else if (opponentScore > ourScore) {
      // Opponents win
      opponentCounter++;
    }

  }
  
  if(ourTeamCounter > opponentCounter) {
    result = "We win";
  } else if(ourTeamCounter < opponentCounter) {
    result = "We lose";
  } else {
    result = "Draw";
  }
  
  return result;
}

function calculateWordValue(word) {  
  
  let wordScore = 0;
  
  // Loop through the characters in the word and sum them
  for (let char = 0; char < word.length; char++) {

    // Get the UTF value of the char and convert into 1-26 range by subtracting 64 as A = 65
    let charScore = word[char].toUpperCase().charCodeAt(0) - 65;
    
    // Check if capital and double the score if so
    if(word[char] == word[char].toUpperCase()) {
      charScore = charScore * 2;
    }

    // Keep track of the word score
    wordScore += charScore;
  }
  
  return wordScore;
}
