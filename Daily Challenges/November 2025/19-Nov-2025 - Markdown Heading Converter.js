/*
Markdown Heading Converter
Given a string representing a Markdown heading, return the equivalent HTML heading.

A valid Markdown heading must:

Start with zero or more spaces, followed by
1 to 6 hash characters (#) in a row, then
At least one space. And finally,
The heading text.
The number of hash symbols determines the heading level. For example, one hash symbol corresponds to an h1 tag, and six hash symbols correspond to an h6 tag.

If the given string doesn't have the exact format above, return "Invalid format".

For example, given "# My level 1 heading", return "<h1>My level 1 heading</h1>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.
*/

convert("# My level 1 heading")         // should return "<h1>My level 1 heading</h1>".
convert("My heading")                   // should return "Invalid format".
convert("##### My level 5 heading")     // should return "<h5>My level 5 heading</h5>".
convert("#My heading")                  // should return "Invalid format".
convert("  ###  My level 3 heading")    // should return "<h3>My level 3 heading</h3>".
convert("####### My level 7 heading")   // should return "Invalid format".
convert("## My #2 heading")             // should return "<h2>My #2 heading</h2>".


function convert(heading) {

    // Keep track of whether the rules have passsed
    let rulesValidated = true;
    let resultString = "";

    // Check at least one '#' exists in the heading
    let hashPosition = heading.indexOf("#");
    // Start the hash counter at 1
    let hashCounter = 1;

    // If no hashes exist then invalidate the rules boolean
    if(hashPosition < 0) {
        rulesValidated = false;
    }

    // If the heading passed the first rule, proceed to parse the string
    if(rulesValidated) {

        // Loop through the heading string, starting from the hash position plus 1
        for(let i = hashPosition+1; i < heading.length; i++) {
            // While the subsequent characters are hashes, increment the counter
            if(heading[i] == "#") {
                hashCounter++;
                
                // If the number of hashes exceeds 6 then the heading is invalid
                if(hashCounter > 6) {
                    resultString = "Invalid format";
                    break;
                }  
            } else {
                // If the next character isn't a has then check if it's a space
                if(heading[i] != " ") {
                    // If it's not a space then it's an invalid format
                    resultString = "Invalid format";
                } else {
                    // If it is a space then it's a valid format. Now extract the heading text and form the HTML
                    resultString = "<h" + hashCounter + ">" + heading.substring(i).trim() + "</h" + hashCounter + ">";
                }

                // Break from the loop as the processing is done
                break;
            }
        }

    }

    // If any of the rules have not passed then set the result string accordingly
    if(!rulesValidated) {
        resultString = "Invalid format";
    }

    console.log(resultString);

  return resultString;
}