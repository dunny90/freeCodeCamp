/*
Consonant Count
Given a string and a target number, determine whether the string contains exactly the target number of consonants.

Consonants are all alphabetic characters except "a", "e", "i", "o", and "u" in any case.
Ignore digits, punctuation, spaces, and other non-letter characters when counting.
*/

hasConsonantCount("helloworld", 7)  // should return true.
hasConsonantCount("eieio", 5)       // should return false.
hasConsonantCount("freeCodeCamp Rocks!", 11)    // should return true.
hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24)   // should return false.
hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 23)   // should return true.

function hasConsonantCount(text, target) {

    // Strip out the non-alpha characters
    let alphaText = text.replace(/[^a-z]/gi, "");
    // Strip out all of the characters that aren't vowels, i.e. the consonants
    let vowelText = text.replace(/[^aeiou]/gi, "");

    // Determine consonants by checking difference in length between overall alpha characters and vowel characters
    let consonantCount = alphaText.length - vowelText.length;

    console.log(consonantCount);

  return consonantCount == target;
}