/*
Counting Cards
A standard deck of playing cards has 13 unique cards in each suit. Given an integer representing the number of cards to pick from the deck, return the number of unique combinations of cards you can pick.

Order does not matter. Picking card A then card B is the same as picking card B then card A.
For example, given 52, return 1. There's only one combination of 52 cards to pick from a 52 card deck. And given 2, return 1326, There's 1326 card combinations you can end up with when picking 2 cards from the deck.
*/

combinations(52) // should return 1.
combinations(1) // should return 52.
combinations(2) // should return 1326.
combinations(5) // should return 2598960.
combinations(10) // should return 15820024220.
combinations(50) // should return 1326.

function combinations(sampleSize) {
  
  // Need to calculate the binomial coefficient. In order to do this we must use a formula
  
  let totalCards = 52;
  
  // Define edge cases
  if(sampleSize < 0 || sampleSize > totalCards) {
    return 0;
  }
  
  if(sampleSize == 0 || sampleSize == totalCards) {
    return 1;
  }
  
  if(sampleSize == totalCards || sampleSize == totalCards - 1) {
    return totalCards;
  }
  
  let result = totalCards;
  
  // Starting from 2, loop up to and including the sample card size
  for(let i = 2; i <= sampleSize; i++) {
    
    // Use formula below to compute result
    result *= (totalCards - i + 1) / i;
    
  }
  
  // Round the result to return a whole number
  return Math.round(result);
} 
