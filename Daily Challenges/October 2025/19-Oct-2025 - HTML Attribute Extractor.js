/*
HTML Attribute Extractor
Given a string of a valid HTML element, return the attributes of the element using the following criteria:

You will only be given one element.
Attributes will be in the format: attribute="value".
Return an array of strings with each attribute property and value, separated by a comma, in this format: ["attribute1, value1", "attribute2, value2"].
Return attributes in the order they are given.
If no attributes are found, return an empty array.
*/

extractAttributes('<span class="red"></span>') // should return ["class, red"].
extractAttributes('<meta charset="UTF-8" />')  // should return ["charset, UTF-8"].
extractAttributes("<p>Lorem ipsum dolor sit amet</p>") // should return [].
extractAttributes('<input name="email" type="email" required="true" />') // should return ["name, email", "type, email", "required, true"].
extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>') // should return ["id, submit", "class, btn btn-primary"].

function extractAttributes(element) {
  
  // Array to store results
  let attributeArray = [];
  
  // Store the current attribute being processed
  let attribute = "";
  
  // Loop through until there are no more double quotes in the element string
  while(element.indexOf("\"") > 0) {
    
    // Extract the next element
    attribute = findNextAttribute(element);
    // Add it to the results array
    attributeArray.push(attribute);
    
    // Find the end of the element by finding the closing double quote
    let endOfElement = findNthInstance(element, "\"", 2);
    
    // Remove the current element from the string and loop back around to process the next
    element = element.substring(endOfElement+1);

  }
    
  return attributeArray;
}

function findNextAttribute(element) {
  
  // Find the first equals to mark the end of the attribute name
  let endPos = element.indexOf("=");
  
  // Create a temporary variable from the start of the string to the end position
  let tempString = element.substring(0, endPos);
  
  // Now use lastIndexOf() to find the last space, to mark the start of the attribute name
  // Using lastIndexOf() to allow for multiple whitespace leading up to attribute name
  let startPos = tempString.lastIndexOf(" ") + 1;
  
  // Extract the attribute name
  let attributeName = element.substring(startPos, endPos);
  
  // Find the index of the closing ", by starting the search after the attribute name
  let attributeValue = element.substring(endPos+2, element.indexOf("\"", endPos+2))
  
  return attributeName + ", " + attributeValue;
}

function findNthInstance(string, value, instanceNumber) {
  
  let index = 0;
  // Loop through to find the nth instance of a value in the string and return the index
  for(let i = 0; i < instanceNumber; i++) {
    index = string.indexOf(value, index + 1);
  }
  return index;
}
