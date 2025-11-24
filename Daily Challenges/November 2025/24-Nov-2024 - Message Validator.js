/*
Message Validator
Given a message string and a validation string, determine if the message is valid.

A message is valid if each word in the message starts with the corresponding letter in the validation string, in order.
Letters are case-insensitive.
Words in the message are separated by single spaces.
*/

isValidMessage("hello world", "hw")             // should return true.
isValidMessage("ALL CAPITAL LETTERS", "acl")    // should return true.
isValidMessage("Coding challenge are boring.", "cca")   // should return false.
isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD")     // should return true.
isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT")    // should return false.

function isValidMessage(validmessage, validator) {

    // Split the message string into an array using space as the delimiter
    let messageArray = validmessage.split(" ");
    // To keep track of whether the message is valid - default to true
    let valid = true;

    // If the length of message array is different to the length of the validator, we know the string is invalid
    if(messageArray.length == validator.length) {

        // Loop through the message array
        for(let i = 0; i < messageArray.length; i++) {
            // Compare the first character of the message to the equivalent validator character
            if(messageArray[i][0].toLowerCase() != validator[i].toLowerCase()) {
                // If they don't match, set the flag to false
                valid = false;
            }
        }

    } else {
        // Number of words doesn't match validator string length, so must be invalid
        valid = false;
    }


    console.log(valid);

  return valid;
}
