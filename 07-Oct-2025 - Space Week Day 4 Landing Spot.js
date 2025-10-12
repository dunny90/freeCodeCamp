/*Space Week Day 4: Landing Spot
In day four of Space Week, you are given a matrix of numbers (an array of arrays), representing potential landing spots for your rover. Find the safest landing spot based on the following rules:

Each spot in the matrix will contain a number from 0-9, inclusive.
Any 0 represents a potential landing spot.
Any number other than 0 is too dangerous to land. The higher the number, the more dangerous.
The safest spot is defined as the 0 cell whose surrounding cells (up to 4 neighbors, ignore diagonals) have the lowest total danger.
Ignore out-of-bounds neighbors (corners and edges just have fewer neighbors).
Return the indices of the safest landing spot. There will always only be one safest spot.
For instance, given:

[
  [1, 0],
  [2, 0]
]
Return [0, 1], the indices for the 0 in the first array.
*/


findLandingSpot([[1, 0], [2, 0]])                                            // should return [0, 1].
findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]])                           // should return [1, 1].
findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]])                           // should return [2, 2].
findLandingSpot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]])    // should return [2, 1].

function findLandingSpot(matrix) {
  
  // To keep track of best position found
  let bestPositionFound = 0;
  // To keep track of the best position indices
  let landingIndex = [];
  
  // Loop through the arrays
  for(let arrayIndex = 0; arrayIndex < matrix.length; arrayIndex++) {
    
    // Loop through each landing position in the current array
    for(let valueIndex = 0; valueIndex < matrix[arrayIndex].length; valueIndex++) {
      
      // Check if it's a potential landing spot
      let potentialLandingSpot = (matrix[arrayIndex][valueIndex] == 0);
      
      if(potentialLandingSpot) {
        // Work out the value of the spot based on neighbours
        valueOfSpot = findNeighbours(matrix, arrayIndex, valueIndex);
        
        // If this landing spot is the best yet, record it
        if(valueOfSpot < bestPositionFound || bestPositionFound == 0) {
          bestPositionFound = valueOfSpot;
          landingIndex = [arrayIndex, valueIndex];
        }
      }
      
    }
    
  }

  return landingIndex;
}

function findNeighbours(matrix, arrayIndex, valueIndex) {
  
  let sumOfNeighbours = 0;
  let x;
  let y;
  
  // There are 4 conditions to check for neighbours:
  // Row before
  // Row after
  // Same row, to the left
  // Same row, to the right
  for(let i = 1; i <= 4; i++) {
    
    switch(i) {
      case 1:
        x = arrayIndex-1;
        y = valueIndex;
        break;        
      case 2:
        x = arrayIndex+1;
        y = valueIndex;
        break;
      case 3:
        x = arrayIndex;
        y = valueIndex-1;
        break;
      case 4:
        x = arrayIndex;
        y = valueIndex+1;
        break;
    }
    
    // Using try catch as not all indices will be valid
    try {
      // Checking if NaN first to ensure sumOfNeighbours doesn't become NaN...even if exception thrown
      if(!isNaN(matrix[x][y])) {
        sumOfNeighbours += matrix[x][y];
      }
    } catch (err) {
      // Invalid neighbour...move on and try next one
    }
       
  }
  
  return sumOfNeighbours;
}