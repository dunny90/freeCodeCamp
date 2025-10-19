/*
Missing Socks
Given an integer representing the number of pairs of socks you started with, and another integer representing how many wash cycles you have gone through, return the number of complete pairs of socks you currently have using the following constraints:

Every 2 wash cycles, you lose a single sock.
Every 3 wash cycles, you find a single missing sock.
Every 5 wash cycles, a single sock is worn out and must be thrown away.
Every 10 wash cycles, you buy a pair of socks.
You can never have less than zero total socks.
Rules can overlap. For example, on wash cycle 10, you will lose a single sock, throw away a single sock, and buy a new pair of socks.
Return the number of complete pairs of socks.
*/

sockPairs(2, 5) // should return 1.
sockPairs(1, 2) // should return 0.
sockPairs(5, 11) // should return 4.
sockPairs(6, 25) // should return 3.
sockPairs(1, 8) // should return 0.

function sockPairs(pairs, cycles) {
  
  // Work out number of socks
  let numberOfSocks = pairs * 2;
  
  for(let cycleCount = 1; cycleCount <= cycles; cycleCount++) {
    
    // Every 2 cycles - decrement
    if(cycleCount % 2 == 0) {
      numberOfSocks--;
    }
    
    // Every 3 cycles - increment
    if(cycleCount % 3 == 0) {
      numberOfSocks++;
    }
    
    // Every 5 cycles - decrement
    if(cycleCount % 5 == 0) {
      numberOfSocks--;
    }
    
    // Every 10 cycles - add 2
    if(cycleCount % 10 == 0) {
      numberOfSocks+=2;
    }
    
  }
  
  // If less than 0, set to 0
  if(numberOfSocks < 0) {
    numberOfSocks = 0;
  }

  // Work out the number of pairs
  pairs = numberOfSocks / 2;
  
  // Round down and return
  return Math.floor(pairs);
}
