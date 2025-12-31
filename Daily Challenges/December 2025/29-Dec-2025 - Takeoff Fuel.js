/*
Takeoff Fuel
Given the numbers of gallons of fuel currently in your airplane, and the required number of liters of fuel to reach your destination, determine how many additional gallons of fuel you should add.

1 gallon equals 3.78541 liters.
If the airplane already has enough fuel, return 0.
You can only add whole gallons.
Do not include decimals in the return number.
*/

fuelToAdd(0, 1)         // should return 1.
fuelToAdd(5, 40)        // should return 6.
fuelToAdd(10, 30)       // should return 0.
fuelToAdd(896, 20500)   // should return 4520.
fuelToAdd(1000, 50000)  // should return 12209.

function fuelToAdd(currentGallons, requiredLiters) {

    // Conversion rate
    let gallonsToLitres = 3.78541;
    let result = 0;

    // Work out the current number of litres
    let currentLitres = currentGallons * gallonsToLitres;

    // Only perform the calculation if we've not got enough litres
    if(currentLitres < requiredLiters) {

        // Work out the number of gallons needed
        let requiredGallons = (requiredLiters - currentLitres) / gallonsToLitres;

        // Round the number of gallons up to the nearest integer
        result = Math.ceil(requiredGallons);
    }

    console.log(result);

  return result;
}