/*
Pairwise
Given an array of integers and a target number, find all pairs of elements in the array whose values add up to the target and return the sum of their indices.

For example, given [2, 3, 4, 6, 8] and 10, you will find two valid pairs:

2 and 8 (2 + 8 = 10), whose indices are 0 and 4
4 and 6 (4 + 6 = 10), whose indices are 2 and 3
Add all the indices together to get a return value of 9.

*/

pairwise([2, 3, 4, 6, 8], 10)       // should return 9.
pairwise([4, 1, 5, 2, 6, 3], 7)     // should return 15.
pairwise([-30, -15, 5, 10, 15, -5, 20, -40], -20)       // should return 22.
pairwise([7, 9, 13, 19, 21, 6, 3, 1, 4, 8, 12, 22], 24) // should return 10.

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
        
      }
      
    }
    
  }

  console.log(totalSumOfIndecis);
  
  return totalSumOfIndecis;
}
