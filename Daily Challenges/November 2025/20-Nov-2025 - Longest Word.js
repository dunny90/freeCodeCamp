/*
Longest Word
Given a sentence string, return the longest word in the sentence.

Words are separated by a single space.
Only letters (a-z, case-insensitive) count toward the word's length.
If there are multiple words with the same length, return the first one that appears.
Return the word as it appears in the given string, with punctuation removed.
*/

longestWord("The quick red fox")            // should return "quick".
longestWord("Hello coding challenge.")      // should return "challenge".
longestWord("Do Try This At Home.")         // should return "This".
longestWord("This sentence... has commas, ellipses, and an exlamation point!")  // should return "exlamation".
longestWord("A tie? No way!")               // should return "tie".
longestWord("Wouldn't you like to know.")   // should return "Wouldnt".

function longestWord(sentence) {

    // Split the sentence into individual words
    let words = sentence.split(" ");
    // To store the result
    let longestWord = "";

    // Loop through the words
    for(let i = 0; i < words.length; i++) {
        // Replace any characters that are not [a-z] with empty string. Search globally and case insensitive
        let word = words[i].replace(/[^a-z]/gi, "");

        // If the current word is longer than the previous longest word, store it
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }

    console.log(longestWord);
    
  return longestWord;
}