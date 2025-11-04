/*
Implement Selection Sort
Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
*/

//selectionSort should be a function.
//selectionSort should return a sorted array (least to greatest).
selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) // should return an array that is unchanged except for order.
//selectionSort should not use the built-in .sort() method.

function selectionSort(array) {
  // Only change code below this line

  // Loop through the array
  for(let i = 0; i < array.length; i++) {
    
    // Find the index of the minimum value of the portion of the array we're searching
    let indexOfMin = findIndexOfMin(array, i);
    
    // Extract the current index value and the minimum value
    let a = array[i];
    let b = array[indexOfMin];
    
    // Swap the current index value with the minimum value
    array[i] = b;
    array[indexOfMin] = a;
    
  }
  
  return array;
  // Only change code above this line
}

function findIndexOfMin(array, startPos) {
  
  // To store the minimum value and index while iterating through the array
  let minValue;
  let minIndex;
  
  // Loop through the portion of the array we're analysing
  for(let i = startPos; i < array.length; i++) {
    // If the current array value is less than the last one we checked, store the index
    if(array[i] < minValue || minIndex == null) {
      minIndex = i;
      minValue = array[i];
    }
  }
  
  return minIndex;
}
