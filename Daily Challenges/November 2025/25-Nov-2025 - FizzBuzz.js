/*FizzBuzz
Given an integer (n), return an array of integers from 1 to n (inclusive), replacing numbers that are multiple of:

3 with "Fizz".
5 with "Buzz".
3 and 5 with "FizzBuzz".
*/

fizzBuzz(2)     // should return [1, 2].
fizzBuzz(4)     // should return [1, 2, "Fizz", 4].
fizzBuzz(8)     // should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8].
fizzBuzz(20)    // should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"].
fizzBuzz(50)    // should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"].

function fizzBuzz(n) {

    // To store the results
    let array = [];

    // Loop through each number up to 'n'
    for(let i = 1; i <= n; i++) {
        
        // If i divides by 3 with no remainder
        if(i % 3 == 0) {

            // If i also divides by 5 with no remainder
            if (i % 5 == 0) {
                // Push FizzBuzz to the array
                array.push("FizzBuzz") 
            } else {
                // Only divides by 3 with no remainder, so add Fizz to the array
                array.push("Fizz");
            }
        } else if (i % 5 == 0) {
            // Divides by 5 with no remainder, so add Buzz to the array
            array.push("Buzz") 
        } else {
            // Otherwise, push i to the array
            array.push(i);
        }

    }

    console.log(array);

  return array;
}