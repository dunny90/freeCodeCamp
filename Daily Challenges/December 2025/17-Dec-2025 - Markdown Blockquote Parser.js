/*
Markdown Blockquote Parser
Given a string that includes a blockquote in Markdown, return the equivalent HTML string.

A blockquote in Markdown is any line that:

Starts with zero or more spaces
Followed by a greater-than sign (>)
Then, one or more spaces
And finally, the blockquote text.
Return the blockquote text surrounded by opening and closing HTML blockquote tags.

For example, given "> This is a quote", return <blockquote>This is a quote</blockquote>.

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.
*/
parseBlockquote("> This is a quote")        // should return "<blockquote>This is a quote</blockquote>".
parseBlockquote(" > This is also a quote")  // should return "<blockquote>This is also a quote</blockquote>".
parseBlockquote("  >    So  Is  This")      // should return "<blockquote>So  Is  This</blockquote>".

function parseBlockquote(markdown) {

    // Check whether the string matches the rules
    let regex = /\s*>\s+[a-z]*/i

    let matched = regex.test(markdown);
    let result = "";

    // If matched, construct the result by replacing the > and any leading or trailing whitespace
    if(matched) {
        result = "<blockquote>" + markdown.replace(">", "").trim() + "</blockquote>";

        console.log(result);    
    }

  return result;
}