/*
100 Characters
Welcome to the 100th Daily Coding Challenge!

Given a string, repeat its characters until the result is exactly 100 characters long. If your repetitions go over 100 characters, trim the extra so it's exactly 100.
*/

oneHundred("One hundred ") // should return "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ".
oneHundred("freeCodeCamp ") // should return "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC".
oneHundred("daily challenges ") // should return "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge".
oneHundred("!") // should return "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!".

function oneHundred(chars) {

    // To store the result
    let resultString = "";

    // Loop until the result string is 100 characters or more
    while(resultString.length < 100) {
        // Keep appending the char string until we have 100 or more characters in the result string
        resultString += chars;
    }

    // Now trim the result string to exactlt 100 characters
    resultString = resultString.substring(0, 100);

    console.log(resultString.length);

  return resultString;
}