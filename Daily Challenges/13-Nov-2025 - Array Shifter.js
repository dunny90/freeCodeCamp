/*
Array Shift
Given an array and an integer representing how many positions to shift the array, return the shifted array.

A positive integer shifts the array to the left.
A negative integer shifts the array to the right.
The shift wraps around the array.
For example, given [1, 2, 3] and 1, shift the array 1 to the left, returning [2, 3, 1].
*/

shiftArray([1, 2, 3], 1)                                // should return [2, 3, 1].
shiftArray([1, 2, 3], -1)                               // should return [3, 1, 2].
shiftArray(["alpha", "bravo", "charlie"], 5)            // should return ["charlie", "alpha", "bravo"].
shiftArray(["alpha", "bravo", "charlie"], -11)          // should return ["bravo", "charlie", "alpha"].
shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15)          // should return [5, 6, 7, 8, 9, 0, 1, 2, 3, 4].

function shiftArray(arr, n) {

    // Create a temp copy of the array
    let tempArray = arr.slice();

    // Loop through the temp array
    for(let i = 0; i < tempArray.length; i++) {

        // If positive, shift left
        if(n > 0) {
            // Subtract n from i    
            let newPos = i - n;

            // If less than 0, mod the number by the length of the array to work out it's new position
            if(newPos < 0) {
                newPos = mod(newPos, tempArray.length);
            }
            
            // Place the item in it's new position in the original array
            arr[newPos] = tempArray[i];


        } else {
            // Shift right - subtracting a negative results in a positive
            let newPos = i - n;

            // Work out the new position using mod
            newPos = mod(newPos, tempArray.length);

            // Place the item in it's new position in the original array
            arr[newPos] = tempArray[i];

        }
    }

    console.log(arr);

  return arr;
}

// Function to mod n of m. Works with negative numbers
function mod(n, m) {
  return ((n % m) + m) % m;
}