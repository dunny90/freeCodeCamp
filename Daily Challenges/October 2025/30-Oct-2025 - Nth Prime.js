/*
Nth Prime
A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. The first five prime numbers are 2, 3, 5, 7, and 11.

Given a positive integer n, return the nth prime number. For example, given 5 return the 5th prime number: 11.
*/

nthPrime(5) // should return 11.
nthPrime(10) // should return 29.
nthPrime(16) // should return 53.
nthPrime(99) // should return 523.
nthPrime(1000) // should return 7919.

function nthPrime(n) {
  
  // Array to store the prime numbers found
  let primeNumbers = [];
  // Flag to control loop exit - when the nth prime is found
  let primeFound = false;
  // Numbers to check in first iteration
  let initialCheckRange = 1000;
  // Number to increment the check range by when looping recursively
  let checkRangeIncrement = 1000;
  // Counter to track how many times we've resized the number range we are checking
  let resizeCounter = 0;
  // Starting position - start at 2 because this is the first prime number
  let startPos = 2;
  // End position - the intial check range plus the check range increment for however many times we've resized
  let endPos = initialCheckRange + (checkRangeIncrement * resizeCounter);

  
  // Loop until the nth prime has been found
  while(!primeFound) {
    
    // Find the prime numbers for the number range provided
    let tempArray = sievePrimeNumbers(startPos, endPos, n);
    
    // Loop through these and add them to the prime numbers array - until we hit the nth prime
    for(let i = 0; i < tempArray.length; i++) {
      if(primeNumbers.length < n) {
        primeNumbers.push(tempArray[i]);
      }
    }
    
    // Check if result not found
    if(primeNumbers.length < n) {
      
      // Need to resize array and carry on searching
      // Add one to the check range plus whatever we're incrementing by. This will increase
      // with the number of resizes we do
      let newStartingNumber = (initialCheckRange + 1) + (resizeCounter * checkRangeIncrement);
      // Resize the ending number. Increases with the nuber of resize loops, as with the starting number
      let newEndingNumber = initialCheckRange + (resizeCounter + 1) * checkRangeIncrement;
      resizeCounter++;
      
      // Set the starting position to search the new range
      startPos = newStartingNumber;
      endPos = newEndingNumber;

    } else {
      // Loop exit condition - the nth prime has been found
      primeFound = true;
      break;
    }
    
  }

  return primeNumbers[primeNumbers.length-1];
}


// Function to work out the prime numbers in the given range
function sievePrimeNumbers(startPos, endPos, n) {
  
  // Array to store the prime numbers found
  let primeNumbers = [];
  
  // Loop through the numbers in the given range
  for(let i = startPos; i < endPos; i++) {
    
    let isPrime = true;
    
    // Loop through and compare each 'i' number with 'j'
    for(let j = 2; j < endPos; j++) {
      
      // Only need to check 'j' numbers that are less than 'i' as these are the ones that 'i' could be divisible by
      if(j < i) {
        
        // If 'i' being analysed is not equal to j, and mods to zero, then not prime
        if(i != j && i % j == 0) {
          isPrime = false;
          break;  // No point continuing to check this 'i' number
        }
        
      } else {
        // No need to check numbers greater than the number being analysed
        break;
      }
      
    }
    
    // If prime then add to prime numbers array
    if(isPrime) {
      primeNumbers.push(i);
    }
    
  }
  
  return primeNumbers;
}
