/*
HTML Tag Stripper
Given a string of HTML code, remove the tags and return the plain text content.

The input string will contain only valid HTML.
HTML tags may be nested.
Remove the tags and any attributes.
For example, '<a href="#">Click here</a>' should return "Click here".
*/

stripTags('<a href="#">Click here</a>') // should return "Click here".
stripTags('<p class="center">Hello <b>World</b>!</p>') // should return "Hello World!".
stripTags('<img src="cat.jpg" alt="Cat">') // should return an empty string ("").
stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>') // should return sectionsection.

function stripTags(html) {

  // Loop until no more tags are found
  while(html.indexOf("<") != -1) {
    
    // Find and replace the next tag
    html = findAndReplaceNextTax(html) 
  }
  // Return the replaced html string
  return html;
}

function findAndReplaceNextTax(html) {
  
  // Find the position of the next opening angled bracket
  let startPos = html.indexOf("<");
  // Find the position of the next closing angled bracket. Add 1 as we want to include this when we replace
  let endPos = html.indexOf(">")+1;
  
  // Identify the full tag to replace using the positions we've just worked out
  let tagToRemove = html.substring(startPos, endPos);
  
  // Replace the tag with empty string and return the html
  return html.replace(tagToRemove, "");
  
}
