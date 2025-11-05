/*
Implement Insertion Sort
The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
*/

// insertionSort should be a function.
// insertionSort should return a sorted array (least to greatest).
insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) // should return an array that is unchanged except for order.
insertionSort([5, 4, 33, 2, 8]) // should return [2, 4, 5, 8, 33].
// insertionSort should not use the built-in .sort() method.

function insertionSort(array) {
  // Only change code below this line
  
  for(let i = 1; i < array.length; i++) {

    // Extract the current element and the previous element
    let curr = array[i];
    let prev = array[i-1];
    
    // If the current element is less than the previous element, we'll need to sort
    if(curr < prev) {

      // Loop through the sorted elements backwards and swap if smaller
      for(let j = i; j > 0; j--) {

        // Extract the current sorted element we are comparing the current value with
        let currSorted = array[j-1];
        
        // If the current value is smaller than the current sorted element
        if(curr < currSorted) {
          // Swap the values
          array[j] = currSorted;
          array[j-1] = curr;

        } else {
          // If the current value is not smaller than the current sorted element, we can break as it is now in position
          break;
        }        
      }
    }
  }
  
  return array;
  // Only change code above this line
}
