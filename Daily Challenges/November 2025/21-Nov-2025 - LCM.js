/*
LCM
Given two integers, return the least common multiple (LCM) of the two numbers.

The LCM of two numbers is the smallest positive integer that is a multiple of both numbers. For example, given 4 and 6, return 12 because:

Multiples of 4 are 4, 8, 12 and so on.
Multiples of 6 are 6, 12, 18 and so on.
12 is the smallest number that is a multiple of both.
*/

lcm(4, 6)       // should return 12.
lcm(9, 6)       // should return 18.
lcm(10, 100)    // should return 100.
lcm(13, 17)     // should return 221.
lcm(45, 70)     // should return 630.

function lcm(a, b) {

    // Work out the smallest number - we may as well start checking from this point onwards
    let smallestNumber = (a < b) ? a : b;

    // Exit condition for the loop
    let LCMFound = false;
    let LCM = 0;

    // Start checking from the smallest number upwards
    let i = smallestNumber;

    // While the LCM hasn't been found, keeo checking
    while(!LCMFound) {
        
        // If i divides by a, leaving no remainder
        if((i/a) % 1 == 0) {

            // If i divides by b, leaving no remainder
            if((i/b) % 1 == 0) {
                // LCM has been found, so set exit condition to true and store the LCM
                LCMFound = true;
                LCM = i;
            }
        }

        // Incrememnt i ready for the next iteration
        i++;
    
    }

    console.log("LCM: " + LCM);

  return LCM;
}
