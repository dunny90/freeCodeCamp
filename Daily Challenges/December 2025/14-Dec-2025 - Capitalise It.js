/*
Capitalize It
Given a string title, return a new string formatted in title case using the following rules:

Capitalize the first letter of each word.
Make all other letters in each word lowercase.
Words are always separated by a single space.
*/

titleCase("hello world")            // should return "Hello World".
titleCase("the quick brown fox")    // should return "The Quick Brown Fox".
titleCase("JAVASCRIPT AND PYTHON")  // should return "Javascript And Python".
titleCase("AvOcAdO tOAst fOr brEAkfAst")    // should return "Avocado Toast For Breakfast".

function titleCase(title) {

    // Split into an array so we can manipulate each word
    let arr = title.split(" ");


    // Loop through the array of words
    for(let i = 0; i < arr.length; i++) {
        // Overwrite first letter with upper case, followed by remaining substring in lower case
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
    }

    // Join the array to form result
    title = arr.join(" ");
    console.log(title);

    return title;
}
