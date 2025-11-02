/*
SpOoKy~CaSe
Given a string representing a variable name, convert it to "spooky case" using the following constraints:

Replace all underscores (_), and hyphens (-) with a tilde (~).
Capitalize the first letter of the string, and every other letter after that. Ignore the tilde character when counting. Make all other letters lowercase.
For example, given hello_world, return HeLlO~wOrLd.
*/

spookify("hello_world") // should return "HeLlO~wOrLd".
spookify("Spooky_Case") // should return "SpOoKy~CaSe".
spookify("TRICK-or-TREAT") // should return "TrIcK~oR~tReAt".
spookify("c_a-n_d-y_-b-o_w_l") // should return "C~a~N~d~Y~~b~O~w~L".
spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts") // should return "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS".

function spookify(boo) {
  
  // Replace all underscores with tilda using global tag
  boo = boo.replace(/_/g, "~");
  // Replace all hyphens with tilda using global tag
  boo = boo.replace(/-/g, "~");  
  
  // Split the string into an array so we can loop through and make adjustments
  let array = boo.split("");
  
  // Flag to track whether the next letter should be capitalised
  let capitaliseNextLetter = true;
  
  // Loop through the array
  for(let i = 0; i < array.length; i++) {
    
    // Capitalise first letter and every other letter after that - ignoring any tildas
    if(array[i] != '~') {
      // If the next letter should be capitalised, do so and then set the captialiseNextLetter flag to false
      if(capitaliseNextLetter) {
        array[i] = array[i].toUpperCase();
        capitaliseNextLetter = false;
      } else {
        // If the next letter should NOT be capitalised, set to lower case then set the captialiseNextLetter flag to true
        array[i] = array[i].toLowerCase();
        capitaliseNextLetter = true;
      }
    }
  }
  
  // Change back to string using join
  boo = array.join("");
  
  return boo;
}
