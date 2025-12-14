/*
Roman Numeral Builder
Given an integer, return its equivalent value in Roman numerals.

Roman numerals use these symbols:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Roman numerals are written from largest to smallest, left to right using the following rules:

Addition is used when a symbol is followed by one of equal or smaller value. For example, 18 is written as XVIII (10 + 5 + 1 + 1 + 1 = 18).
Subtraction is used when a smaller symbol appears before a larger one, to represent 4 or 9 in any place value. For example, 19 is written as XIX (10 + (10 - 1)).
No symbol may be repeated more than three times in a row. Subtraction is used when you would otherwise need to write a symbol more than three times in a row. So the largest number you can write is 3999.
Here's one more example: given 1464, return "MCDLXIV" (1000 + (500 - 100) + 50 + 10 + (5 - 1)).
*/

toRoman(18)     // should return "XVIII".
toRoman(19)     // should return "XIX".
toRoman(1464)   // should return "MCDLXIV".
toRoman(2025)   // should return "MMXXV".
toRoman(3999)   // should return "MMMCMXCIX".

function toRoman(num) {

    // To represent the numeral/value pairs
    // Includes subtraction rules
    var numerals = [{
        numeral : "I",
        value : 1
    },
    {
        numeral : "IV",
        value : 4
    },
    {
        numeral : "V",
        value : 5
    },
    {
        numeral : "IX",
        value : 9
    },
    {
        numeral : "X",
        value : 10
    },
    {
        numeral : "XL",
        value : 40
    },
    {
        numeral : "L",
        value : 50
    },
    {
        numeral : "XC",
        value : 90
    },
    {
        numeral : "C",
        value : 100
    },
    {
        numeral : "CD",
        value : 400
    },
    {
        numeral : "D",
        value : 500
    },
        {
        numeral : "CM",
        value : 900
    },
    {
        numeral : "M",
        value : 1000
    }
    ]

    // To store the result numeral string
    let result = "";
    
    // Loop through the numerals starting with largest
    for(let i = numerals.length-1; i >= 0; i--) {
        
        // If the number is greater than the current numeral value
        if(num >= numerals[i].value) {

            // Keep looping until the number is less than the current numeral
            while(num >= numerals[i].value) {
                // Subtract the numeral value from the number
                num -= numerals[i].value;
                // Add the numeral to the result string
                result += numerals[i].numeral;
                
            }

        }

        // If the number is 0 then break
        if(num == 0) {
            break;
        }
            
    }
    
    console.log(result);

  return result;
}