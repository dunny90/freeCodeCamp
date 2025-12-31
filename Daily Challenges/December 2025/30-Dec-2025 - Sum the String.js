/*
Sum the String
Given a string containing digits and other characters, return the sum of all numbers in the string.

Treat consecutive digits as a single number. For example, "13" counts as 13, not 1 + 3.
Ignore any non-digit characters.
*/

stringSum("3apples2bananas")    // should return 5.
stringSum("10cats5dogs2birds")  // should return 17.
stringSum("125344")             // should return 125344.
stringSum("a1b20c300")          // should return 321.
stringSum("a12b34c56d78e90f123g456h789i0j1k2l3m4n5")    // should return 1653.

function stringSum(str) {

    // Regex to find any digits - use global to find all instances
    let regex = /\d+/g

    // Use match to return an array of matches
    let arr = str.match(regex);

    let sum = 0;

    // Loop through the array and sum the numbers
    for(let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }

    console.log(sum);

  return sum;
}