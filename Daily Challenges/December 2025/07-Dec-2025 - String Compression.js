/*
String Compression
Given a string sentence, return a compressed version of the sentence where consecutive duplicate words are replaced by the word followed with the number of times it repeats in parentheses.

Only consecutive duplicates are compressed.
Words are separated by single spaces.
For example, given "yes yes yes please", return "yes(3) please".
*/
compressString("yes yes yes please")        // should return "yes(3) please".
compressString("I have have have apples")   // should return "I have(3) apples".
compressString("one one three and to the the the the")  // should return "one(2) three and to the(4)".
compressString("route route route route route route tee tee tee tee tee tee")   // should return "route(6) tee(6)".

function compressString(sentence) {

    // Split the sentence into an array
    let array = sentence.split(" ");
    let resultArray = [];

    // To keep track of how many successive words
    let wordCount = 1;

    // Loop through each word and compare it to the next
    for(let i = 0; i < array.length-1; i++) {

        // If the current word is the same as the next word
        if(array[i].toLowerCase() == array[i+1].toLowerCase()) {
            // Increment the word count
            wordCount ++;
        } else {

            // The next word is different, so work out if we need to push the counter or word to the result array
            if(wordCount > 1) {
                resultArray.push(array[i] + "(" + wordCount + ")");

            } else {
                resultArray.push(array[i]);
            }

            // Reset word count
            wordCount = 1;
        }

        // During the last iteration, we need to add the last word
        if(i == array.length-2) {

            // If duplicates found, add the counter to result array
            if(wordCount > 1) {
                resultArray.push(array[i+1] + "(" + wordCount + ")");

            } else {
                // Otherwise just push the word
                resultArray.push(array[i+1]);
            }
        }
    }

    // Join the result array to form the new sentence
    sentence = resultArray.join(" ");
    console.log(sentence);

  return sentence;
}
