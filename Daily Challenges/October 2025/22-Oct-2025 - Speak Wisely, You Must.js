/*
Speak Wisely, You Must
Given a sentence, return a version of it that sounds like advice from a wise teacher using the following rules:

Words are separated by a single space.
Find the first occurrence of one of the following words in the sentence: "have", "must", "are", "will", "can".
Move all words before and including that word to the end of the sentence and:
Preserve the order of the words when you move them.
Make them all lowercase.
And add a comma and space before them.
Capitalize the first letter of the new first word of the sentence.
All given sentences will end with a single punctuation mark. Keep the original punctuation of the sentence and move it to the end of the new sentence.
Return the new sentence, make sure there's a single space between each word and no spaces at the beginning or end of the sentence.
For example, given "You must speak wisely." return "Speak wisely, you must."

*/

wiseSpeak("You must speak wisely.") // should return "Speak wisely, you must."
wiseSpeak("You can do it!") // should return "Do it, you can!"
wiseSpeak("Do you think you will complete this?") // should return "Complete this, do you think you will?"
wiseSpeak("All your base are belong to us.") // should return "Belong to us, all your base are."
wiseSpeak("You have much to learn.") // should return "Much to learn, you have."

function wiseSpeak(sentence) {
  
  // To store the new sentence
  let newSentence = "";
  // Words to search for
  let wordsToFind = ["have","must","are","will","can"];
  
  // Loop through the words to find
  for(let i = 0; i < wordsToFind.length; i++) {
    
    // Store the index of the first word
    let indexOfWord = sentence.indexOf(wordsToFind[i]);
    
    // If greater than zero, i.e. word has been found
    if (indexOfWord > 0) {
      
      // Extract the punctuation
      let punctuation = sentence[sentence.length-1];
      
      // Remove the punctuation from the sentence
      sentence = sentence.substring(0, sentence.length-1);
      
      // Find the first part of the sentence, including the word
      let firstPart = sentence.substring(0, indexOfWord + wordsToFind[i].length);

      // Replace the first part of the sentence with empty string. Include the whitespace following the word
      newSentence = sentence.replace(firstPart + " ", "");
      
      // Set the first part to be lower case
      firstPart = firstPart.toLowerCase();
      
      // Capitalise the first char by turning into an array, capitalising the first element, then reform
      let sentenceArray = newSentence.split("");
      sentenceArray[0] = sentenceArray[0].toUpperCase();
      newSentence = sentenceArray.join("");
      
      // Construct the new sentence
      newSentence += ", " + firstPart + punctuation;
      
      // No need to keep searching
      break;
      
    }
    
  }
  
  
  return newSentence;
}
