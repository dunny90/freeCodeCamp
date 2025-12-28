/*
Daylight Hours
December 21st is the winter solstice for the northern hemisphere and the summer solstice for the southern hemisphere. That means it's the day with the least daylight in the north and the most daylight in the south.

Given a latitude number from -90 to 90, return a rough approximation of daylight hours on the solstice using the following table:

Latitude	Daylight Hours
-90	24
-75	23
-60	21
-45	15
-30	13
-15	12
0	12
15	11
30	10
45	9
60	6
75	2
90	0
If the given latitude does not exactly match a table entry, use the value of the closest latitude.
*/

daylightHours(45)   // should return 9.
daylightHours(0)    // should return 12.
daylightHours(-90)  // should return 24.
daylightHours(-10)  // should return 12.
daylightHours(23)   // should return 10.
daylightHours(88)   // should return 0.
daylightHours(-33)  // should return 13.
daylightHours(70)   // should return 2.


function daylightHours(latitude) {

    // Pair of arrays to store latitude boundaries and corresponding daylight hour values
    let latitudes = [90, 75, 60, 45, 30, 15, 0, -15, -30, -45, -60, -75, -90];
    let hours = [0, 2, 6, 9, 10, 11, 12, 12, 13, 15, 21, 23, 24];
    let result = 0;

    // Loop through the latitudes
    for(let i = 0; i < latitudes.length; i++) {

        // If the current latitude minus the value passed in is less than 8, then we're at the closest index
        if(latitudes[i] - latitude < 8) {
            // Store the result
            result = hours[i];
            break;
        }
    }

    console.log(result);
  return result;
}
