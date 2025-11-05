/*
Matrix Builder
Given two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (0) of the given size.

For example, given 2 and 3, return:

[
  [0, 0, 0],
  [0, 0, 0]
]
*/

buildMatrix(2, 3) // should return [[0, 0, 0], [0, 0, 0]].
buildMatrix(3, 2) // should return [[0, 0], [0, 0], [0, 0]].
buildMatrix(4, 3) // should return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]].
buildMatrix(9, 1) // should return [[0], [0], [0], [0], [0], [0], [0], [0], [0]].

function buildMatrix(rows, cols) {
  
  // To store the resultant matrix
  let matrix = [];
  
  // Generate a row array with the number of columns required
  let rowArray = generateArray(cols);
  
  // Now loop through the number of rows required and push the row array to the matrix
  for(let row = 0; row < rows; row++) {
    matrix.push(rowArray);
  }
  
  return matrix;
}

// Function to return an array containing a specified number of elements containing '0'
function generateArray(numZeros) {
  
  // Array to store zeros
  let itemArray = [];
  
  // Loop through the number of zeros required
  for(let i = 0; i < numZeros; i++) {
    // Push a zero to the array
    itemArray.push(0); 
  }
  
  return itemArray;
  
}
