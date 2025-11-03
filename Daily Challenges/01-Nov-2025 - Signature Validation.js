/*
Signature Validation
Given a message string, a secret key string, and a signature number, determine if the signature is valid using this encoding method:

Letters in the message and secret key have these values:
a to z have values 1 to 26 respectively.
A to Z have values 27 to 52 respectively.
All other characters have no value.
Compute the signature by taking the sum of the message plus the sum of the secret key.
For example, given the message "foo" and the secret key "bar", the signature would be 57:

f (6) + o (15) + o (15) = 36
b (2) + a (1) + r (18) = 21
36 + 21 = 57
Check if the computed signature matches the provided signature.
*/

verify("foo", "bar", 57) // should return true.
verify("foo", "bar", 54) // should return false.
verify("freeCodeCamp", "Rocks", 238) // should return true.
verify("Is this valid?", "No", 210) // should return false.
verify("Is this valid?", "Yes", 233) // should return true.
verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514) // should return true.

function verify(message, key, signature) {
  
  // Compute the message sum
  let messageSum = checkString(message);
  // Compute the key sum
  let keySum = checkString(key);
  
  // Compute the signature by adding message & key sums
  let computedSignature = messageSum + keySum;
  
  // Return whether the computed signature matches the passed in signature
  return computedSignature == signature;
}

function checkString(string) {
  
  // To store the result
  let sum = 0;
  
  let lowerCharOffset = 96;  // To convert a-z from [97-122] to range of [1-26]
  let upperCharOffset = 38;  // To convert A-Z from [65-91] to range of [27-52] 
  
  // Loop through the characters in the string
  for(let charPos = 0; charPos < string.length; charPos++) {
    
    // Get the UTF-16 code for current character
    let charValue = string.charCodeAt(charPos);
    
    // Determine if current char is a-z or A-Z. Could have also used a regex for this
    if((charValue >= 97 && charValue <= 122) || (charValue >= 65 && charValue <= 91)) {
      // Determine if the string is lower case or upper case
      if(string[charPos] == string[charPos].toLowerCase()) {
        // Add to the sum, taking into account the offset needed to convert to desired range
        sum += charValue - lowerCharOffset;
      } else {
        // Add to the sum, taking into account the offset needed to convert to desired range
        sum += charValue - upperCharOffset;
      }
    }
    
  }
  
  return sum;
}
