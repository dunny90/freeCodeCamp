/*
Markdown Image Parser
Given a string of an image in Markdown, return the equivalent HTML string.

A Markdown image has the following format: "![alt text](image_url)". Where:

alt text is the description of the image (the alt attribute value).
image_url is the source URL of the image (the src attribute value).
Return a string of the HTML img tag with the src set to the image URL and the alt set to the alt text.

For example, given "![Cute cat](cat.png)" return '<img src="cat.png" alt="Cute cat">';

Make sure the tag, order of attributes, spacing, and quote usage is the same as above.
Note: The console may not display HTML tags in strings when logging messages — check the browser console to see logs with tags included.
*/
parseImage("![Cute cat](cat.png)")                                                      // should return '<img src="cat.png" alt="Cute cat">'.
parseImage("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)")  // should return '<img src="https://freecodecamp.org/cdn/rocket-ship.jpg" alt="Rocket Ship">'.
parseImage("![Cute cats!](https://freecodecamp.org/cats.jpeg)")             // should return '<img src="https://freecodecamp.org/cats.jpeg" alt="Cute cats!">'.

function parseImage(markdown) {

    // Extrract the alt text
    let altText = markdown.substring(markdown.indexOf("[") + 1, markdown.indexOf("]"));
    // Extract the URL
    let imageURL = markdown.substring(markdown.indexOf("(") + 1, markdown.indexOf(")"));

    // Construct the HTML result
    let result = "<img src=\"" + imageURL + "\" alt=\"" + altText + "\">";

    console.log(result);

  return result;
}