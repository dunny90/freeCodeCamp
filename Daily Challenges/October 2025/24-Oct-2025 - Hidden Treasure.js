/*
Hidden Treasure
Given a 2D array representing a map of the ocean floor that includes a hidden treasure, and an array with the coordinates ([row, column]) for the next dive of your treasure search, return "Empty", "Found", or "Recovered" using the following rules:

The given 2D array will contain exactly one unrecovered treasure, which will occupy multiple cells.

Each cell in the 2D array will contain one of the following values:

"-": No treasure.
"O": A part of the treasure that has not been found.
"X": A part of the treasure that has already been found.

If the dive location has no treasure, return "Empty".

If the dive location finds treasure, but at least one other part of the treasure remains unfound, return "Found".

If the dive location finds the last unfound part of the treasure, return "Recovered".

For example, given:

[
  [ "-", "X"],
  [ "-", "X"],
  [ "-", "O"]
]
And [2, 1] for the coordinates of the dive location, return "Recovered" because the dive found the last unfound part of the treasure.
*/

dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]) // should return "Recovered".
dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0]) // should return "Empty".
dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1]) // should return "Found".
dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2]) // should return "Found".
dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0]) // should return "Recovered".
dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2]) // should return "Empty".

function dive(map, coordinates) {
  
  // Keep track of how many O's are found
  let oCount = 0;
  
  // Extract the first coordinate
  let x = coordinates[0];
  // Extraxt the second coordinate
  let y = coordinates[1];
  // Create a coordinate string, so we don't re-check the same coordinates within the loop
  let xYString = "" + x + y;
  // Create a default result
  let result = "Empty";

  // Extract the dive location value
  let diveLocationValue = map[x][y];
  
  // Loop through the 2D map array and see if any more 
  for(let i = 0; i < map.length; i++) {
    
    for(let j = 0; j < map[i].length; j++) {
      
      // Create a string of i & j concatenated for comparison with dive location coordinates
      let iJString = "" + i + j;
      
      // Only check the coordinates that we don't know
      if(xYString != iJString) {
        
        // Increment the O count
        if (map[i][j] == "O") {
          oCount += 1;
        }
        
      }    
      
    }
    
  }
  

  // If the dive locatin value is X or O, but there is remaining treasure, return "Found"
  if((diveLocationValue == "X" || diveLocationValue == "O") && oCount > 0) {
    result = "Found";
  }
  
  // If the dive location value is O and there is no remaining treasure, return "Recovered"
  if(diveLocationValue == "O" && oCount == 0) {
    result = "Recovered";
  }

  return result;
}

