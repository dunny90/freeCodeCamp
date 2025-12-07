/*
Symmetric Difference
Given two arrays, return a new array containing the symmetric difference of them.

The symmetric difference between two sets is the set of values that appear in either set, but not both.
Return the values in the order they first appear in the input arrays.
*/

difference([1, 2, 3], [3, 4, 5])    // should return [1, 2, 4, 5].
difference(["a", "b"], ["c", "b"])  // should return ["a", "c"].
difference([1, "a", 2], [2, "b", "a"]) // should return [1, "b"].
difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]) // should return [2, 4, 6, 8].

function difference(arr1, arr2) {

    // Convert the arrays to sets
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);

    // Use the symmetricDifference function to get the results and convert to an array
    let result = Array.from(set1.symmetricDifference(set2));
    console.log(result);

  return result;
}