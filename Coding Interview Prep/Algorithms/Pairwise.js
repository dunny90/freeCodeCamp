/*
Pairwise
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6

*/

pairwise([1, 4, 2, 3, 0, 5], 7) // should return 11.
pairwise([1, 3, 2, 4], 4) // should return 1.
pairwise([1, 1, 1], 2) // should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) // should return 10.
pairwise([], 100) // should return 0.

function pairwise(arr, arg) {
  
  // Keep track of which indecis have been used
  let indecisUsed = [];
  // Keep track of the total sum of indecis
  let totalSumOfIndecis = 0;
  
  // Use nested loops to compare each element with each other element apart from itself
  for(let i = 0; i < arr.length; i++) {
    
    for(let j = 0; j < arr.length; j++) {
      
      // Don't compare each element with itself
      if(i != j) {
        
        // If the contents of these elements sum to equal the arg variable
        if(arr[i] + arr[j] == arg) {          
            
          // If these indecis haven't been used, use them and store them
          if(indecisUsed.indexOf(i) == -1 && indecisUsed.indexOf(j) == -1) {
            
            // Sum the indecis and add to running total
            totalSumOfIndecis += i + j;

            // Keep track of these indecis so that the same combination isn't used again
            indecisUsed.push(i);
            indecisUsed.push(j);
            
          }

        }
        
        // Break when two pairs found
        if(indecisUsed.length == 4) {
          break;
        }
        
      }
      
    }
    
  }
  
  return totalSumOfIndecis;
}
