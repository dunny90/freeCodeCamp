/*
Vowels and Consonants
Given a string, return an array with the number of vowels and number of consonants in the string.

Vowels consist of a, e, i, o, u in any case.
Consonants consist of all other letters in any case.
Ignore any non-letter characters.
For example, given "Hello World", return [3, 7].
*/

count("Hello World")        // should return [3, 7].
count("JavaScript")         // should return [3, 7].
count("Python")             // should return [1, 5].
count("freeCodeCamp")       // should return [5, 7].
count("Hello, World!")      // should return [3, 7].
count("The quick brown fox jumps over the lazy dog.")   // should return [11, 24].

function count(str) {

    // Array to define the vowels
    let vowels = ["a","e","i","o","u"];
    // Counters to store vowel and consonant counts
    let vowelCounter = 0;
    let consonantCounter = 0;

    // Loop through each character in the string
    for(let char = 0; char < str.length; char++) {
        
        // Default vowelFound to false
        let vowelFound = false;

        // Pattern to check whether the current char is [a-z] letter
        let pattern = /[a-z]/

        // If the current char matches the pattern then check whether a vowel or consonant
        if(str[char].toLowerCase().match(pattern)) {        

            // Loop through the vowels and see if the current char matches any of these
            for(let vowel = 0; vowel < vowels.length; vowel++) {
                
                // If the current char is a vowel, increment the counter and log that a vowel has been found
                if(str[char].toLowerCase() == vowels[vowel]) {
                    vowelCounter++;
                    vowelFound = true;
                } 
            }
            
            // If a vowel wasn't found then it must be a consonant
            if(!vowelFound) {
                consonantCounter++;
            }

        }

    }

    // Create the return array
    let returnCounters = [vowelCounter, consonantCounter];

    console.log(returnCounters);
    
  return returnCounters;
}