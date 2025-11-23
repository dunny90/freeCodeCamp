/*
Character Count
Given a sentence string, return an array with a count of each character in alphabetical order.

Treat upper and lowercase letters as the same letter when counting.
Ignore numbers, spaces, punctuation, etc.
Return the count and letter in the format "letter count". For instance, "a 3".
All returned letters should be lowercase.
Do not return a count of letters that are not in the given string.
*/

countCharacters("hello world")      // should return ["d 1", "e 1", "h 1", "l 3", "o 2", "r 1", "w 1"].
countCharacters("I love coding challenges!")    // should return ["a 1", "c 2", "d 1", "e 3", "g 2", "h 1", "i 2", "l 3", "n 2", "o 2", "s 1", "v 1"].
countCharacters("// TODO: Complete this challenge ASAP!") // should return ["a 3", "c 2", "d 1", "e 4", "g 1", "h 2", "i 1", "l 3", "m 1", "n 1", "o 3", "p 2", "s 2", "t 3"].

function countCharacters(sentence) {

    sentence = sentence.toLowerCase().replace(/[^a-z]/gi, "");

    // a = 97
    let UTFOffset = 97;

    // Create an array to store the counts. Size of 26 as there are this many letters
    let countArray = Array.apply(null, Array(26)).map(function () {return 0});

    // Loop through the setence and convert each character to a UTF code
    for(let i = 0; i < sentence.length; i++) {
        // Extract the charcode and subtract the offset so we can align with elements 1 to 26 for each letter
        let charCode = sentence.charCodeAt(i) - UTFOffset;
        // Increment the count at the relevant element
        countArray[charCode] += 1;
    }

    // To store the results we are returning
    let resultArray = [];

    // Loop through the count array and extract anything that's greater than 0
    for(let i = 0; i < countArray.length; i++) {
        // If the count is greater than 0, extract it
        if(countArray[i] > 0) {
            // Work out which character it is by using the UTF offset
            let char = String.fromCharCode(i + UTFOffset);
            // Push the char and count to the results array
            resultArray.push(char + " " + countArray[i]);
        }
    }

    console.log(resultArray);

  return resultArray;
}