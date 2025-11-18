/*
Fingerprint Test
Given two strings representing fingerprints, determine if they are a match using the following rules:

Each fingerprint will consist only of lowercase letters (a-z).
Two fingerprints are considered a match if:
They are the same length.
The number of differing characters does not exceed 10% of the fingerprint length.
*/

isMatch("helloworld", "helloworld")     // should return true.
isMatch("helloworld", "helloworlds")    // should return false.
isMatch("helloworld", "jelloworld")     // should return true.
isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog") // should return true.
isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog") // should return true.
isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat") // should return false.

function isMatch(fingerprintA, fingerprintB) {

    // To count the mismatches
    let mismatchCounter = 0;
    // To store the result
    let result = true;

    // If the fingerprints aren't the same length then return false
    if (fingerprintA.length != fingerprintB.length) {
        result = false;
    }
    
    // Work out the 10% threshold
    let percentThreshold = fingerprintA.length * 0.1;

    // Loop through the characters in the fingerprints and check if they match
    for(let i = 0; i < fingerprintA.length; i++) {
        if(fingerprintA[i] != fingerprintB[i]) {
            // Increment the mismstch counter if they don't match
            mismatchCounter++;
        }
    }

    // If the number of mismatches are over the threshold then return false
    if(mismatchCounter > percentThreshold) {
        result = false;
    }

  return result;
}