/*
Markdown Bold Parser
Given a string that may include some bold text in Markdown, return the equivalent HTML string.

Bold text in Markdown is any text that starts and ends with two asterisks (**) or two underscores (__).
There cannot be any spaces between the text and the asterisks or underscores, but there can be spaces in the text itself.
Convert all bold occurrences to HTML b tags and return the string.
For example, given "**This is bold**", return "<b>This is bold</b>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.
*/

parseBold("**This is bold**")       // should return "<b>This is bold</b>".
parseBold("__This is also bold__")  // should return "<b>This is also bold</b>".
parseBold("**This is not bold **")  // should return "**This is not bold **".
parseBold("__ This is also not bold__") // should return "__ This is also not bold__".
parseBold("The **quick** brown fox __jumps__ over the **lazy** dog.") // should return "The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog.".

function parseBold(markdown) {

    // Regex to determine if the markdown string matches the required format
    let regex = /^(([a-zA-Z\s\.])*((\*\*|\_\_)[a-zA-Z])[a-zA-Z\s]+([a-zA-Z](\*\*|\_\_))([a-zA-Z\s\.])*)+/

    // Test the string to see if it matches
    let matched = regex.test(markdown);

    if(matched) {

        // To keep track of which tag is needed for the replace
        let counter = 1;

        // While there are asterisks to replace, continue to loop
        while(markdown.indexOf("**") != -1) {

            // Even, so needs a closing tag
            if(counter % 2 == 0) {
                markdown = markdown.replace("**", "</b>");
            } else {
                // Odd so needs an opening tag
                markdown = markdown.replace("**", "<b>");
            }
            
            counter++;

        }

        // Reset the counter and repeat for underscores
        counter = 1;

        // Continue to loop until all double underscores are replaced
        while(markdown.indexOf("__") != -1) {

            // Even, so needs a closing tag
            if(counter % 2 == 0) {
                markdown = markdown.replace("__", "</b>");
            } else {
                // Odd so needs an opening tag
                markdown = markdown.replace("__", "<b>");
            }
            
            counter++;

        }
    }

    console.log(markdown);

    return markdown;

}