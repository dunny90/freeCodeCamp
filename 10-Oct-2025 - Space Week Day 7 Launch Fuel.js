/*Space Week Day 7: Launch Fuel
For the final day of Space Week, you will be given the mass in kilograms (kg) of a payload you want to send to orbit. Determine the amount of fuel needed to send your payload to orbit using the following rules:

Rockets require 1 kg of fuel per 5 kg of mass they must lift.
Fuel itself has mass. So when you add fuel, the mass to lift goes up, which requires more fuel, which increases the mass, and so on.
To calculate the total fuel needed: start with the payload mass, calculate the fuel needed for that, add that fuel to the total mass, and calculate again. Repeat this process until the additional fuel required is less than 1 kg, then stop.
Ignore the mass of the rocket itself. Only compute fuel needed to lift the payload and its own fuel.
For example, given a payload mass of 50 kg, you would need 10 kg of fuel to lift it (payload / 5), which increases the total mass to 60 kg, which needs 12 kg to lift (2 additional kg), which increases the total mass to 62 kg, which needs 12.4 kg to lift - 0.4 additional kg - which is less 1 additional kg, so we stop here. The total mass to lift is 62.4 kg, 50 of which is the initial payload and 12.4 of fuel.

Return the amount of fuel needed rounded to one decimal place.
*/

launchFuel(50)     // should return 12.4.
launchFuel(500)    // should return 124.8.
launchFuel(243)    // should return 60.7.
launchFuel(11000)  // should return 2749.8.
launchFuel(6214)   // should return 1553.4.


function launchFuel(payload) {

  
  // Keep track of whether we've finished calculating fuel
  let fuelCalculated = false;
  
  // To keep track of the payload including fuel
  let fuelModifiedPayload = payload;
  
  // To track the fuel required for each calculation
  let fuelRequired = 0;
  let previousFuelRequired = 0;
  
  // Use recursion to find the fuel required
  while(!fuelCalculated) {
    // Calculate the fuel for the payload, which gets modified to include fuel with each loop
    fuelRequired = calculateFuel(fuelModifiedPayload);
    // Track the amount of additional fuel is required for the fuel mass
    fuelModifiedPayload += (fuelRequired - previousFuelRequired);
    
    // Exit condition - is the amount of fuel we're adding less than 1 yet?
    if((fuelRequired - previousFuelRequired) < 1) {
      fuelCalculated = true;
    } else {      
      previousFuelRequired = fuelRequired;
    }
  }
  
  return Number(fuelRequired.toFixed(1));
}

// Calculate fuel based on load passed in
function calculateFuel(payload) {
  // 1KG of fuel per 5kg mass
  let weightPerKGFuel = 5;
  
  let fuelForPayload = payload / weightPerKGFuel;
  
  return fuelForPayload;
}
