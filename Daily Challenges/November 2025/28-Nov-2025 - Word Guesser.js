/*
Word Guesser
Given two strings of the same length, a secret word and a guess, compare the guess to the secret word using the following rules:

The secret word and guess will only consist of uppercase letters ("A" to "Z");
For each letter in the guess, replace it with a number according to how it matches the secret word:
"2" if the letter is in the secret word and in the correct position.
"1" if the letter is in the secret word but in the wrong position.
"0" if the letter is not in the secret word.
Each letter in the secret word can be used at most once.
Exact matches ("2") are assigned first, then partial matches ("1") are assigned from left to right for remaining letters.
If a letter occurs multiple times in the guess, it can only match as many times as it appears in the secret word.
For example, given a secret word of "APPLE" and a guess of "POPPA", return "10201":

The first "P" is not in the correct location ("1"), the "O" isn't in the secret word ("0"), the second "P" is in the correct location ("2"), the third "P" is a zero ("0") because the two "P"'s in the secret word have been used, and the "A" is not in the correct location ("1").
*/

compare("APPLE", "POPPA")   // should return "10201".
compare("REACT", "TRACE")   // should return "11221".
compare("DEBUGS", "PYTHON")     // should return "000000".
compare("JAVASCRIPT", "TYPESCRIPT")     // should return "0000222222".
compare("ORANGE", "ROUNDS")             // should return "110200".
compare("WIRELESS", "ETHERNET")         // should return "10021000".

function compare(word, guess) {

    // Split the strings into arrays so we can replace the characters
    let guessArray = guess.split("");
    let wordArray = word.split("");
    let result = "";

    // Loop through and assign all of the 2's
    for(let i = 0; i < guessArray.length; i++) {

        // If the current character of the guess matches the current character of the word
        if(guessArray[i] == wordArray[i]) {
            // Replace the guess character with 2
            guessArray[i] = "2";
            // Asterisk out the character in the word so that it is not used again
            wordArray[i] = "*";
            // Overwrite the word with the updated joined array
            word = wordArray.join("");
        }
    }

    // Now the two's are assigned, loop through and assign the 1s and 0s
    for(let i = 0; i < guessArray.length; i++) {

        // Only check for 1s & 0s if we've not already assigned a 2
        if(guessArray[i] != "2") {
            // Check if the current word character exists in the word string
            if(word.indexOf(guessArray[i]) >= 0) {
                // It does exist, so replace it with an asterisk so that it's not considered again
                wordArray[word.indexOf(guessArray[i])] = "*";
                // Replace the guess character with 1
                guessArray[i] = "1";
                // Overwrite word with updated joined array so that characters aren't re-used
                word = wordArray.join("");
            } else {
                // Doesn't exist in the word, so replace guess character with 0
                guessArray[i] = "0";
            }
        }
        
    }

    // Join the guess array to get the result
    result = guessArray.join("");
    console.log(result);

  return result;
}