/*
Sum of Divisors
Given a positive integer, return the sum of all its divisors.

A divisor is any integer that divides the number evenly (the remainder is 0).
Only count each divisor once.
For example, given 6, return 12 because the divisors of 6 are 1, 2, 3, and 6, and the sum of those is 12.
*/
sumDivisors(6)      // should return 12.
sumDivisors(13)     // should return 14.
sumDivisors(28)     // should return 56.
sumDivisors(84)     // should return 224.
sumDivisors(549)    // should return 806.
sumDivisors(9348)   // should return 23520.

function sumDivisors(n) {

    // Start at 1 plus the value of n as everything divides by 1 and itself
    let sum = 1 + n;

    // Check each value up to n
    for(let i = 2; i < n; i++) {
        // Check if the remainder is 0
        if(n % i ==0) {
            // Add to sum
            sum += i;
        }
    }

    console.log(sum);

  return sum;
}