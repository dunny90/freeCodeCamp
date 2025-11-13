/*
Word Search
Given a matrix (an array of arrays) of single letters and a word to find, return the start and end indices of the word in the matrix.

The given matrix will be filled with all lowercase letters (a-z).
The word to find will always be in the matrix exactly once.
The word to find will always be in a straight line in one of these directions:
left to right
right to left
top to bottom
bottom to top
For example, given the matrix:

[
  ["a", "c", "t"],
  ["t", "a", "t"],
  ["c", "t", "c"]
]
And the word "cat", return:

[[0, 1], [2, 1]]
Where [0, 1] are the indices for the "c" (start of the word), and [2, 1] are the indices for the "t" (end of the word).
*/

findWord([["a", "c", "t"], 
          ["t", "a", "t"], 
          ["c", "t", "c"]], "cat") // should return [[0, 1], [2, 1]].

findWord([["d", "o", "g"], 
          ["o", "g", "d"], 
          ["d", "g", "o"]], "dog") // should return [[0, 0], [0, 2]].

findWord([["h", "i", "s", "h"], 
          ["i", "s", "f", "s"], 
          ["f", "s", "i", "i"], 
          ["s", "h", "i", "f"]], "fish") // should return [[3, 3], [0, 3]].


findWord([["f", "x", "o", "x"], 
          ["o", "x", "o", "f"], 
          ["f", "o", "f", "x"], 
          ["f", "x", "x", "o"]], "fox") // should return [[1, 3], [1, 1]].

function findWord(matrix, word) {
  
  // Store how many rows and columns the matrix has
  let matrixRows = matrix.length;
  let matrixColumns = matrix[0].length;
  // Arrays to store our return indecis
  let returnMatrix = [];
  let returnStart = [];
  let returnEnd = [];
  
  
  
  // Only check the horizontals if the word we're searching for is less than or equal to the number of letters (columns) in the row
  if(word.length <= matrixColumns) {
    
    for(let i = 0; i < matrixRows; i++) {
      // Join the string so we can search it using indexOf()
      let forwardRow = matrix[i].join("");
      // Create a reversed version so we can check in the opposite direction. Slice first so not mutated
      let reverseRow = matrix[i].slice().reverse().join("");
      
      // If the forward row contains the word
      if(forwardRow.indexOf(word) >= 0) {    
        
        // Log the indecis of the start and end of the word
        returnStart = [i, forwardRow.indexOf(word)];
        returnEnd = [i, forwardRow.indexOf(word) + word.length -1];
        
        // Add these indecis to the return matrix
        returnMatrix.push(returnStart);
        returnMatrix.push(returnEnd);
        break;
      }
      
      // If the reverse row contains the word      
      if(reverseRow.indexOf(word) >= 0) {
       
        // Log the indecis of the start and end of the word, starting at the end of the forward row
        returnStart = [i, forwardRow.length - reverseRow.indexOf(word) -1];
        returnEnd = [i, forwardRow.length - word.length];
        
        // Add these indecis to the return matrix
        returnMatrix.push(returnStart);
        returnMatrix.push(returnEnd);
      }
      
    }    
    
  } 
  
  // Only check the verticals if the word we're searching for is less than or equal to the number of rows
  if(word.length <= matrixRows) {
    
    // Loop through the columns
    for(let col = 0; col < matrixColumns; col++) {
      
      let forwardColumn = "";
      
      // Loop through the rows and extract the string
      for(let row = 0; row < matrixRows; row++) {
        forwardColumn += matrix[row][col];    
      }
      
      // Check whether the column contains the word
      if(forwardColumn.indexOf(word) >= 0) {
        
        // Log the indecis of the start and end of the word
        returnStart = [forwardColumn.indexOf(word), col];
        returnEnd = [forwardColumn.indexOf(word) + word.length -1, col];
        
        // Add these indecis to the return matrix
        returnMatrix.push(returnStart);
        returnMatrix.push(returnEnd);
        
        break;
      }
      
      // Split the forward column into an array so we can reverse it
      let columnArray = forwardColumn.split("");
      let reverseColumn = columnArray.reverse().join("");
      
      // If the reverse column contains the word
      if(reverseColumn.indexOf(word) >= 0) {

        // Log the indecis of the start and end of the word, starting at the end of the opposite end
        returnStart = [reverseColumn.indexOf(word) + word.length -1, col];
        returnEnd = [reverseColumn.indexOf(word), col];
        
        // Add these indecis to the return matrix
        returnMatrix.push(returnStart);
        returnMatrix.push(returnEnd);
        
        return returnMatrix;
        break;
      }
    }
  } 
  
  return returnMatrix;
}
