/*
Purge Most Frequent
Given an array of values, remove all occurrences of the most frequently occurring element and return the resulting array.

If multiple values are tied for most frequent, remove all of them.
Do not change any of the other elements or their order.
*/
purgeMostFrequent([1, 2, 2, 3])     // should return [1, 3].
purgeMostFrequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"]) // should return ["a", "b", "b", "c", "c", "c"].
purgeMostFrequent(["red", "blue", "green", "red", "blue", "green", "blue"]) // should return ["red", "green", "red", "green"].
purgeMostFrequent([5, 5, 5, 5]) // should return [].

function purgeMostFrequent(arr) {

    // Find the most frequent item - re-used code from 9th Dec challenge
    let mostFrequentValue = mostFrequent(arr);
    let result = [];

    // Loop through the array and push any instances that aren't the most frequent to result array
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != mostFrequentValue) {
            result.push(arr[i]);
        }
    }

    console.log(result);

  return result;
}

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

  return returnValue;
}