/*FizzBuzz
Given an integer (n), return an array of integers from 1 to n (inclusive), replacing numbers that are multiple of:

3 with "Fizz".
5 with "Buzz".
3 and 5 with "FizzBuzz".
*/

isFizzBuzz([1, 2, "Fizz", 4])       // should return true.
isFizzBuzz([1, 2, 3, 4])            // should return false.
isFizzBuzz([1, 2, "Fizz", 4, "Buzz", 7])    // should return false.
isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz"]) // should return false.
isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Fizz"])     // should return false.
isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Buzz"])     // should return false.
isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]) // should return true.

function isFizzBuzz(sequence) {

    // To store the result
    let valid = true;

    // Loop through each number up to sequence.length
    for(let i = 0; i < sequence.length; i++) {
        
        // If i + 1 divides by 3 with no remainder
        if((i+1) % 3 == 0) {

            // If i + 1 also divides by 5 with no remainder
            if ((i+1) % 5 == 0) {
                // Check if element is not FizzBuzz
                if(sequence[i] != "FizzBuzz") {
                    valid = false;
                }
            } else {
                // Only divides by 3 with no remainder, so check if element is not Fizz
                if(sequence[i] != "Fizz") {
                    valid = false;
                }
            }
        } else if ((i+1) % 5 == 0) {
            // Divides by 5 with no remainder, so check if element is not Buzz
            if(sequence[i] != "Buzz") {
                    valid = false;
                }
        } else {
            // Otherwise, check if element is equal to i + 1
            if(sequence[i] != i+1) {
                    valid = false;
            }
        }

    }

    console.log(valid);

  return valid;
}