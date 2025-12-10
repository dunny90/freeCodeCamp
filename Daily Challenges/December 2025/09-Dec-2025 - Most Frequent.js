/*
Most Frequent
Given an array of elements, return the element that appears most frequently.

There will always be a single most frequent element.
*/

mostFrequent(["a", "b", "a", "c"])                  // should return "a".
mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9])        // should return 2.
mostFrequent([true, false, "false", "true", false]) // should return false.
mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]) // should return 40.

function mostFrequent(arr) {

    // Create a set to get the unique values
    let set = new Set(arr);
    let maxOccurences = 0;
    let returnValue = "";

    // Iterate through the unique values
    set.forEach(value => {
        // Filter the array on the unique value and get the length of the return array
        let occurences = arr.filter(v => v === value).length;

        // If the occurances is greater than the last max, store the value and occurances
        if(occurences > maxOccurences) {
            returnValue = value;
            maxOccurences = occurences;
        }
    });

    console.log(returnValue);
  return returnValue;
}