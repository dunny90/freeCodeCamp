/*
Inventory Update
Given a 2D array representing the inventory of your store, and another 2D array representing a shipment you have received, return your updated inventory.

Each element in the arrays will have the format: [quantity, "item"], where quantity is an integer and "item" is a string.
Update items in the inventory by adding the quantity of any matching items from the shipment.
If a received item does not exist in the current inventory, add it as a new entry to the end of the inventory.
Return inventory in the order it was given with new items at the end in the order they appear in the shipment.
For example, given an inventory of [[2, "apples"], [5, "bananas"]] and a shipment of [[1, "apples"], [3, "bananas"]], return [[3, "apples"], [8, "bananas"]].
*/

updateInventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"]])   // should return [[3, "apples"], [8, "bananas"]].
updateInventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"], [4, "oranges"]])   // should return [[3, "apples"], [8, "bananas"], [4, "oranges"]].
updateInventory([], [[10, "apples"], [30, "bananas"], [20, "oranges"]]) // should return [[10, "apples"], [30, "bananas"], [20, "oranges"]].
updateInventory([[0, "Bowling Ball"], [0, "Dirty Socks"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) // should return [[1, "Bowling Ball"], [0, "Dirty Socks"], [1, "Hair Pin"], [0, "Microphone"], [1, "Half-Eaten Apple"], [1, "Toothpaste"]].

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
  
  return currentInventory;
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
