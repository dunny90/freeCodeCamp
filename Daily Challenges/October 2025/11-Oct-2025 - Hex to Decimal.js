/*
Hex to Decimal
Given a string representing a hexadecimal number (base 16), return its decimal (base 10) value as an integer.

Hexadecimal is a number system that uses 16 digits:

0-9 represent values 0 through 9.
A-F represent values 10 through 15.
Here's a partial conversion table:

Hexadecimal	Decimal
0	0
1	1
...	...
9	9
A	10
...	...
F	15
10	16
...	...
9F	159
A0	160
...	...
FF	255
100	256
The string will only contain characters 0–9 and A–F.
*/

hexToDecimal("A")   // should return 10.
hexToDecimal("15")  // should return 21.
hexToDecimal("2E")  // should return 46.
hexToDecimal("FF")  // should return 255.
hexToDecimal("A3F") // should return 2623

function hexToDecimal(hex) {
  
  // Check if numeric - returns -1 if not numeric
  let decimal = calculateDecimal(hex);

  return decimal;
}

function calculateDecimal(str) {
  
  // Keep track of whether the total decimal
  let decimal = 0;
  let charDecimal = 0;
  
  // 'A' has a UTF value of 65...so to convert to 10 we need to subtract 55
  let UTFSubtractor = 55;
  
  // As we're reading the array from back to front, we need this to keep track of what power to use
  let multiplier = 0;
  
  for(let i = str.length-1; i >= 0; i--) {
    
    // Loop through the characters and check if numeric
    if(isNaN(str[i])) {
      
      // Convert the char to a decimal by getting the UTF 16 value
      let UTF16Value = str[i].charCodeAt(0);
      //  Then taking off the subtractor    
      let hexValue = UTF16Value - UTFSubtractor;
      
      // To get the decimal, we need to multiply the hex char value by 16^X, where X is the position in the string from the end
      charDecimal = hexValue * Math.pow(16, multiplier);
       
    } else {
      charDecimal = Number(str[i]) * Math.pow(16, multiplier);
    }

    // Sum each character
    decimal += charDecimal;
    
    // Increment the power multiplier
    multiplier++;
  }
  return decimal;
}
