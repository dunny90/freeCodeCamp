/*
Markdown Italic Parser
Given a string that may include some italic text in Markdown, return the equivalent HTML string.

Italic text in Markdown is any text that starts and ends with a single asterisk (*) or a single underscore (_).
There cannot be any spaces between the text and the asterisk or underscore, but there can be spaces in the text itself.
Convert all italic occurrences to HTML i tags and return the string.
For example, given "*This is italic*", return "<i>This is italic</i>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.
*/

parseItalics("*This is italic*")         // should return "<i>This is italic</i>".
parseItalics("_This is also italic_")    // should return "<i>This is also italic</i>".
parseItalics("*This is not italic *")    // should return "*This is not italic *".
parseItalics("_ This is also not italic_")   // should return "_ This is also not italic_".
parseItalics("The *quick* brown fox _jumps_ over the *lazy* dog.")   // should return "The <i>quick</i> brown fox <i>jumps</i> over the <i>lazy</i> dog.".


// Re-used solution from 10th December for bold parser. Enhanced by creating function for replacing the characters with tags.
function parseItalics(markdown) {

    // Regex to determine if the markdown string matches the required format
    let regex = /^(([a-zA-Z\s\.])*((\*|\_)[a-zA-Z])[a-zA-Z\s]+([a-zA-Z](\*|\_))([a-zA-Z\s\.])*)+/

    // Test the string to see if it matches
    let matched = regex.test(markdown);

    if(matched) {

        // Replace the asterisks with itallic tag
        markdown = replaceCharWithTag(markdown, "*", "i")
        // Replace the underscores with itallic tags
        markdown = replaceCharWithTag(markdown, "_", "i")
        
    }

    console.log(markdown);

  return markdown;
}

function replaceCharWithTag(markdown, char, tag) {

    // Counter so that we know whether tag should be opening or closing
    let counter = 1;

    // Continue to loop until all characters are replaced
    while(markdown.indexOf(char) != -1) {

        // Even, so needs a closing tag
        if(counter % 2 == 0) {
            markdown = markdown.replace(char, "</" + tag + ">");
        } else {
            // Odd so needs an opening tag
            markdown = markdown.replace(char, "<" + tag + ">");
        }
        
        counter++;

    }

    return markdown;
}