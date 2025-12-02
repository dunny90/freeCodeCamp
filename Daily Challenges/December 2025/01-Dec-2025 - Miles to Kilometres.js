/*
Miles to Kilometers
Given a distance in miles as a number, return the equivalent distance in kilometers.

The input will always be a non-negative number.
1 mile equals 1.60934 kilometers.
Round the result to two decimal places.
*/

convertToKm(1)      // should return 1.61.
convertToKm(21)     // should return 33.8.
convertToKm(3.5)    // should return 5.63.
convertToKm(0)      // should return 0.
convertToKm(0.621371) // should return 1.

function convertToKm(miles) {

    // Conversion rate
    let conversion = 1.60934;

    // Perform conversion and round
    let kilometers = (miles * conversion).toFixed(2);

    console.log(Number(kilometers));
    // Convert back to Number before returning to ensure correct formatting
  return Number(kilometers);
}