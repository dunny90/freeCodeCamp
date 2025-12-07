/*
Markdown Ordered List Item Converter
Given a string representing an ordered list item in Markdown, return the equivalent HTML string.

A valid ordered list item in Markdown must:

Start with zero or more spaces, followed by
A number (1 or greater) and a period (.), followed by
At least one space, and then
The list item text.
If the string doesn't have the exact format above, return "Invalid format". Otherwise, wrap the list item text in li tags and return the string.

For example, given "1. My item", return "<li>My item</li>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.
*/

convertListItem("1. My item")           // should return "<li>My item</li>".
convertListItem(" 1.  Another item")    // should return "<li>Another item</li>".
convertListItem("1 . invalid item")     // should return "Invalid format".
convertListItem("2. list item text")    // should return "<li>list item text</li>".
convertListItem(". invalid again")      // should return "Invalid format".
convertListItem("A. last invalid")      // should return "Invalid format".

function convertListItem(markdown) {

    // Determine if the markdown is in a valid format using a regex
    let regex1 = /^\s*[1-9]+.\s+[a-zA-Z\s]+$/

    // Test whether the markdown string matches
    let valid = regex1.test(markdown);

    let invalidResult = "Invalid format";
    let result = "";

    // If not valid then return
    if(!valid) {
        console.log(invalidResult);
        return invalidResult;
    }

    // Now replace the first part of the string so that we're left with the list text
    let regex2 = /^\s*[1-9]+.\s+/
    let listText = markdown.replace(regex2, "");

    // Build up the result string
    result = "<li>" + listText + "</li>";

    console.log(result);

  return result;
}