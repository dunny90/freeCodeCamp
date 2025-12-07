/*
Permutation Count
Given a string, return the number of distinct permutations that can be formed from its characters.

A permutation is any reordering of the characters in the string.
Do not count duplicate permutations.
If the string contains repeated characters, repeated arrangements should only be counted once.
The string will contain only letters (A-Z, a-z).
For example, given "abb", return 3 because there's three unique ways to arrange the letters: "abb", "bab", and "bba".
*/

countPermutations("abb")        // should return 3.
countPermutations("abc")        // should return 6.
countPermutations("racecar")    // should return 630.
countPermutations("freecodecamp") // should return 39916800.

function countPermutations(str) {

    // To work out the number of permutations without considering durplicates,
    // we need to calculate the factorial of the string length and then divide this
    // by the product of the factorial of each occurance of each character

    let n = str.length;

    // Firstly work out the factorial of the string length
    let factorial = calcFactorial(n);

    // Split the string into an array so we can filter to find occurances
    let array = str.split("");
    // Array to store each character and occurance count
    let occuranceArray = [];
    
    // Iterate through each character in the array after converting to a set
    // Converting to a set makes this more efficient as this will remove duplicates
    Array.from(new Set(array)).forEach(character => {
        // Filter the array using the current character from the set
        let occurances = array.filter(c => c === character);

        // Push the character and occurance count to the occurance tracking array
        occuranceArray.push([character, occurances.length]);
    })
    
    // We now need to work out the factorial of each occurance count of each character
    let oFactorialProduct = 1;

    // Loop through the characters and occurances
    for(let i = 0; i < occuranceArray.length; i++) {
        // Calculate the factorial of each occurance count
        let oFactorial = calcFactorial(occuranceArray[i][1]);

        // Calculate the product of each occurance factorial
        oFactorialProduct *= oFactorial;
    }

    // The result is the string length factorial divided by the product of the occurance factorials
    let result = factorial / oFactorialProduct;

    console.log(result);

    return result;
}

// Recursive function to calculate factorial
function calcFactorial(n) {
    // Base case
    if(n == 0 || n == 1) {
        return 1;
    } else {
        // Recurse for n-1
        return n * calcFactorial(n-1);
    }
}