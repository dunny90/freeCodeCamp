/*
GCD
Given two positive integers, return their greatest common divisor (GCD).

The GCD of two integers is the largest number that divides evenly into both numbers without leaving a remainder.
For example, the divisors of 4 are 1, 2, and 4. The divisors of 6 are 1, 2, 3, and 6. So given 4 and 6, return 2, the largest number that appears in both sets of divisors.
*/

gcd(4, 6)       // should return 2.
gcd(20, 15)     // should return 5.
gcd(13, 17)     // should return 1.
gcd(654, 456)   // should return 6.
gcd(3456, 4320) // should return 864.

function gcd(x, y) {

    // Euclidean Algorithm
    // 1. Divide the larger number by the smaller number and find the remainder.
    // 2. Replace the larger number with the smaller number and the smaller number with the remainder.
    // 3. Repeat this process until the remainder is 0. The GCD is the last non-zero remainder.
    
    // To store the result
    let greatestCommonDivisor = 0;

    // Work out which is the largest and smallest
    let largestValue = (x < y) ? y : x;
    let smallestValue = (x > y) ? y : x;

    let remainder = 1;
    let a = 0;

    // Divide the largest by the smallest and work out the remainder
    a = largestValue / smallestValue;
    remainder = (a - Math.floor(a)) * smallestValue;
    remainder = Math.round(remainder);
    
    // While the remainder is not equal to zero
    while(remainder != 0) {

        // Largest value becomes the smallest value
        largestValue = smallestValue;
        // Smallest value becomes last remainder
        smallestValue = remainder;

        // Divide the largest by the smallest and work out the remainder
        a = largestValue / smallestValue;
        remainder = (a - Math.floor(a)) * smallestValue;
        remainder = Math.round(remainder);

    }
    
    // Once the loop has finished, store the result
    greatestCommonDivisor = smallestValue;


    console.log(greatestCommonDivisor);

    return greatestCommonDivisor;
}