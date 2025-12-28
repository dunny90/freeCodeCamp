/*
SCREAMING_SNAKE_CASE
Given a string representing a variable name, return the variable name converted to SCREAMING_SNAKE_CASE.

The given variable names will be written in one of the following formats:

camelCase
PascalCase
snake_case
kebab-case
In the above formats, words are separated by an underscore (_), a hyphen (-), or a new word starts with a capital letter.

To convert to SCREAMING_SNAKE_CASE:

Make all letters uppercase
Separate words with an underscore (_)
*/
toScreamingSnakeCase("userEmail")       // should return "USER_EMAIL".
toScreamingSnakeCase("UserPassword")    // should return "USER_PASSWORD".
toScreamingSnakeCase("user_id")         // should return "USER_ID".
toScreamingSnakeCase("user-address")    // should return "USER_ADDRESS".
toScreamingSnakeCase("username")        // should return "USERNAME".

function toScreamingSnakeCase(variableName) {

    if(variableName.includes("-")) {
        // Kebab case

        // Just need to replace the hyphens with underscores and then change to upper case
        variableName = variableName.replace("-", "_").toUpperCase();

    } else if(variableName.includes("_")) {
        // Snake case
        
        // Just need to change to upper case
        variableName = variableName.toUpperCase();

    } else if (variableName[0] == variableName[0].toUpperCase()) {
        // Pascal case

        // Get an array of words using upper case A-Z as the delimiter
        // Join using underscore and convert to upper case
        variableName = splitUsingUpperCase(variableName).join("_").toUpperCase();

    } else {
        // Camel case

        // We are going to capitalise the first character of the variable name
        // so that we can re-use the function already written to parse pascal case

        let arr = variableName.split("");
        arr[0] = arr[0].toUpperCase();
        variableName = arr.join("");

        // Get an array of words using upper case A-Z as the delimiter
        // Join using underscore and convert to upper case
        variableName = splitUsingUpperCase(variableName).join("_").toUpperCase();

    }

    console.log(variableName);

  return variableName;
}

// Splits a string into an array using upper case characters as delimiter
function splitUsingUpperCase(string) {

    let regex = /[A-Z]/g
    let startPos = -1;
    let endPos = -1;
    let arr = [];
    let match;

    // Loop while there are matches
    while(match = regex.exec(string)) {

        // If we've not previously set a start position, set it
        if(startPos == -1) {
            startPos = match.index;
        } else {
            endPos = match.index;
        }

        // If the next occurence has been identified, we can set the end position and extract the word
        if(endPos != -1) {
            // Extrtact word
            let word = string.substring(startPos, endPos);
            // Add to array
            arr.push(word);
            // Set next start position
            startPos = match.index;
        }

    }

    // Extract the last word using last occurence start position
    let word = string.substring(startPos);
    // Add to the array
    arr.push(word);

    return arr;
}