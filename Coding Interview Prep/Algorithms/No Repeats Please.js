/*
No Repeats Please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

permAlone("aab")       // should return a number.
permAlone("aab")       // should return 2.
permAlone("aaa")       // should return 0.
permAlone("aabb")      // should return 8.
permAlone("abcdefa")   // should return 3600.
permAlone("abfdefa")   // should return 2640.

function permAlone(str) {
  return findPermutations(str).length;
}

function findPermutations(string) {
  
  // Array to keep track of permutations
  let permutationArray = [];
  
  // Convert the string to a string array
  let stringArray = string.split("");
  
  // First call to recursive procedure - start at index 0
  recursivePerms(0, stringArray, permutationArray);
  
  // Sort the array once the recursive function completes
  permutationArray.sort();
  
  // Now we have all of the permutations, find out which ones are non-repeating
  let nonRepeatingPerms = getNonRepeatingPerms(permutationArray);
  
  // Sort the non-repating array
  return nonRepeatingPerms.sort();  
}

function recursivePerms(index, stringArray, permutationArray) {
  
  // Define the base case
  if(index == stringArray.length) {
    // Add the string to the array we're using to keep track of all permutations
    permutationArray.push(stringArray.join(""));
    return;
  }
  
  // Loop through the string array, starting at the index that the recursive function is currently on
  for(let i = index; i < stringArray.length; i++) {
    // Recursivly move through the string, swapping characters as we go
    // Swap 'index' position with 'i' position and carry on until base case met
    swap(stringArray, index, i);
    recursivePerms(index + 1, stringArray, permutationArray);
    
    // As the recursion backtracks, we need to continue to swap characters
    swap(stringArray, index, i);
  }
}

function swap(array, a, b) {
  // Keep track of character 'a'
  let temp = array[a];
  // Swap 'a' to 'b'
  array[a] = array[b];
  // Swap 'b' to 'a' which is stored in temp
  array[b] = temp;
  return array;
}

function getNonRepeatingPerms(permutationArray) {
  
  // Array to keep track of non-repeating permutations  
  let nonRepeatPermArray = [];
  
  // Loop through each permutation
  for(let i = 0; i < permutationArray.length; i++) {
    
    // Current permutation string
    let string = permutationArray[i];
    
    // Flag to track duplicate characters
    let duplicatesFound = false;
    
    // Loop through the characters and break if the current character is the same as the next
    for(let j = 0; j < string.length-1; j++) {
      if(string[j] == string[j+1]) {
        duplicatesFound = true;
        break;
      } 
    }
    
    // Log the permutation if no duplicates found
    if(!duplicatesFound) {
      nonRepeatPermArray.push(string);
    }   
    
  }
  
  return nonRepeatPermArray;
}
