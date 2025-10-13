/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
The function updateInventory should return an array.
*/

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) // should return an array with a length of 6.

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) // should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) // should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) // should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].

updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) // should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].


function updateInventory(currentInventory, newInventory) {
  
  // Loop through the new inventory
  for(let i = 0; i < newInventory.length; i++) {
    
    // Check if the new item is in the current inventory list
    let itemIndex = isItemInArray(newInventory[i][1], currentInventory);
    
    // Check if item found
    if(itemIndex == -1) {
      // Not in the list so add it
      currentInventory.push(newInventory[i]);
    } else {
      // Already in the list, so update the quantity
      currentInventory[itemIndex][0] += newInventory[i][0];
    }
    
  } 
  
  // Sort using the second element in the array
  return currentInventory.sort((a, b) => (a[1].localeCompare(b[1])));
}

function isItemInArray(item, array) {
  
  // Default to -1 if item not found
  let itemIndex = -1;
  
  // Loop through the array and return true if item found.
  // Cannot use indexOf() due to being 2D
  for(let i = 0; i < array.length; i++) {
    
    if(array[i][1] == item) {
      // Item found - return the index
      itemIndex = i;
      break;
    }
  }
  
  return itemIndex;
}
