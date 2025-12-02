/*
Camel to Snake
Given a string in camel case, return the snake case version of the string using the following rules:

The input string will contain only letters (A-Z and a-z) and will always start with a lowercase letter.
Every uppercase letter in the camel case string starts a new word.
Convert all letters to lowercase.
Separate words with an underscore (_).
*/

toSnake("helloWorld")           // should return "hello_world".
toSnake("myVariableName")       // should return "my_variable_name".
toSnake("freecodecampDailyChallenges")  // should return "freecodecamp_daily_challenges".

function toSnake(camel) {

    // Regular expression to match any upper case A-Z
    let regex = /[A-Z]/g;

    // Return the matches to an array
    let matches = camel.match(regex);
    // To store result
    let snake = "";
    let startPos = 0;
    let letterPos = 0

    // Loop through the matches so we can work out where the underscores need to be
    for(let i = 0; i < matches.length; i++) {

        // Work out the position of the upper case
        letterPos = camel.indexOf(matches[i]);
        // Extract the first part of the word
        snake += camel.substring(startPos, letterPos);
        // Add the underscore
        snake += "_";
        // Add the letter itself, converted to lower case
        snake+= matches[i].toLowerCase();
        // Set the start position of the next word
        startPos = letterPos+1;
    }

    // Add the remaining part of the string after the final upper case letter
    snake += camel.substring(startPos);

    console.log(snake);

  return snake;
} 