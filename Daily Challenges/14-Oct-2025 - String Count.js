/*
String Count
Given two strings, determine how many times the second string appears in the first.

The pattern string can overlap in the first string. For example, "aaa" contains "aa" twice. The first two a's and the second two.
*/

count('abcdefg', 'def')                             // should return 1.
count('hello', 'world')                             // should return 0.
count('mississippi', 'iss')                         // should return 2.
count('she sells seashells by the seashore', 'sh')  // should return 3.
count('101010101010101010101', '101')               // should return 10.


function count(text, pattern) {
  
  // Keep track of how many instances of the pattern we've found
  let instanceCounter = 0; 
  
  // Loop until the pattern can no longer be found
  while (text.indexOf(pattern) != -1) {
    
    // Increment the counter
    instanceCounter ++;
    
    // Find the position of the first instance of the pattern
    let instanceStartPos = text.indexOf(pattern);
    
    // Set text variable to be the next character on from where the instance was found, so searching can continue
    text = text.substring(instanceStartPos+1);
  }
  
  return instanceCounter;
}
