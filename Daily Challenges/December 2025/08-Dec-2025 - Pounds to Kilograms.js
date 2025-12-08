/*
Pounds to Kilograms
Given a weight in pounds as a number, return the string "(lbs) pounds equals (kgs) kilograms.".

Replace "(lbs)" with the input number.
Replace "(kgs)" with the input converted to kilograms, rounded to two decimals and always include two decimal places in the value.
1 pound equals 0.453592 kilograms.
If the input is 1, use "pound" instead of "pounds".
If the converted value is 1, use "kilogram" instead of "kilograms".
*/

convertToKgs(1)         // should return "1 pound equals 0.45 kilograms.".
convertToKgs(0)         // should return "0 pounds equals 0.00 kilograms.".
convertToKgs(100)       // should return "100 pounds equals 45.36 kilograms.".
convertToKgs(2.5)       // should return "2.5 pounds equals 1.13 kilograms.".
convertToKgs(2.20462)   // should return "2.20462 pounds equals 1.00 kilogram.".

function convertToKgs(lbs) {

    // The placeholder result
    let result = "(lbs) pounds equals (kgs) kilograms.";
    let conversionRate = 0.453592;
    // Convert to kgs
    let kgs = lbs * conversionRate;
    // Then convert to 2dp
    kgs =( (kgs * 100) / 100).toFixed(2);

    // Replace terminology if unit is singular
    if(lbs == 1) {
        result = result.replace("pounds", "pound");
    }
    // Replace terminology if unit is singular
    if(kgs == 1) {
    result = result.replace("kilograms", "kilogram");
    }

    // Replace the weight values in the string
    result = result.replace("(lbs)", lbs);
    result = result.replace("(kgs)", kgs);

    console.log(result);
    
  return result;
}