/*
Integer Sequence
Given a positive integer, return a string with all of the integers from 1 up to, and including, the given number, in numerical order.

For example, given 5, return "12345".
*/

sequence(5)     // should return "12345".
sequence(10)    // should return "12345678910".
sequence(1)     // should return "1".
sequence(27)    // should return "123456789101112131415161718192021222324252627".

function sequence(n) {
  
  // To store the result
  let resultString = "";
  
  // Loop through the numbers up to and including 'n'
  for(let i = 1; i <= n; i++) {
    // Append 'i' to the resultString
    resultString += i;
  }
  // Return the resultString
  return resultString;
}
